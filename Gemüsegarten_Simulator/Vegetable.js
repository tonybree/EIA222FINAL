var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Vegetable {
        position;
        vegType;
        state;
        bugAttack;
        constructor(_position, _vegType, _state) {
            this.position = _position;
            this.vegType = _vegType;
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
        draw() {
            switch (this.vegType) {
                case Gemüsegarten_Simulator.VEGS.TOMATO:
                    Gemüsegarten_Simulator.crc2.beginPath();
                    Gemüsegarten_Simulator.crc2.fillStyle = "red";
                    Gemüsegarten_Simulator.crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
                    Gemüsegarten_Simulator.crc2.closePath();
                    Gemüsegarten_Simulator.crc2.fill();
                    break;
                case Gemüsegarten_Simulator.VEGS.SALAD:
                    ;
                    break;
            }
        }
    }
    Gemüsegarten_Simulator.Vegetable = Vegetable;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Vegetable.js.map