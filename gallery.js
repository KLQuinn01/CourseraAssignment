function setImg(){
   const options = ["1650.jpg", "2060.jpg", "3050.jpg", "GPU.jpg", "pcFull1.jpg", "pcFull2.jpg"]

   const currentImages = document.querySelectorAll (".flex img")
   for (var i =0; i < currentImages.length; i++) {
    console.log ("Image" + i)

    randomImg = "images/"+ options[Math.floor(Math.random() * options.length)];

    currentImages[i].src = randomImg;

    currentImages[i].setAttribute("tabindex","0");

    currentImages[i].onfocus = function () {
      console.log("Image " + i + " focused");
      this.style.border = "10px solid red";
    };

    // Blur styling             
    currentImages[i].onblur = function () {
      console.log("Image " + i + " blurred");
      this.style.border = "10px solid black"; 
    };

   }
   }

let originalText = "Hover over an image below to display here!";

function upDate(previewPic){
   const ImgDiv = document.getElementById('image');
   ImgDiv.style.backgroundImage = "url('"+ previewPic.src +"')";
   ImgDiv.innerHTML = previewPic.alt;
}
function unDo(){
   const ImgDiv = document.getElementById('image');
   ImgDiv.style.backgroundImage = "url('')";
   ImgDiv.innerHTML = originalText;	
	}