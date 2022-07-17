namespace Gemüsegarten_Simulator {
  export class Field {
    position: Vector;

    constructor(_position: Vector) {
      console.log("field constructor");
    }
  }

  export let bugPath: Bug = new Bug(1);

  export function drawField(_position: Vector): void {
    let nRows: number = 5;
    let nCollumn: number = 8;
    let fieldSize: number = 50;
    let widthField: number = 490;
    let heightField: number = 270;
    let field: Path2D = new Path2D();

    field.rect(0, 0, fieldSize, fieldSize);

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.fillStyle = "brown";

    let offsetY = 0;
    for (let drawn: number = 0; drawn < nRows; drawn++) {
      let offsetX = 0;
      for (let drawn: number = 0; drawn < nCollumn; drawn++) {
        crc2.save();
        let x = 0;
        if (drawn == 0) {
          x = 30 + offsetX;
        } else {
          x = 20 + widthField / 8 + offsetX;
        }
        offsetX = x;
        let y: number = heightField / 5 + offsetY;
        crc2.translate(x, y);
        crc2.fill(field);
        crc2.restore();
      }
      offsetY += fieldSize + 30;
    }
    crc2.restore();
  }

  export function createPaths(): void {
    bugPath = createBugPaths(drawField);
  }

  function createBugPaths(): void {
    let paths: Path2D[] = [];
    for (let type of _shapes) {
      let path: Path2D = new Path2D();
      let first: boolean = true;
      // console.group(type);
      for (let coordinates of type) {
        // console.log(coordinates);
        if (first) path.moveTo(coordinates[0], coordinates[1]);
        else path.lineTo(coordinates[0], coordinates[1]);
        first = false;
      }
      // console.groupEnd();
      path.closePath();
      paths.push(path);
    }
    return paths;
  }

  function createUfoPath(): Path2D {
    let path: Path2D = new Path2D();
    path.moveTo(20, 13);
    path.lineTo(27, 3);
    path.lineTo(38, 3);
    path.lineTo(43, 13);
    path.lineTo(59, 25);
    path.lineTo(45, 35);
    path.lineTo(18, 35);
    path.lineTo(4, 25);
    path.lineTo(20, 13);
    path.lineTo(43, 13);
    path.closePath();

    path.moveTo(4, 25);
    path.lineTo(59, 25);
    path.closePath();
    return path;
  }
}
