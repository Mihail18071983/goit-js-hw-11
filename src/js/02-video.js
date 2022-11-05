import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

// player.on('play', function () {
//   console.log('played the video!');
// });

player.on('timeupdate', onTimeUpdate);

function onTimeUpdate(e) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
    console.log(e);
}

sessionStorage.setItem("is_reloaded", true);
if (sessionStorage.getItem("is_reloaded")) {
	console.log('Страница перезагружена')
}

const getContentOfLocalStorage = localStorage.getItem('videoplayer-current-time');
console.log(getContentOfLocalStorage);
// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

