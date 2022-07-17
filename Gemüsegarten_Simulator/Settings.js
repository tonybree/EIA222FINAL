var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    window.addEventListener("load", handleLoad);
    //export let allFields: Field[] = [];
    //export let allPlants: Plant[] = [];
    Gemüsegarten_Simulator.time = 0;
    let bugs = [];
    function handleLoad(_event) {
        console.log("Start");
        let form = (document.querySelector("div#form"));
        //let radio: HTMLInputElement = <HTMLInputElement>document.querySelector("input#radio")
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Gemüsegarten_Simulator.crc2 = canvas.getContext("2d");
        drawBackground();
        drawField({ x: 0, y: -20 });
        drawSalad({ x: 750, y: 500 }, { x: 40, y: 40 });
        //createPaths();
        //drawTomato();
        let vegetables = new Gemüsegarten_Simulator.Vegetable((this.x, this.y), this.vegs, 1);
        console.log(bugs);
        console.log(vegetables);
        //vegetables.push();
        form.addEventListener("change", buildGame);
        canvas.addEventListener("mousedown", grabVeg);
        canvas.addEventListener("mousedown", placeVeg);
        canvas.addEventListener("mousedown", addToVeg);
        window.setInterval(update, 20);
    }
    function createBugs(_nBugs) {
        for (let i = 0; i < _nBugs; i++) {
            let bugs = new Gemüsegarten_Simulator.Bug(1.0);
            bugs.push(bug);
        }
    }
    //TOMATO
    function drawTomato() {
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.fillStyle = "red";
        Gemüsegarten_Simulator.crc2.ellipse(750, 100, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.fill();
    }
    function drawField(_position) {
        let nRows = 5;
        let nCollumn = 8;
        let fieldSize = 60;
        let widthField = 510;
        let heightField = 350;
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
                    x = 20 + offsetX;
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
            offsetY += fieldSize + 50;
        }
        Gemüsegarten_Simulator.crc2.restore();
    }
    function drawSalad(_position, _size) {
        let nParticles = 15;
        let radiusParticle = 18;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.translate(_position.x, _position.y);
        Gemüsegarten_Simulator.crc2.fillStyle = "green";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Gemüsegarten_Simulator.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = Math.random() * _size.y;
            Gemüsegarten_Simulator.crc2.translate(x, y);
            Gemüsegarten_Simulator.crc2.fill(particle);
            Gemüsegarten_Simulator.crc2.restore();
        }
        Gemüsegarten_Simulator.crc2.restore();
    }
    function drawBackground() {
        Gemüsegarten_Simulator.crc2.fillStyle = "white";
        Gemüsegarten_Simulator.crc2.strokeStyle = "black";
        Gemüsegarten_Simulator.crc2.fillRect(0, 0, Gemüsegarten_Simulator.crc2.canvas.width, Gemüsegarten_Simulator.crc2.canvas.height);
        /*crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.rect(20, 30, 50, 50);
        crc2.stroke();*/
    }
    function buildGame(_event) {
        //console.log(_event);
        let formData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
            let selection = (document.querySelector("[value='" + entry[1] + "']"));
            //console.log(selection);
            let money = Number(selection.getAttribute("money"));
            console.log(money);
        }
    }
    function update() {
        Gemüsegarten_Simulator.crc2.fillRect(0, 0, Gemüsegarten_Simulator.crc2.canvas.width, Gemüsegarten_Simulator.crc2.canvas.height);
        for (let bug of bugs) {
            bug.move(1 / 50);
            bug.draw();
        }
    }
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
/*function createPaths(): void {
      bugPath = createBugPaths(drawField);
    }*/
/*vegDied();

    handleAttacks();

    function vegDied(): void {
      for (let i: number = vegetables.length - 1; i >= 0; i--) {
        if (vegetables[i].expandable)
          vegetables.splice(i, 1);
      }
    }

    function handleAttacks(): void {
      for (let i: number = 0; i < bugs.length; i++)
        for (let j: number = i+1; j < bugs.length; j++)
        let veg: Vegetable = vegetables[i];
        let bug: Bug = bugs[j];
        if(veg.bugAttack(bug)) {
          bug.attacked();
        }
    }

    /*function displayCapital(_event: Event): void {
      let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
      let radio: string = (<HTMLInputElement>_event.target).value;
      progress.value = parseFloat(radio);
          let capital: HTMLDivElement = <HTMLDivElement>document.querySelector("div#capital");
    capital.innerHTML = "";
    }*/
//# sourceMappingURL=Settings.js.map