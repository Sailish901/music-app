
const play= document.getElementById('play');
const audio= document.querySelector('audio');
play.addEventListener('click', () =>{
    audio.play();
    play.classList.replace('fa-play', 'fa-pause');
}

)