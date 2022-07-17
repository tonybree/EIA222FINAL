namespace Gemüsegarten_Simulator {
    export class Bug {
        position: Vector;
        velocity: Vector;
        hunger: number;
        public bugAttack: number = 0;
        
        constructor (_hunger: number) {
            console.log("constructor for a Bug");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.getRandom(100, 50);
            this.hunger =_hunger;
        }

        move(_timeslice: number): void {
            console.log("move it");
        }

        draw(): void {
            console.log("draw Bug");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.stroke()
        }
    }
}