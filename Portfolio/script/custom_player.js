const vidWrapper = document.querySelector('div.player');
const video = vidWrapper.querySelector('.player__video');


const playButton = document.querySelector('.player__button');
const controlPlayCenter = document.querySelector('.player__button_center');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

const volumeTrack = document.querySelector('.volume');
const volumFilled = document.querySelector('.volume__filled');
const volumeIcon = document.querySelector('.volume_icon')
const volumeIconMute = document.querySelector('mute')

const buttonFullscreen = document.querySelector('.player__fullscreen');

console.log(volumeIconMute);

video.addEventListener('click', toggleVideo)
playButton.addEventListener('click', toggleVideo)
controlPlayCenter.addEventListener('click',toggleVideo)
volumeTrack.addEventListener('click', volumeUpdate)
buttonFullscreen.addEventListener('click', fullScreenVideo)
video.addEventListener('dblclick',fullScreenVideo )
volumeIcon.addEventListener('click', volumeMute)



video.ontimeupdate = progressUpdate;
progress.onclick = videoRevind;


function toggleVideo() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = "❚ ❚";
        controlPlayCenter.classList.add('player__button_center_active');

    } else {
        video.pause();
        playButton.innerHTML = "►";
        controlPlayCenter.classList.remove('player__button_center_active');

    }
    
}

function progressUpdate() {
    // console.log(video.duration);
    // console.log(video.currentTime);
    let fullTimeVideo = video.duration;
    let currentTimeVideo = video.currentTime;
    progress.value =  currentTimeVideo/fullTimeVideo;
    progressFilled.style.flexBasis = progress.value*100 + '%';
    
    
    
    // progressFilled.style.FlexBasis = Math.floor(progress * 1000) / 10 +'%';
    // console.log(progress.value);
}

function videoRevind(event) {
    let widthProgress = this.offsetWidth;
    let currentPosition = event.offsetX;
    this.value = 100 * currentPosition/widthProgress;
    video.pause();
    video.currentTime = video.duration * (currentPosition / widthProgress);
    toggleVideo();
    progressFilled.style.flexBasis = this.value  + '%';
    // console.log(this.value = 100 * currentPosition/widthProgress);
    
    // console.log(currentPosition);
    // console.log(this.value = 100 * currentPosition / widthProgress);
    
}
let volumLevel = +getComputedStyle(volumFilled).flexBasis.slice(0, -1) / 100;
video.volume = volumLevel;

console.log(volumFilled.style.flexBasis);
function volumeUpdate(event) {
    let positionEvent = event.offsetX;
    let widthElement = volumeTrack.offsetWidth;
    if (positionEvent <= 0) {
        volumLevel = video.volume = 0; 
    } else {
        volumLevel = video.volume = positionEvent / widthElement;
    }
    
    volumFilled.style.flexBasis = video.volume * 100 + '%';  
    if (volumLevel >= 0.95) {
        volumLevel = video.volume = 1;
        console.log('volume 1');
    } else if (volumLevel <= 0.05) {
        volumLevel = video.volume = 0;
        console.log('volume 0');
    }
    // console.log(positionEvent);
    // console.log(widthElement);
    // console.log(positionEvent / widthElement);
     
    
}

function volumeMute() {
    if(video.volume == 0) {
        volumeIcon.classList.toggle('mute');
        volumFilled.style.flexBasis = `${volumLevel * 100}%`;
        video.volume = volumLevel;
    } else { 
        volumeIcon.classList.toggle('mute');
        volumFilled.style.flexBasis = 0;
        video.volume = 0; }
        
    }
    
function fullScreenVideo() {
    video.requestFullscreen();
        
    }
// progressFilled.style.flexBasis = '60%';