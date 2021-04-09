class collisionDetector{
    constructor(player, playerTwo){
        this.player = player;
        this.playerTwo = playerTwo;
        this.previousCollisionState = this.detect();

        objects.push(this);
    }
    
    detect() {
       const deltaX = this.player.pos.x - this.playerTwo.pos.x ;
       const deltaY = this.player.pos.y - this.playerTwo.pos.y;
       const distance = Math.sqrt((deltaX*deltaX) + (deltaY*deltaY));
       return distance < 30;
    }
    step(){
        const actualCollisionState = this.detect();
        if(this.previousCollisionState !== actualCollisionState){
            window.open('/public/pokemon.html', '_blank');
            this.previousCollisionState = actualCollisionState;
        }
        else {

        }
    }
}