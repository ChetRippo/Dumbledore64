from PIL import Image
import time, glob, os

# User input
folder = raw_input("Folder to use (case-sensitive): ")
fileType = raw_input("File type (png, jpg, etc.): ")

# Get list of images
imgList = glob.glob(folder + "/*." + fileType)
print "Image List:"
print imgList

# Flip every image in list
for img in imgList:
	try:
		# Remove folder name and slash to seperate image name
		imgName = img[len(folder)+1:]
		pic = Image.open(img)
		# Replace l<num> with r<num>
		i = 0
		name = []
		rename = ""
		for l in imgName:
			name.extend(l)
			if (l=="0" or l=="1" or l=="2" or l=="3" or l=="4" or l=="5" or l=="6" or l=="7" or l=="8" or l=="9"):
				if (name[i-1] == "r"):
					name[i-1] = "l"
				else:
					name[i-1] = "r"
			i+=1
		for l in name:
			rename+=l
		# Save file back to folder with ending appended (overwrite if no ending specified)
		pic = pic.save(folder + "/" + rename, fileType)
		# Delete original image
		os.remove(img)
		print "Renamed " + img +" -> " + folder + "/" + rename
	except:
		print "Unable to flip image: " + img
