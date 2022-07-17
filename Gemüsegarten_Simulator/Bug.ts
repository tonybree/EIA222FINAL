namespace Gemüsegarten_Simulator {
    export class Bug {
        position: Vector;
        velocity: Vector;
        expandable: boolean = false;
        hunger: number;
        public bugAttack: number = 0;
        
        constructor (_hunger: number, _position?: Vector) {
            console.log("constructor for a Bug");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(100, 200);
            this.hunger =_hunger;
        }

        public attacked(): void {
            this.expandable = true;
        }

        public move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            console.log("draw Bug");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.stroke()
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}