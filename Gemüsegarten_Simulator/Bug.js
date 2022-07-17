var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Bug {
        position;
        velocity;
        hunger;
        bugAttack = 0;
        constructor(_hunger) {
            console.log("constructor for a Bug");
            this.position = new Gemüsegarten_Simulator.Vector(0, 0);
            this.velocity = new Gemüsegarten_Simulator.Vector(0, 0);
            this.velocity.getRandom(100, 50);
            this.hunger = _hunger;
        }
        move(_timeslice) {
            console.log("move it");
        }
        draw() {
            console.log("draw Bug");
            Gemüsegarten_Simulator.crc2.save();
            Gemüsegarten_Simulator.crc2.translate(this.position.x, this.position.y);
            Gemüsegarten_Simulator.crc2.stroke();
        }
    }
    Gemüsegarten_Simulator.Bug = Bug;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Bug.js.map