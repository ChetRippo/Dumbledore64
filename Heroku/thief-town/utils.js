var GenerateRoomcode = function(){
 return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4).toUpperCase() 
}

module.exports.GenerateRoomcode = GenerateRoomcode