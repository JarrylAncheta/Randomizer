<html>
<head>
<title>Task Randomizer</title>
<style>
body {
margin-top: 30px;
}
</style>
</head>
   
<script>
function displayRandomImages()
{
   //array of images with image location, height, and width
   var imageArray = [
   {
     //address URL of the image
    
      src: "MyPics/Image1.jpg",
     //size for the image to be display on webpage
     width: "1400",
     height: "750"
   },
   {
     src: "MyPics/Image2.jpg",
     width: "1400",
     height: "750"
   },
   {
     src: "MyPics/Image3.jpg",
     width: "1400",
     height: "750"
   },
   {
     src: "MyPics/Image4.jpg",
     width: "1400",
     height: "750"
    },
   {
     src: "MyPics/Image5.jpg",
     width: "1400",
     height: "750"
    },
     {
     src: "MyPics/Image6.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image7.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image8.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image9.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image10.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image11.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image12.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image13.jpg",
     width: "1400",
     height: "750"
    },
       {
     src: "MyPics/Image14.jpg",
     width: "1400",
     height: "750"
    }];
   

    //find the length of the array of images
    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
        newArray[i].width = imageArray[i].width;
        newArray[i].height = imageArray[i].height;
    }

  // create random image number
  function getRandomNum(min, max)
  {
      // generate and return a random number for the image to be displayed
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
  }

  // 0 is first image and (preBuffer.length - 1) is last image of the array
  var newImage = getRandomNum(0, newArray.length - 1);

  // remove the previous images
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
     images[0].parentNode.removeChild(images[0]);
  }
  // display the new random image
  document.body.appendChild(newImage);
}
   
</script>

<body>
<div>
<center>
<h2 style="color:green"> Daily Objective </h2>
<h4> Press the button to reveal your daily objective/challenge </h4>
<button onclick="displayRandomImages();"> CLICK ME </button>
</center>
</div>
</body>
</html>
