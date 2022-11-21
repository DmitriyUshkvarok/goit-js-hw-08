import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// player
//   .setCurrentTime(JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY')))
//   .catch(function (error) {
//     console.error(error);
//   });

// player.on(
//   'timeupdate',
//   throttle(event => {
//     localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(event.seconds));
//   }, 1000)
// );
const player = new Player(document.querySelector('#vimeo-player'));
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// const stopwatchSecond = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

player
  .setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  }, 1000)
);
