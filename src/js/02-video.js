import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onVideoPlay = function (evt) {
  localStorage.setItem(STORAGE_KEY, evt.seconds);
};

player.on('timeupdate', throttle(onVideoPlay, 500));

player.on('play', function () {
  populateInputs();

  function populateInputs() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      player.setCurrentTime(savedData);
    }
  }
});

player.on('ended', function () {
  localStorage.removeItem(STORAGE_KEY);
});
