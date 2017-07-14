from __future__ import with_statement

l1p1path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby1/data/player1.txt'
l1p2path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby1/data/player2.txt'
l2p1path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby2/data/player1.txt'
l2p2path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby2/data/player2.txt'
l3p1path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby3/data/player1.txt'
l3p2path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby3/data/player2.txt'
l4p1path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby4/data/player1.txt'
l4p2path = '/home/glassknu/public_html/Dumbledore64/Websockets/Lobby4/data/player2.txt'

def web_socket_do_extra_handshake(request):
	pass

def web_socket_transfer_data(request):
	while True:
		while True:
			try:
				line = request.ws_stream.receive_message()
				return
				if line is None:
					continue
				elif line[0] == 'c':
					return
				i = 0
				request.ws_stream.send_message('1' + i, binary=False)
				data = []
				with open(l1p1path, 'r') as file:
					data = file.readlines()
					if data[0] != '09000 9000 000030000000':
						i = i+1
					with open(l1p2path, 'r') as file:
						data = file.readlines()
						if data[0] != '09000 9000 000030000000':
							i = i+1
						request.ws_stream.send_message('1' + i, binary=False)
				i = 0
				with open(l2p1path, 'r') as file:
					data = file.readlines()
					if data[0] != '09000 9000 000030000000':
						i = i+1
					with open(l2p2path, 'r') as file:
						data = file.readlines()
						if data[0] != '09000 9000 000030000000':
							i = i+1
						request.ws_stream.send_message('2' + i, binary=False)
				i = 0
				with open(l3p1path, 'r') as file:
					data = file.readlines()
					if data[0] != '09000 9000 000030000000':
						i = i+1
					with open(l3p2path, 'r') as file:
						data = file.readlines()
						if data[0] != '09000 9000 000030000000':
							i = i+1
						request.ws_stream.send_message('3' + i, binary=False)
				i = 0
				with open(l4p1path, 'r') as file:
					data = file.readlines()
					if data[0] != '09000 9000 000030000000':
						i = i+1
					with open(l4p2path, 'r') as file:
						data = file.readlines()
						if data[0] != '09000 9000 000030000000':
							i = i+1
						request.ws_stream.send_message('4' + i, binary=False)
			except:
				continue
			break
