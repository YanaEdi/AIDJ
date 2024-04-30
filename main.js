song="";
scoreleftwrist=0;
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristx=0;

function preload()
{
song=loadSound("music.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw()
{
    image(video,0,0,600,500);
    fill("pink")
    stroke("pink")
    circle(leftwristx,leftwristy,40)
}


function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function modelLoaded()
{
    console.log("modelisloaded");
    
}

function gotPoses(results)
{
    if(results.length > 0){
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;

        leftwristy=results[0].pose.leftWrist.y;
        rightwristy=results[0].pose.rightWrist.y;

        console.log(results);
    }
}