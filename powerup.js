  import { incrementScore } from './game.js';

  // powerup.js
  class Powerup {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.type = type;
      this.width = 20;
      this.height = 20;
      this.markForDeletion = false;
    }
    draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      ctx.fillStyle = this.type === 'invulnerability' ? 'green' : this.type === 'extraLife' ? 'blue' : this.type === 'doubleShooting' ? 'orange' : this.type === 'slowMotion' ? 'purple' : 'pink';
      ctx.fill();
      ctx.restore();
    }
    update(player, lives, asteroids, enemies) {
      let distance = Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2);
      if (distance < (this.width / 2 + player.width / 2)) {
        this.applyEffect(player, lives, asteroids, enemies);
        this.markForDeletion = true;
      }
    }
    
    applyEffect(player, lives, asteroids, enemies) {
      if (this.type === 'invulnerability') {
        player.invulnerable = true;
        player.invulnerabilityTime = Date.now();
        player.color = 'green';
      
      } else if (this.type === 'extraLife') {
        player.lives++;
        player.livesLeft++;      

      } else if (this.type === 'doubleShooting') {
        player.doubleShooting = true;
        player.doubleShootingTime = Date.now();
        player.color = 'orange';
        player.bulletSpeed = player.originalBulletSpeed * 2;
        player.doubleShootingLost = false;
          
      } else if (this.type === 'slowMotion') {
        if (asteroids) {
          for (const asteroid of asteroids) {
            asteroid.slowMotion = true;
          }

        }
      }
        // Comment out or delete the following block to remove the enemies from the slow-motion effect
        // if (enemies && Array.isArray(enemies)) {
        //   for (const enemy of enemies) {
        //     enemy.slowMotion = true; // Set the slowMotion property to true
        //   }
        // }
    
      else if (this.type === 'backfront') {
        player.backfrontShooting = true;
        player.backfrontShootingTime = Date.now();
        player.color = 'pink';
      }
      incrementScore(30);
    }
    

  }

  export { Powerup };

