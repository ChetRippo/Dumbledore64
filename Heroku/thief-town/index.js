console.log("here");
var express = require('express.io')
var app = express()
app.http().io()
app.use(express.static(__dirname + '/public'));
var io = app.io
console.log("here2");
var utils = require("./utils")

io.set('log level', 3);
io.set("transports", ["websocket"])
//io.set("polling duration", 10)

app.listen(process.env.PORT || 5000)

var lobbies = {}
console.log("here3");
//to everyone
function SendToLobby(type, data, roomcode){
    var lobby = lobbies[roomcode]
    if(lobby){
        for(i = 0; i < lobby.clients.length; i++){
            var mobileClient = lobby.clients[i]
            if(mobileClient && mobileClient.socket){
                mobileClient.socket.emit(type, data)
            }
        }

        lobby.host.emit(type, data)
    }
}

//to just phones
function SendToMobile(type, data, roomcode){
    var lobby = lobbies[roomcode]
    if(lobby){
        for(i = 0; i < lobby.clients.length; i++){
            var mobileClient = lobby.clients[i]
            if(mobileClient && mobileClient.socket){
                mobileClient.socket.emit(type, data)
            }
        }
    }
}

//send to unity
function SendToHost(type, data, roomcode){
    var lobby = lobbies[roomcode]
    if(lobby){
        lobby.host.emit(type, data)
    }
}

//send from 
function SendFromMobileToLobby(type, data, roomcode){
    var lobby = lobbies[roomcode]
    if(lobby){
        for(i = 0; i < lobby.clients.length; i++){
            var mobileClient = lobby.clients[i]
            if(mobileClient && mobileClient.username && mobileClient.username != data.username){
                mobileClient.socket.emit(type, data)
            }
        }

        lobby.host.emit(type, data)
    }
}

//send to one mobile
function SendToOneMobile(type, data, roomcode, username){ 
    var lobby = lobbies[roomcode]
    if(lobby){
        for(i = 0; i < lobby.clients.length; i++){
            var mobileClient = lobby.clients[i]
            if(mobileClient && mobileClient.username && mobileClient.username == username){
                mobileClient.socket.emit(type, data)
            }
        }
    }
}

function InitGame(socket){
    var roomcode = utils.GenerateRoomcode()
    while(roomcode in lobbies){
        roomcode = utils.GenerateRoomcode()
    }

    lobbies[roomcode] = {
        host: socket,
        clients: [],
        inGame: false
    }

    socket.emit('RoomCode', {  message: roomcode })
    
    console.log("[Game]Setting up lobby with room code: " + roomcode)

    return roomcode
}

// return true if the roomcode points to a valid lobby
function ConnectMobileClient(data, socket) {
    var lobby = lobbies[data.roomcode.toUpperCase()]
    if (lobby && !lobby.inGame) {
        
        var username = utils.GenerateRoomcode()
        
        var used = false
        do{
            used = false
            for(i = 0; i < lobby.clients.length; i++){
                if(lobby.clients[i].username == username){
                    used = true
                    username = utils.GenerateRoomcode()
                }
            }
        }while(used)

        var client = {
            username: username,
            socket: socket
        }
        lobby.clients.push(client)
        return true
    }
    return false
}

io.sockets.on('connection', function(socket) {
    var addr = socket.handshake.address
    console.log("[Game]Client socket connected from: " + addr.address + ":" + addr.port)

    var type
    var roomcode
    var username

    // accept an identifier to tell if we're connecting to Unity or a phone
    socket.on('CreateRoom', function(data){
        console.log("[Game]Client identified as host.")
        type = "host"
        roomcode = InitGame(socket)
    })

    socket.on('JoinRoom', function(data){
        if(data){
            jsonData = JSON.parse(data)
            if(jsonData){
                console.log("[Game]Client identified as mobile with roomcode " + jsonData.roomcode + ".")
                if (ConnectMobileClient(jsonData, socket)) {
                    console.log("roomcode was valid -- added to lobby")
                    type = "mobile"
                    roomcode = jsonData.roomcode.toUpperCase()
                    username = lobbies[roomcode].clients[lobbies[roomcode].clients.length - 1].username
                    socket.emit('valid_roomcode', {})
                    SendToHost('client_connection', { username: username }, roomcode)
                } else {
                    console.log("roomcode was not valid")
                    socket.emit('invalid_roomcode', {})
                }
            }else {
                console.log("roomcode was not valid")
                socket.emit('invalid_roomcode', {})
            }
        }else {
            console.log("roomcode was not valid")
            socket.emit('invalid_roomcode', {})
        }
    })

    socket.on('SetNumber', function(data){
        if(data){
            jsonData = JSON.parse(data)
            if(jsonData){
                console.log("Routing player number packet")
                SendToOneMobile('SetNumber', { num: jsonData.num }, roomcode, jsonData.username) 
            }
        }
    })

    socket.on('controls', function(data){
        if(data){
            jsonData = JSON.parse(data)
            console.log(jsonData)
            if(jsonData){
                jsonData.username = username
                SendToHost('controls', jsonData, roomcode) 
            }
        }
    })

    socket.on('startGame', function(){
        console.log("started game in lobby " + roomcode)
        if(lobbies[roomcode]){
            lobbies[roomcode].inGame = true
        }
    })

    socket.on('endGame', function(){
        console.log("ended game in lobby " + roomcode)
        if(lobbies[roomcode]){
            lobbies[roomcode].inGame = false
        }
    })

    socket.on('resetLobby', function(){
        console.log("resetting lobby " + roomcode)
        SendToMobile('host_disconnected', { }, roomcode)
        if(lobbies[roomcode]){
            lobbies[roomcode].inGame = false
            try{
                if(lobbies[roomcode].clients){
                    for(i = 0; i < lobbies[roomcode].clients.length; i++){
                        client = lobbies[roomcode].clients[i]
                        if(client && client.socket && (client.socket.connected || (client.socket.socket && client.socket.socket.connected))){
                            client.socket.disconnect()
                        }
                    }
                }
            }catch(err){
            }
        }
    })

    // handle disconnections for all types of clients
    socket.on('disconnect', function() {
        // delete the entire lobby, ending the game
        SendToLobby('host_disconnected', { }, roomcode)
        try{
            if(lobbies[roomcode].clients){
                for(i = 0; i < lobbies[roomcode].clients.length; i++){
                    client = lobbies[roomcode].clients[i]
                    if(client && client.socket && (client.socket.connected || (client.socket.socket && client.socket.socket.connected))){
                        client.socket.disconnect()
                    }
                }
            }
        }catch(err){
            ;
        }
        if(type == "host"){
            delete lobbies[roomcode]
            console.log("[Game]Host for room " + roomcode + " disconnected.")
        }else{
            if(lobbies[roomcode]){
                lobbies[roomcode].inGame = false
            }
        }
        //console.log(Object.keys(lobbies).length)
        
    })

})

console.log("~~~~~ ^.^ server running ^.^ ~~~~~")
