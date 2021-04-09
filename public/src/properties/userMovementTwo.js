class userMovementTwo{
    constructor(parent, pos, img){
        this.parent = parent;
        this.pos = pos;
        this.img = img;

        this.pos.x = this.pos.x - (this.pos.x %32);
        this.pos.y = this.pos.y - (this.pos.y %32);

        this.speed = 4;
        this.target = {
            x: this.pos.x,
            y: this.pos.y
        };
        this.moving = false;
        this.keys = {
            O: 79,
            L: 76,
            K: 75,
            M: 77,
        };
    }
    step() 
    {
        if(keyIsDown(this.keys.O) && !this.moving){
            this.img.setY(3);
            this.moving = true;
            this.target.y -= 32;
        }

        if(keyIsDown(this.keys.L) && !this.moving){
            this.img.setY(0);
            this.moving = true;
            this.target.y += 32;
        }

        if(keyIsDown(this.keys.K) && !this.moving){
            this.img.setY(1);
            this.moving = true;
            this.target.x -= 32;
        }

        if(keyIsDown(this.keys.M) && !this.moving){
            this.img.setY(2);
            this.moving = true;
            this.target.x += 32;
        }
        if(this.moving){
            var distX = this.target.x - this.pos.x;
            var distY = this.target.y - this.pos.y;
            var dx = Math.sign(distX) * this.speed;
            var dy = Math.sign(distY) * this.speed;
            if(Math.abs(distX) <= this.speed && Math.abs(distY) <= this.speed)
            {
                this.pos.x = this.pos.x;
                this.pos.y = this.pos.y;
                this.img.setX(0);
                this.moving = false;
            } 
            else 
            {
            this.pos.x += dx;
            this.pos.y += dy;
            this.img.animateX();
            }
        }
    }
}