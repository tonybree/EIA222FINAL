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

        public drawBugs(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.ellipse(120, 90, 10, 15, Math.PI / 1.5, 0, 2 * Math.PI);
            crc2.ellipse(130, 70, 10, 15, Math.PI / 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.ellipse(125, 81, 10, 10, Math.PI / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
          }
    }
}