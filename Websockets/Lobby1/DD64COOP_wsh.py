from __future__ import with_statement

p1path = '/home/glassknu/public_html/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby1/data/player1.txt'
p2path = '/home/glassknu/public_html/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby1/data/player2.txt'
obspath = '/home/glassknu/public_html/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby1/data/obstacles.txt'
p1enemypath = '/home/glassknu/public_html/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby1/data/enemies1.txt'
p2enemypath = '/home/glassknu/public_html/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby1/data/enemies2.txt'
scorepath = '/home/glassknu/public_html/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby1/data/score.txt'

def web_socket_do_extra_handshake(request):
	pass

def web_socket_transfer_data(request):
	while True:
		while True:
			try:
				line = request.ws_stream.receive_message()
				if line is None:
					continue
				elif line[0] == 'c':
					newdata = []
					newdata2 = []
					if line[1] == '1':
						p1data = "09000 9000 000030000000"
						newdata.append(p1data)
						with open(p1path, 'w') as p1file:
							p1file.writelines(newdata)
						p1enemies = "-9000 -9000\n"
						newdata2.append(p1enemies)
						newdata2.append(p1enemies)
						newdata2.append(p1enemies)
						newdata2.append(p1enemies)
						with open(p1enemypath, 'w') as p1file:
							p1file.writelines(newdata2)
					elif line[1] == '2':
						p2data = "09000 9000 000030000000"
						newdata.append(p2data)
						with open(p2path, 'w') as p2file:
							p2file.writelines(newdata)
						p2enemies = "-9000 -9000\n"
						newdata2.append(p2enemies)
						newdata2.append(p2enemies)
						newdata2.append(p2enemies)
						newdata2.append(p2enemies)
						with open(p2enemypath, 'w') as p2file:
							p2file.writelines(newdata2)
					scoredata = []
					score = "0"
					scoredata.append(score)
					with open(scorepath, 'w') as scorefile:
	 					scorefile.writelines(scoredata)
					return
				#start player
				elif line[0] == 's':
					#open all player files and find one to add player to- DONT ADD PLAYER IF ALL FULL
					with open(p1path, 'r') as p1file:
	 					# read a list of lines into data
						p1data = p1file.readlines()
					with open(p2path, 'r') as p2file:
						p2data = p2file.readlines()
					newdata = []
					if p1data[0][0] == '0':
						p1data = '1200 238 000030000000'
						newdata.append(p1data)
						request.ws_stream.send_message('1', binary=False)
						request.ws_stream.send_message('u' + p2data[0], binary=False)
						with open(p1path, 'w') as file:
							#write a list of lines from data
							file.writelines( newdata )
					elif p2data[0][0] == '0':
						p2data = '1400 238 000030000000'
						newdata.append(p2data)
						request.ws_stream.send_message('2', binary=False)
						request.ws_stream.send_message('u' + p1data[0], binary=False)
						with open(p2path, 'w') as file:
							#write a list of lines from data
							file.writelines( newdata )
					else:
						request.ws_stream.send_message("no", binary=False)
				#update player location
				elif line[0] == 'u':
					newdata = []
					if line[1] == '1':
						with open(p1path, 'w') as p1file:
							newdata.append(line[2:])
							p1file.writelines(newdata)
						with open(p2path, 'r') as p2file:
							p2data = p2file.readlines()
						request.ws_stream.send_message('u' + p2data[0], binary=False)
					elif line[1] == '2':
						with open(p2path, 'w') as p2file:
							newdata.append(line[2:])
							p2file.writelines(newdata)
						with open(p1path, 'r') as p1file:
							p1data = p1file.readlines()
						request.ws_stream.send_message('u' + p1data[0], binary=False)
				elif line[0] == 'e':
					if line[1] == '1':
						with open(p1enemypath, 'r') as p1file:
							p1enemies = p1file.readlines()
							p1enemies[int(line[2])] = line[3:] + '\n'
						with open(p1enemypath, 'w') as p1file:
							p1file.writelines(p1enemies)
						with open(p2enemypath, 'r') as p2file:
							p2data = p2file.readlines()
						request.ws_stream.send_message('e0' + p2data[0], binary=False)
						request.ws_stream.send_message('e1' + p2data[1], binary=False)
						request.ws_stream.send_message('e2' + p2data[2], binary=False)
						request.ws_stream.send_message('e3' + p2data[3], binary=False)
					elif line[1] == '2':
						with open(p2enemypath, 'r') as p2file:
							p2enemies = p2file.readlines()
							p2enemies[int(line[2])] = line[3:] + '\n'
						with open(p2enemypath, 'w') as p2file:
							p2file.writelines(p2enemies)
						with open(p1enemypath, 'r') as p1file:
							p1data = p1file.readlines()
						request.ws_stream.send_message('e0' + p1data[0], binary=False)
						request.ws_stream.send_message('e1' + p1data[1], binary=False)
						request.ws_stream.send_message('e2' + p1data[2], binary=False)
						request.ws_stream.send_message('e3' + p1data[3], binary=False)
				elif line[0] == 'o':
					with open(obspath, 'r') as obsfile:
						obdata = obsfile.readlines()
					if line[3] == ' ':
						index = int(line[2])
						obdata[index] = line[4:] + '\n'
					else:
						index = int(line[2] + line[3])
						obdata[index] = line[5:] + '\n'
					with open(obspath, 'w') as obsfile:
						obsfile.writelines(obdata)
				elif line == 'ro':
					with open(obspath, 'r') as obsfile:
						obdata = obsfile.readlines()
					request.ws_stream.send_message('ro' + obdata[0], binary=False)
					request.ws_stream.send_message('ro' + obdata[1], binary=False)
					request.ws_stream.send_message('ro' + obdata[2], binary=False)
					request.ws_stream.send_message('ro' + obdata[3], binary=False)
					request.ws_stream.send_message('ro' + obdata[4], binary=False)
					request.ws_stream.send_message('ro' + obdata[5], binary=False)
					request.ws_stream.send_message('ro' + obdata[6], binary=False)
					request.ws_stream.send_message('ro' + obdata[7], binary=False)
					request.ws_stream.send_message('ro' + obdata[8], binary=False)
					request.ws_stream.send_message('ro' + obdata[9], binary=False)
					request.ws_stream.send_message('ro' + obdata[10], binary=False)
					request.ws_stream.send_message('ro' + obdata[11], binary=False)
					request.ws_stream.send_message('ro' + obdata[12], binary=False)
					request.ws_stream.send_message('ro' + obdata[13], binary=False)
					request.ws_stream.send_message('ro' + obdata[14], binary=False)
					request.ws_stream.send_message('ro' + obdata[15], binary=False)
					request.ws_stream.send_message('ok', binary=False)
				elif line[0] == 'p':
					newdata = []
					with open(scorepath, 'r') as scorefile:
						scoredata = scorefile.readlines()
						if int(scoredata[0]) > int(line[1:]):
							newdata.append(scoredata[0])
						else:
							newdata.append(line[1:])
					with open(scorepath, 'w') as scorefile:
						scorefile.writelines(newdata)
					request.ws_stream.send_message('p' + newdata[0], binary=False)
			except:
				continue
			break
