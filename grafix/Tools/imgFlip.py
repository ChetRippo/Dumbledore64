from PIL import Image
import time, glob

# User input
folder = raw_input("Folder to use (case-sensitive): ")
fileType = raw_input("File type (png, jpg, etc.): ")
fileEnding = raw_input("Text to append to names (leave blank to flip and overwrite): ")

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
		# Flip image
		pic = pic.transpose(Image.FLIP_LEFT_RIGHT)
		# Save file back to folder with ending appended (overwrite if no ending specified)
		pic = pic.save(img[:-len(fileType)-1] + fileEnding + "." + fileType, fileType)
		print "Flipped " + img +" -> " + img[:-len(fileType)-1] + fileEnding + "." + fileType
	except:
		print "Unable to flip image: " + img
