var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Bug {
        position;
        velocity;
        expandable = false;
        hunger;
        bugAttack = 0;
        constructor(_hunger, _position) {
            console.log("constructor for a Bug");
            this.position = new Gemüsegarten_Simulator.Vector(0, 0);
            this.velocity = new Gemüsegarten_Simulator.Vector(0, 0);
            this.velocity = Gemüsegarten_Simulator.Vector.getRandom(100, 200);
            this.hunger = _hunger;
        }
        attacked() {
            this.expandable = true;
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Gemüsegarten_Simulator.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Gemüsegarten_Simulator.crc2.canvas.height;
            if (this.position.x > Gemüsegarten_Simulator.crc2.canvas.width)
                this.position.x -= Gemüsegarten_Simulator.crc2.canvas.width;
            if (this.position.y > Gemüsegarten_Simulator.crc2.canvas.height)
                this.position.y -= Gemüsegarten_Simulator.crc2.canvas.height;
        }
        draw() {
            console.log("draw Bug");
            Gemüsegarten_Simulator.crc2.save();
            Gemüsegarten_Simulator.crc2.translate(this.position.x, this.position.y);
            Gemüsegarten_Simulator.crc2.stroke();
            Gemüsegarten_Simulator.crc2.beginPath();
            Gemüsegarten_Simulator.crc2.fillStyle = "white";
            Gemüsegarten_Simulator.crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
            Gemüsegarten_Simulator.crc2.closePath();
            Gemüsegarten_Simulator.crc2.fill();
        }
    }
    Gemüsegarten_Simulator.Bug = Bug;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Bug.js.map