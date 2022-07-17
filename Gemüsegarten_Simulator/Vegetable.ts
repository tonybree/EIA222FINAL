namespace Gemüsegarten_Simulator {

  export class Vegetable {
    public position: Vector;
    public vegType: VegType;
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

    public draw(): void {
      switch (this.vegs) {
        case VEGS.TOMATO:
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
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


namespace KebapStore {
    
  export class Dish {
      dishType: DishType;

      constructor(_dishType: DishType) {
          console.log("dish constructor");
          this.dishType = _dishType;
          
      }

      public draw(): void{
          console.log("sketch Dish");
          switch (this.dishType) {

              case DishType.Döner:
                  crc2.beginPath();
                  crc2.fillStyle = "#BF882E";
                  crc2.fillRect(150, 83, 65, 32);     //Döner
                  crc2.save();
                  crc2.restore();
                  break;
              
              case DishType.Falafel:
                  crc2.beginPath();
                  crc2.fillStyle = "#BF882E";
                  crc2.fillRect(150, 8, 65, 32);      //Falafel
                  crc2.save();
                  crc2.restore();
                  break;
              
              case DishType.Yufka:
                  crc2.beginPath();
                  crc2.fillStyle = "#BF882E";
                  crc2.fillRect(150, 45.5, 65, 32);   //Yufka
                  crc2.save();
                  crc2.restore();
                  break;
          }
      }
  }
}