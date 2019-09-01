let net;
let top_predication;

async function app() {
  console.log('Loading mobilenet js..');

  // Load the mobilenet model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  //Load the image
  const imgEl = document.getElementById('myimage');
  console.log("Image ID" + imgEl);
  //Get the image from the URL
  //var imgEl = document.getElementById('imagename').value;
  console.log("Image Found");
  const result = await net.classify(imgEl);
  console.log(result[0].className);
  console.log(result[0].probability);
  console.log(result);
  top_predication = result[0].className;
  //show_result(result[0].className);
  //console.log("called function")

}

async function show_result()
{
  await app();
  existingValue = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = existingValue + " "+ top_predication;
  //document.getElementById("output").append = top_predication
  //pred = app();
  console.log(top_predication);


}
function load_image(){
      const url = document.getElementById('imageurl').value;
      console.log("Image url:" + url)
      var elem = document.createElement('img');
      elem.setAttribute("height", "300");
      elem.setAttribute("width", "300");
      elem.setAttribute("id","myimage");
      elem.setAttribute("crossOrigin","anonymous");
      //document.getElementById("imagePlaceHolder").replaceChild(elem,elem);
      document.getElementById("imagePlaceHolder").appendChild(elem);  
      elem.src = url;
      console.log('Image loaded in DOM ');
}


//app();