namespace Gemüsegarten_Simulator {
    enum VEGS {
        TOMATO,
        CUCUMBER,
        PAPRIKA,
        EGGPLANT,
        SALAD
    }

    export class Vegetable {
        public position: Vector;
        public type: VEGS;
        public state: Number;
        public bugAttack: number;

        constructor (_position: Vector, _type: VEGS, _state: Number) {
            this.position = _position;
            this.type = _type;
            this.state = _state;
            this.bugAttack = 10;
        }

        public isAttacked (_bug: Bug): boolean {
            let difference: Vector = Vector.getDif(this.position, _bug.position);
            if (this.bugAttack + _bug.bugAttack < difference.length)
                return false;

            return true;
        }

        public attacked(): void {
            console.log("Attacked", this);
            this.expandable = true;
        }
    }
}