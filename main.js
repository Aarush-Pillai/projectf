var ing = "";

 objects = []; 

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
  
}
function modelLoaded()
{
    console.log("model is loaded");
    var status = true
    objectDetector.detect(ing, gotResult);
}

function gotResult(error, results)
{
if(error) { console.log(error);}

 console.log(results);
 objects = results
}



function preload()
{
ing = loadImage("dog_cat.jpg")
}

function draw()
{
image(ing,0,0,640,420)
    if(status != "")
{
    for (var i = 0; i < objects.length; i++) { 
        document.getElementById("status").innerHTML="staus objects dected"
        fill(255, 0, 0)
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(255,0,0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }





}

}
