var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    let VEGETABLE_EVENT;
    (function (VEGETABLE_EVENT) {
        VEGETABLE_EVENT["CHOOSE_VEG"] = "chosenVEG";
        VEGETABLE_EVENT["CHOOSE_FIELD"] = "chosenField";
    })(VEGETABLE_EVENT = Gemüsegarten_Simulator.VEGETABLE_EVENT || (Gemüsegarten_Simulator.VEGETABLE_EVENT = {}));
    window.addEventListener("load", handleLoad);
    //export let allFields: Field[] = [];
    //export let allPlants: Plant[] = [];
    Gemüsegarten_Simulator.time = 0;
    let vegetables = [];
    let bugs = [];
    function handleLoad(_event) {
        console.log("Start");
        //FORM
        let form = (document.querySelector("div#form"));
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let selection = (document.querySelector("[value='" + entry[1] + "']"));
            //console.log(selection);
            let money = Number(selection.getAttribute("money"));
            console.log(money);
        }
        //let radio: HTMLInputElement = <HTMLInputElement>document.querySelector("input#radio")
        //CANVAS
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Gemüsegarten_Simulator.crc2 = canvas.getContext("2d");
        //createPaths();
        //form.addEventListener("change", displayCapital);
        console.log("vegetables");
        //canvas.addEventListener(VEGETABLE_EVENT.CHOOSE_VEG, handleVegGrab);
        //canvas.addEventListener(VEGETABLE_EVENT.CHOOSE_FIELD, handlePutVeg);
        drawBackground();
        drawField({ x: 0, y: -20 });
        drawTomato();
        drawCucumber();
        drawPaprika();
        drawEggplant();
        drawSalad({ x: 750, y: 505 }, { x: 30, y: 30 });
        drawBugs();
        createVegetables();
        createBugs(3);
        //console.log(bugs);
        //beginTimer();
        window.setInterval(update, 20);
    }
    //console.log(formData);
    /*function handleVegGrab(_event: Event): void {
      let vegetable: Vegetable = (<CustomEvent>_event).detail.vegetable;
    }*/
    function createVegetables() {
        console.log("Create Vegs");
        let vegetable = new Gemüsegarten_Simulator.Vegetable(this.vegType, 1);
        vegetables.push(vegetable);
    }
    function createBugs(_nBugs) {
        for (let i = 0; i < _nBugs; i++) {
            let bug = new Gemüsegarten_Simulator.Bug(1.0);
            bugs.push(bug);
        }
    }
    function drawBugs() {
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.fillStyle = "white";
        Gemüsegarten_Simulator.crc2.ellipse(120, 90, 10, 15, Math.PI / 1.5, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.ellipse(130, 70, 10, 15, Math.PI / 1.5, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.fill();
        Gemüsegarten_Simulator.crc2.restore();
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.fillStyle = "black";
        Gemüsegarten_Simulator.crc2.ellipse(125, 81, 10, 10, Math.PI / 2, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.fill();
        Gemüsegarten_Simulator.crc2.restore();
    }
    //TOMATO
    function drawTomato() {
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.shadowOffsetX = 3;
        Gemüsegarten_Simulator.crc2.shadowOffsetY = 3;
        Gemüsegarten_Simulator.crc2.shadowColor = "black";
        Gemüsegarten_Simulator.crc2.shadowBlur = 5;
        Gemüsegarten_Simulator.crc2.fillStyle = "red";
        Gemüsegarten_Simulator.crc2.ellipse(750, 80, 20, 30, Math.PI / 2, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.fill();
        Gemüsegarten_Simulator.crc2.restore();
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.font = "20px Arial";
        Gemüsegarten_Simulator.crc2.lineWidth = 1;
        Gemüsegarten_Simulator.crc2.strokeStyle = "darkred";
        Gemüsegarten_Simulator.crc2.strokeText("Tomato", 720, 130, 60);
        Gemüsegarten_Simulator.crc2.restore();
    }
    //CUCUMBER
    function drawCucumber() {
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.fillStyle = "hsl(150, 100%, 60%)";
        Gemüsegarten_Simulator.crc2.ellipse(750, 190, 25, 25, Math.PI / 2, 0, 2 * Math.PI);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.shadowOffsetX = 3;
        Gemüsegarten_Simulator.crc2.shadowOffsetY = 3;
        Gemüsegarten_Simulator.crc2.shadowColor = "black";
        Gemüsegarten_Simulator.crc2.shadowBlur = 5;
        Gemüsegarten_Simulator.crc2.fill();
        Gemüsegarten_Simulator.crc2.restore();
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.font = "20px Arial";
        Gemüsegarten_Simulator.crc2.lineWidth = 1;
        Gemüsegarten_Simulator.crc2.strokeStyle = "hsl(150, 100%, 30%)";
        Gemüsegarten_Simulator.crc2.strokeText("Cucumber", 710, 240, 80);
        Gemüsegarten_Simulator.crc2.restore();
    }
    //PAPRIKA
    function drawPaprika() {
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.fillStyle = "hsl(54, 100%, 56%)";
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.lineTo(750, 270);
        Gemüsegarten_Simulator.crc2.lineTo(780, 300);
        Gemüsegarten_Simulator.crc2.lineTo(750, 330);
        Gemüsegarten_Simulator.crc2.lineTo(720, 300);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.shadowOffsetX = 3;
        Gemüsegarten_Simulator.crc2.shadowOffsetY = 3;
        Gemüsegarten_Simulator.crc2.shadowColor = "black";
        Gemüsegarten_Simulator.crc2.shadowBlur = 5;
        Gemüsegarten_Simulator.crc2.fill();
        Gemüsegarten_Simulator.crc2.restore();
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.font = "20px Arial";
        Gemüsegarten_Simulator.crc2.lineWidth = 1;
        Gemüsegarten_Simulator.crc2.strokeStyle = "hsl(54, 100%, 15%)";
        Gemüsegarten_Simulator.crc2.strokeText("Paprika", 720, 350, 60);
        Gemüsegarten_Simulator.crc2.restore();
    }
    //EGGPLANT
    function drawEggplant() {
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.beginPath();
        Gemüsegarten_Simulator.crc2.strokeStyle = "black";
        Gemüsegarten_Simulator.crc2.fillStyle = "hsl(276, 100%, 47%)";
        Gemüsegarten_Simulator.crc2.lineWidth = 2;
        Gemüsegarten_Simulator.crc2.moveTo(740, 380);
        Gemüsegarten_Simulator.crc2.bezierCurveTo(750, 380, 810, 420, 730, 440);
        Gemüsegarten_Simulator.crc2.closePath();
        Gemüsegarten_Simulator.crc2.shadowOffsetX = 3;
        Gemüsegarten_Simulator.crc2.shadowOffsetY = 3;
        Gemüsegarten_Simulator.crc2.shadowColor = "black";
        Gemüsegarten_Simulator.crc2.shadowBlur = 5;
        Gemüsegarten_Simulator.crc2.fill();
        Gemüsegarten_Simulator.crc2.restore();
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.font = "20px Arial";
        Gemüsegarten_Simulator.crc2.lineWidth = 1;
        Gemüsegarten_Simulator.crc2.strokeStyle = "hsl(276, 100%, 20%)";
        Gemüsegarten_Simulator.crc2.strokeText("Eggplant", 715, 460, 70);
        Gemüsegarten_Simulator.crc2.restore();
    }
    //SALAD
    function drawSalad(_position, _size) {
        let nParticles = 11;
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
            Gemüsegarten_Simulator.crc2.shadowOffsetX = 1;
            Gemüsegarten_Simulator.crc2.shadowOffsetY = 1;
            Gemüsegarten_Simulator.crc2.shadowColor = "black";
            Gemüsegarten_Simulator.crc2.shadowBlur = 1;
        }
        Gemüsegarten_Simulator.crc2.restore();
        Gemüsegarten_Simulator.crc2.save();
        Gemüsegarten_Simulator.crc2.font = "20px Arial";
        Gemüsegarten_Simulator.crc2.lineWidth = 1;
        Gemüsegarten_Simulator.crc2.strokeStyle = "green";
        Gemüsegarten_Simulator.crc2.strokeText("Salad", 728, 570, 80);
    }
    // DRAW FIELD
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
        Gemüsegarten_Simulator.crc2.fillStyle = "hsl(30, 100%, 31%)";
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
    function drawBackground() {
        Gemüsegarten_Simulator.crc2.fillStyle = "hsl(30, 0%, 95%)";
        Gemüsegarten_Simulator.crc2.strokeStyle = "black";
        Gemüsegarten_Simulator.crc2.fillRect(0, 0, Gemüsegarten_Simulator.crc2.canvas.width, Gemüsegarten_Simulator.crc2.canvas.height);
        /*crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.rect(20, 30, 50, 50);
        crc2.stroke();*/
    }
    function update() {
        Gemüsegarten_Simulator.crc2.fillRect(0, 0, Gemüsegarten_Simulator.crc2.canvas.width, Gemüsegarten_Simulator.crc2.canvas.height);
        for (let bug of bugs) {
            bug.move(1 / 50);
            bug.drawBugs();
        }
    }
    /*function beginTimer(): void {
      setInterval(timer, 2000);
    }
  
    /*function timer(): void {
      time ++;
      console.log(time);
      for (let vegetable of vegetables) {
        vegetable.draw();
        //vegetable.state();
        //vegetable.health();
        //vegetable.value = Math.abs(Math.sin(time) + vegetables.price);
      }
    }
  }*/
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
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
/*function beginTimer(): void {
  setInterval(timer, 2000);
}

/*function timer(): void {
  time ++;
  console.log(time);
  for (let vegetable of vegetables) {
    vegetable.draw();
    //vegetable.state();
    //vegetable.health();
    //vegetable.value = Math.abs(Math.sin(time) + vegetables.price);
  }
}
}*/
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
//# sourceMappingURL=Main.js.map