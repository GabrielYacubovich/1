import { canvas } from './game.js'; 

class Bullet {
  constructor(x, y, rotation, doubleShooting, isPlayerBullet = true, type = "", bulletSpeed = 10) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.size = 5;
    this.speed = 0;
    this.speed = bulletSpeed;
    this.doubleShooting = doubleShooting;
    this.isPlayerBullet = isPlayerBullet;
    this.type = type;
  }

  update() {
    this.x += this.speed * Math.sin(this.rotation);
    this.y -= this.speed * Math.cos(this.rotation);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.isPlayerBullet ? "white" : "red";
    ctx.fill();
    ctx.restore();
  }

  offscreen() {
    return (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    );
  }
}

export { Bullet };
