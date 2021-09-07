lipsX=0;
lipsY=0;

function preload() {
  clown_lips = loadImage('https://i.pinimg.com/564x/cf/a6/1a/cfa61a8ae91c2ad609bc3e47914f2dd1.jpg');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    lipsX = results[0].pose.lips.x-40;
    lipsY = results[0].pose.lips.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_lips, lipsX, lipsY, 80, 35);
}

function take_snapshot(){    
  save('Filtered_Img.png');
}
