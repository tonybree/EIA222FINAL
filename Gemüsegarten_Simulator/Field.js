var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Field {
        position;
        constructor(_position) {
            console.log("field constructor");
        }
    }
    Gemüsegarten_Simulator.Field = Field;
    Gemüsegarten_Simulator.bugPath = new Gemüsegarten_Simulator.Bug(1);
    function drawField(_position) {
        let nRows = 5;
        let nCollumn = 8;
        let fieldSize = 50;
        let widthField = 490;
        let heightField = 270;
        let field = new Path2D();
        field.rect(0, 0, fieldSize, fieldSize);
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.translate(_position.x, _position.y);
        Gemüsegarten_Simulator.crc2.fillStyle = "brown";
        let offsetY = 0;
        for (let drawn = 0; drawn < nRows; drawn++) {
            let offsetX = 0;
            for (let drawn = 0; drawn < nCollumn; drawn++) {
                Gemüsegarten_Simulator.crc2.save();
                let x = 0;
                if (drawn == 0) {
                    x = 30 + offsetX;
                }
                else {
                    x = 20 + widthField / 8 + offsetX;
                }
                offsetX = x;
                let y = heightField / 5 + offsetY;
                Gemüsegarten_Simulator.crc2.translate(x, y);
                Gemüsegarten_Simulator.crc2.fill(field);
                Gemüsegarten_Simulator.crc2.restore();
            }
            offsetY += fieldSize + 30;
        }
        Gemüsegarten_Simulator.crc2.restore();
    }
    Gemüsegarten_Simulator.drawField = drawField;
    function createPaths() {
        Gemüsegarten_Simulator.bugPath = createBugPaths(drawField);
    }
    Gemüsegarten_Simulator.createPaths = createPaths;
    function createBugPaths() {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            // console.group(type);
            for (let coordinates of type) {
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            // console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
    function createUfoPath() {
        let path = new Path2D();
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
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Field.js.map