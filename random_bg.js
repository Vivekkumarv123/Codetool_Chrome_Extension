// Array containing the filenames of your video files
const videos = [
    'a.mp4',
    'b.mp4',
    'c.mp4',
    'd.mp4',
    'e.mp4',
    'f.mp4',
    'g.mp4',
    'h.mp4',
    'i.mp4',
    'j.mp4',
];

// Function to select a random video from the videos array
function getRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
}

// Function to set the source of the video element to a random video
function setRandomVideo() {
    const videoElement = document.getElementById('bgVideo');
    const randomVideo = getRandomVideo();
    videoElement.src = randomVideo;
}

// Call setRandomVideo function when the page loads to set initial video
window.onload = setRandomVideo;
