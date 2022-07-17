namespace Gemüsegarten_Simulator {
  enum VEGS {
    TOMATO,
    CUCUMBER,
    PAPRIKA,
    EGGPLANT,
    SALAD,
  }

  export class Vegetable {
    public position: Vector;
    public vegs: number;
    public tomato: VEGS.TOMATO;
    public cucumber: VEGS.CUCUMBER;
    public paprika: VEGS.PAPRIKA;
    public eggplant: VEGS.EGGPLANT;
    public salad: VEGS.SALAD;
    public state: Number;
    public bugAttack: number;

    constructor(_position: Vector, _vegs: number, _state: Number) {
      this.position = _position;
      this.vegs = _vegs;
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

    public update(): void {
      switch (this.vegs) {
        case VEGS.TOMATO:
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "red";
            crc2.rect(100, 100, 50, 40);
            crc2.save;
            crc2.transform;
            break;
        case VEGS.SALAD:
            function drawSalad(_position: Vector, _size: Vector): void {
                let nParticles: number = 15;
                let radiusParticle: number = 18;
                let particle: Path2D = new Path2D();
                
                particle.arc(0, 0, radiusParticle, 0, 2*Math.PI);
            
                crc2.save();
                crc2.translate(_position.x, _position.y);
            
            
                crc2.fillStyle = "green";
                for (let drawn: number = 0; drawn < nParticles; drawn++) {
                  crc2.save();
                  let x: number = (Math.random() - 0.5) * _size.x;
                  let y: number = (Math.random() * _size.y);
                  crc2.translate(x, y);
                  crc2.fill(particle);
                  crc2.restore();
                }
                crc2.restore();
              }
      }
    }
  }
}
