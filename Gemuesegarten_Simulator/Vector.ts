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