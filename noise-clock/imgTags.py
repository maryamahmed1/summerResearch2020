# Creating image tags to input into HTML for image classfication project - total of 2008stimuli --> 1003 pairs
for i in range(1, 10):
	inv = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/000"+ str(i) + "_inv.jpg"
	ori = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/000"+ str(i) + "_ori.jpg"

	print('<img class="center mySlides" id="000'+str(i)+'_ori" src="'+ori+'" width="520" height="520"/>')
	print('<img class="center mySlides" id="000'+str(i)+'_inv" src="'+inv+'" width="520" height="520"/>')
for i in range(10,100):
	inv = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/00"+ str(i) + "_inv.jpg"
	ori = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/00"+ str(i) + "_ori.jpg"

	print('<img class="center mySlides" id="00'+str(i)+'_ori" src="'+ori+'" width="520" height="520"/>')
	print('<img class="center mySlides" id="00'+str(i)+'_inv" src="'+inv+'" width="520" height="520"/>')
for i in range(100, 1000):
	inv = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/0"+ str(i) + "_inv.jpg"
	ori = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/0"+ str(i) + "_ori.jpg"

	print('<img class="center mySlides" id="0'+str(i)+'_ori" src="'+ori+'" width="520" height="520"/>')
	print('<img class="center mySlides" id="0'+str(i)+'_inv" src="'+inv+'" width="520" height="520"/>')
for i in range(1000, 2001):
	inv = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/"+ str(i) + "_inv.jpg"
	ori = "https://raw.githubusercontent.com/thuzixuan/LocalizationClassificationImage/master/"+ str(i) + "_ori.jpg"

	print('<img class="center mySlides" id="'+str(i)+'_ori" src="'+ori+'" width="520" height="520"/>')
	print('<img class="center mySlides" id="'+str(i)+'_inv" src="'+inv+'" width="520" height="520"/>')