var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    let VEGS;
    (function (VEGS) {
        VEGS[VEGS["TOMATO"] = 0] = "TOMATO";
        VEGS[VEGS["CUCUMBER"] = 1] = "CUCUMBER";
        VEGS[VEGS["PAPRIKA"] = 2] = "PAPRIKA";
        VEGS[VEGS["EGGPLANT"] = 3] = "EGGPLANT";
        VEGS[VEGS["SALAD"] = 4] = "SALAD";
    })(VEGS || (VEGS = {}));
    class Vegetable {
        position;
        vegs;
        tomato;
        cucumber;
        paprika;
        eggplant;
        salad;
        state;
        bugAttack;
        constructor(_position, _vegs, _state) {
            this.position = _position;
            this.vegs = _vegs;
            this.state = _state;
            this.bugAttack = 10;
        }
        isAttacked(_bug) {
            let difference = Gemüsegarten_Simulator.Vector.getDif(this.position, _bug.position);
            if (this.bugAttack + _bug.bugAttack < difference.length)
                return false;
            return true;
        }
        attacked() {
            console.log("Attacked", this);
            this.expandable = true;
        }
        update() {
            switch (this.vegs) {
                case VEGS.TOMATO:
                    Gemüsegarten_Simulator.crc2.beginPath();
                    Gemüsegarten_Simulator.crc2.strokeStyle = "black";
                    Gemüsegarten_Simulator.crc2.fillStyle = "red";
                    Gemüsegarten_Simulator.crc2.rect(100, 100, 50, 40);
                    Gemüsegarten_Simulator.crc2.save;
                    Gemüsegarten_Simulator.crc2.transform;
                    break;
                case VEGS.SALAD:
                    function drawSalad(_position, _size) {
                        let nParticles = 15;
                        let radiusParticle = 18;
                        let particle = new Path2D();
                        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                        Gemüsegarten_Simulator.crc2.save();
                        Gemüsegarten_Simulator.crc2.translate(_position.x, _position.y);
                        Gemüsegarten_Simulator.crc2.fillStyle = "green";
                        for (let drawn = 0; drawn < nParticles; drawn++) {
                            Gemüsegarten_Simulator.crc2.save();
                            let x = (Math.random() - 0.5) * _size.x;
                            let y = (Math.random() * _size.y);
                            Gemüsegarten_Simulator.crc2.translate(x, y);
                            Gemüsegarten_Simulator.crc2.fill(particle);
                            Gemüsegarten_Simulator.crc2.restore();
                        }
                        Gemüsegarten_Simulator.crc2.restore();
                    }
            }
        }
    }
    Gemüsegarten_Simulator.Vegetable = Vegetable;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Vegetable.js.map