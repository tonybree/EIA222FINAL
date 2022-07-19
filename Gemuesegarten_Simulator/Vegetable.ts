namespace Gemüsegarten_Simulator {
  export enum VEGS {
    TOMATO,
    CUCUMBER,
    PAPRIKA,
    EGGPLANT,
    SALAD,
  }
  export class Vegetable {
    public position: Vector;
    public vegType: VEGS;
    public state: Number;
    public minState: Number = 1;
    public maxState: Number = 3;
    public health: number;

    constructor(_vegType: number, _state: Number) {
      this.vegType = _vegType;
      this.state = _state;
      this.health = 1;
    }

    public isAttacked(_bug: Bug): boolean {
      let difference: Vector = Vector.getDif(this.position, _bug.position);
      if (this.health + _bug.bugAttack < difference.length) return false;

      return true;
    }

    public drawVegs(): void {
      switch (this.vegType) {
        case VEGS.TOMATO:
          crc2.save();
          crc2.beginPath();
          crc2.shadowOffsetX = 3;
          crc2.shadowOffsetY = 3;
          crc2.shadowColor = "black";
          crc2.shadowBlur = 5;
          crc2.fillStyle = "red";
          crc2.ellipse(750, 80, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
          crc2.closePath();
          crc2.fill();
          crc2.restore();
          break;
      }
    }
  }
}
