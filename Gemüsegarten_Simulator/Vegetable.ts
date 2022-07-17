namespace Gemüsegarten_Simulator {

  export class Vegetable {
    public position: Vector;
    public vegType: VEGS;
    public state: Number;
    public bugAttack: number;

    constructor(_position: Vector, _vegType: number, _state: Number) {
      this.position = _position;
      this.vegType = _vegType;
      this.state = _state;
      this.bugAttack = 10;
    }

    public isAttacked(_bug: Bug): boolean {
      let difference: Vector = Vector.getDif(this.position, _bug.position);
      if (this.bugAttack + _bug.bugAttack < difference.length) return false;

      return true;
    }

    public attacked(): void {
      console.log("Attacked", this);
      this.expandable = true;
    }

    public draw(): void {
      switch (this.vegType) {
        case VEGS.TOMATO:
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            break;

        case VEGS.SALAD:
            ;
            break;


      }

      
    }
  }
}