var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    window.addEventListener("load", handleLoad);
    //export let allFields: Field[] = [];
    //export let allPlants: Plant[] = [];
    Gemüsegarten_Simulator.time = 0;
    function handleLoad(_event) {
        console.log("Start");
        let form = (document.querySelector("div#form"));
        //let radio: HTMLInputElement = <HTMLInputElement>document.querySelector("input#radio")
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Gemüsegarten_Simulator.crc2 = canvas.getContext("2d");
        drawBackground();
        Gemüsegarten_Simulator.drawField({ x: 0, y: 0 });
        drawSalad({ x: 750, y: 500 }, { x: 40, y: 40 });
        Gemüsegarten_Simulator.createPaths();
        let bugs = new Gemüsegarten_Simulator.Bug(1);
        let vegetables = new Gemüsegarten_Simulator.Vegetable((this.x, this.y), "Tomato", 1);
        console.log(bugs);
        console.log(vegetables);
        //vegetables.push();
        form.addEventListener("change", buildGame);
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
    // draw Salad
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
            let y = (Math.random() * _size.y);
            Gemüsegarten_Simulator.crc2.translate(x, y);
            Gemüsegarten_Simulator.crc2.fill(particle);
            Gemüsegarten_Simulator.crc2.restore();
        }
        Gemüsegarten_Simulator.crc2.restore();
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
        vegDied();
        handleAttacks();
        function vegDied() {
            for (let i = vegetables.length - 1; i >= 0; i--) {
                if (vegetables[i].expandable)
                    vegetables.splice(i, 1);
            }
        }
        function handleAttacks() {
            for (let i = 0; i < bugs.length; i++)
                for (let j = i + 1; j < bugs.length; j++)
                    let veg = vegetables[i];
            let bug = bugs[j];
            if (veg.bugAttack(bug)) {
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
    }
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Settings.js.map