noteX = 0, noteY = 0;



function preload() {
    clown_note = loadImage('https://i.postimg.cc/T1D0PZSb/1x-X3uz-mustache-clipart-png-photos.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modeloadded)
    poseNet.on('pose', gotPoses)

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("noseX=" + results[0].pose.nose.x);
        console.log("noseY-->" + results[0].pose.nose.y);

        noteX = results[0].pose.nose.x-45
        noteY = results[0].pose.nose.y-40

    }
}

function modeloadded() {
    console.log("!loaded!")
}

function draw() {
    image(video, 0, 0, 300, 300)

    image(clown_note, noteX, noteY, 100, 100)
}

function takeasnap() {
    save('mustace.png')
}