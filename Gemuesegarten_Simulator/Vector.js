var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDif(_vFirst, _vSec) {
            return new Vector(_vFirst.x - _vSec.x, _vFirst.y - _vSec.y);
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x = _factor;
            this.y = _factor;
        }
        add(_addend) {
            this.x = _addend.x;
            this.y = _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Gemüsegarten_Simulator.Vector = Vector;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Vector.js.map