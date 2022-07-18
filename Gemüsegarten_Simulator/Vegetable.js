var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    let VEGS;
    (function (VEGS) {
        VEGS[VEGS["TOMATO"] = 0] = "TOMATO";
        VEGS[VEGS["CUCUMBER"] = 1] = "CUCUMBER";
        VEGS[VEGS["PAPRIKA"] = 2] = "PAPRIKA";
        VEGS[VEGS["EGGPLANT"] = 3] = "EGGPLANT";
        VEGS[VEGS["SALAD"] = 4] = "SALAD";
    })(VEGS = Gemüsegarten_Simulator.VEGS || (Gemüsegarten_Simulator.VEGS = {}));
    class Vegetable {
        position;
        vegType;
        state;
        minState = 1;
        maxState = 3;
        health;
        constructor(_vegType, _state) {
            this.vegType = _vegType;
            this.state = _state;
            this.health = 3;
        }
        isAttacked(_bug) {
            let difference = Gemüsegarten_Simulator.Vector.getDif(this.position, _bug.position);
            if (this.health + _bug.bugAttack < difference.length)
                return false;
            return true;
        }
        attacked() {
            console.log("Attacked", this);
            this.expandable = true;
        }
        draw() {
            switch (this.vegType) {
                case VEGS.TOMATO:
                    Gemüsegarten_Simulator.crc2.save();
                    Gemüsegarten_Simulator.crc2.beginPath();
                    Gemüsegarten_Simulator.crc2.shadowOffsetX = 3;
                    Gemüsegarten_Simulator.crc2.shadowOffsetY = 3;
                    Gemüsegarten_Simulator.crc2.shadowColor = "black";
                    Gemüsegarten_Simulator.crc2.shadowBlur = 5;
                    Gemüsegarten_Simulator.crc2.fillStyle = "red";
                    Gemüsegarten_Simulator.crc2.ellipse(750, 80, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
                    Gemüsegarten_Simulator.crc2.closePath();
                    Gemüsegarten_Simulator.crc2.fill();
                    Gemüsegarten_Simulator.crc2.restore();
                    break;
            }
        }
    }
    Gemüsegarten_Simulator.Vegetable = Vegetable;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Vegetable.js.map