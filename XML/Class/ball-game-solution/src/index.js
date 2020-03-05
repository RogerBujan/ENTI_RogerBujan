import GameOver from './GameOver';
import GameHud from './GameHud';
import Ball from './Ball';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const onClick = event => {
  if (event.region) {
    gameHud.incrementScore();
    gameHud.render();
    ball.reset();
  }
};

// CREATE GAME OBJECTS
const gameOver = new GameOver(
  {
    font: 'bold 24px verdana, sans-serif ',
    fillStyle : '#ff0000',
    textAlign : 'center',
    text: 'GAME OVER',
    canvas: canvas
  }
);

const gameHud = new GameHud(
  {
    x: 10,
    y: 20,
    font: 'bold 24px verdana, sans-serif ',
    fillStyle: '#000',
    textAlign: 'left',
    text: 'Score',
    canvas
  }
);

const ball = new Ball({
  x: 50,
  y: 50,
  radious: 25,
  canvas,
  onClick
})




const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ball.render();
  ball.update();

  // CHECK BOUNDS
  gameHud.render();
  if (ball.isOutsideBounds()) {
    gameOver.render();
    gameHud.render();
  } else {
    window.requestAnimationFrame(update);
  }
};
update();