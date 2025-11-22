let body = document.querySelector('body');
let contentArea = document.querySelector('#contentArea');
let video = contentArea.querySelector('video');

function mute () {
  video.muted = !video.muted;
}

video.addEventListener('click', mute);

let videoList = ["../videos/bhoi.mp4", "../videos/pb.mp4", "../videos/sohra.mp4"]
const baseURL = window.location.href;


