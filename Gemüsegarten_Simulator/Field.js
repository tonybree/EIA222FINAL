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