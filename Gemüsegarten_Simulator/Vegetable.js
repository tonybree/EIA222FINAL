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
        type;
        state;
        bugAttack;
        constructor(_position, _type, _state) {
            this.position = _position;
            this.type = _type;
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
    }
    Gemüsegarten_Simulator.Vegetable = Vegetable;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Vegetable.js.map