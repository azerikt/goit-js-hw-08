import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';
TimeSet();
function updateToTime({ second }) {
  localStorage.setItem(TIME_KEY, second);
}
console.log(player);
