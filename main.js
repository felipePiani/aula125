nosex=0;
nosey=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        difference = floor(leftWristX, rightWristX);
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Largura e altura serão = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(nosex, nosey, difference)
}