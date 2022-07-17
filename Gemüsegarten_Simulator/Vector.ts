namespace Gemüsegarten_Simulator {
    export class Vector {
        x: number;
        y: number;

        constructor (_x: number, _y: number) {
            this.set (_x, _y);
        }

        public static getDif (_vFirst: Vector, _vSec: Vector): Vector {
            return new Vector (_vFirst.x - _vSec.x, _vFirst.y - _vSec.y);
        }

        public static getRandom (_minLength: number, _maxLength: number): Vector {
            let vector: Vector = new Vector (0, 0);
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }

        get length(): number {
            return Math.hypot(this.x, this.y);
        }
        
        public set (_x: number, _y: number): void{
            this.x = _x;
            this.y = _y;
        }

        public scale (_factor: number) {
            this.x = _factor;
            this.y = _factor;
        }

        public add (_addend: Vector) {
            this.x = _addend.x;
            this.y = _addend.y;
        }
        copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}