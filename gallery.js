/*Name this external file gallery.js*/

let originalText = "Hover over an image below to display here!";

function upDate(previewPic){
   console.log("Event Triggered")
   console.log("Preview Picture:", previewPic);
   console.log("Alt text:", previewPic.alt);
   console.log("Source (src):", previewPic.src);
   const ImgDiv = document.getElementById('image');
   ImgDiv.style.backgroundImage = "url('"+ previewPic.src +"')";
   ImgDiv.innerHTML = previewPic.alt;
}
	function unDo(){
   const ImgDiv = document.getElementById('image');
   ImgDiv.style.backgroundImage = "url('')";
   ImgDiv.innerHTML = originalText;	
	}