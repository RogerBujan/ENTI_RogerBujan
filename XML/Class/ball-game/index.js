import GameOver from './GameOver';
import Score from './Score';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let y = 50;
let x = 50;

const gameOver = new GameOver({
  font : 'bold 24px verdana, sans-serif ',
  fillStyle : '#ff0000',
  textAlign : 'center',
  text : 'GAME OVER',
  canvas
})

const score = new Score({
  font : 'bold 10px verdana, sans-serif',
  fillStyle : '#000',
  textAlign : 'left',
  text : 'Score ',
  canvas
})

const onClick = event => {
  if (event.region) {
    score.incrementScore();
    score.render();
    y = 0;
    x = Math.floor(Math.random() * canvas.width);
  }
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  ctx.addHitRegion({ id: 'circle' });
  canvas.addEventListener('click', onClick);

  y = y + 3;

  // CHECK BOUNDS
  score.render();
  if (y > canvas.height) {
    x = Math.floor(Math.random() * canvas.width);
    gameOver.render();
    score.render();
  } else {
    window.requestAnimationFrame(draw);
  }
};
draw();