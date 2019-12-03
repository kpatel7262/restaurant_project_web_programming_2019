window.onload = pageReady;
function pageReady(){

	//CREATE A HANDLE FOR THE MAIN IMAGE
	var allImages = document.getElementByTagName("Img");

	//GET THE GALLERY IMAGES
	for(var i=1; i<allImages.length; i++)
	{
		allImages[i].onmouseover=switchPic;
		allImages[i].onmouseout=resetImage;
	}
	//reset main image function
	function resetImage(){
		allImages[0].src="images/title.png";
	}
	//CREATE FUNCTIONS TO CHANGE PICTURES
	function switchPic1(){
		allImage[0].src = this.src;
	}
}