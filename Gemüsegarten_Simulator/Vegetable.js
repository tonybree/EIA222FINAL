var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Vegetable {
        position;
        vegType;
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
        draw() {
            switch (this.vegs) {
                case VEGS.TOMATO:
                    Gemüsegarten_Simulator.crc2.beginPath();
                    Gemüsegarten_Simulator.crc2.fillStyle = "red";
                    Gemüsegarten_Simulator.crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
                    Gemüsegarten_Simulator.crc2.closePath();
                    Gemüsegarten_Simulator.crc2.fill();
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
var KebapStore;
(function (KebapStore) {
    class Dish {
        dishType;
        constructor(_dishType) {
            console.log("dish constructor");
            this.dishType = _dishType;
        }
        draw() {
            console.log("sketch Dish");
            switch (this.dishType) {
                case DishType.Döner:
                    crc2.beginPath();
                    crc2.fillStyle = "#BF882E";
                    crc2.fillRect(150, 83, 65, 32); //Döner
                    crc2.save();
                    crc2.restore();
                    break;
                case DishType.Falafel:
                    crc2.beginPath();
                    crc2.fillStyle = "#BF882E";
                    crc2.fillRect(150, 8, 65, 32); //Falafel
                    crc2.save();
                    crc2.restore();
                    break;
                case DishType.Yufka:
                    crc2.beginPath();
                    crc2.fillStyle = "#BF882E";
                    crc2.fillRect(150, 45.5, 65, 32); //Yufka
                    crc2.save();
                    crc2.restore();
                    break;
            }
        }
    }
    KebapStore.Dish = Dish;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Vegetable.js.map