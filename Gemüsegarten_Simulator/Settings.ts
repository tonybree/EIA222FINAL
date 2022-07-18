namespace Gemüsegarten_Simulator {
  export enum VEGETABLE_EVENT {
    CHOOSE_VEG = "chosenVEG",
    CHOOSE_FIELD = "chosenField",
  }

  window.addEventListener("load", handleLoad);

  export let canvas: HTMLCanvasElement;
  export let crc2: CanvasRenderingContext2D;
  //export let allFields: Field[] = [];
  //export let allPlants: Plant[] = [];
  export let time: number = 0;
  let vegetables: Vegetable[] = [];
  //let bugs: Bug[] = [];

  function handleLoad(_event: Event): void {
    console.log("Start");

    //FORM
    let form: HTMLDivElement = <HTMLDivElement>(
      document.querySelector("div#form")
    );
    let formData: FormData = new FormData(document.forms[0]);
    for (let entry of formData) {
      let selection: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("[value='" + entry[1] + "']")
      );
      //console.log(selection);
      let money: number = Number(selection.getAttribute("money"));
      console.log(money);
    }
    //let radio: HTMLInputElement = <HTMLInputElement>document.querySelector("input#radio")

    //CANVAS
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas) return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    //createPaths();
    //drawBugs(3);

    //form.addEventListener("change", displayCapital);

    console.log("vegetables");
    //canvas.addEventListener(VEGETABLE_EVENT.CHOOSE_VEG, handleVegGrab);
    //canvas.addEventListener(VEGETABLE_EVENT.CHOOSE_FIELD, handlePutVeg);

    drawBackground();
    drawField({ x: 0, y: -20 });

    createVegetables();

    drawTomato();
    drawCucumber();
    drawPaprika();
    drawEggplant();
    drawSalad({ x: 750, y: 505 }, { x: 30, y: 30 });
    //createBugs(3);

    //console.log(bugs);

    beginTimer()
    window.setInterval(update, 20);
  }

  //console.log(formData);

  /*function handleVegGrab(_event: Event): void {
    let vegetable: Vegetable = (<CustomEvent>_event).detail.vegetable;
  }*/

  function createVegetables(): void {
    console.log("Create Vegs");
    let vegetable: Vegetable = new Vegetable(this.vegType, 1);
    vegetables.push(vegetable);
  }

  /*function createBugs(_nBugs: number): void {
    for (let i: number = 0; i < _nBugs; i++) {
      let bug: Bug = new Bug(1.0);
      bugs.push(bug);
    }
  }*/

  //TOMATO
  function drawTomato(): void {
    crc2.save();
    crc2.font = "20px Arial";
    crc2.lineWidth = 1;
    crc2.strokeStyle = "darkred";
    crc2.strokeText("Tomato", 720, 130, 60);
    crc2.restore();
  }

  //CUCUMBER
  function drawCucumber(): void {
    crc2.save();
    crc2.beginPath();
    crc2.fillStyle = "hsl(150, 100%, 60%)";
    crc2.ellipse(750, 190, 25, 25, Math.PI / 2, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.shadowOffsetX = 3;
    crc2.shadowOffsetY = 3;
    crc2.shadowColor = "black";
    crc2.shadowBlur = 5;
    crc2.fill();
    crc2.restore();

    crc2.save();
    crc2.font = "20px Arial";
    crc2.lineWidth = 1;
    crc2.strokeStyle = "hsl(150, 100%, 30%)";
    crc2.strokeText("Cucumber", 710, 240, 80);
    crc2.restore();
  }

  //PAPRIKA
  function drawPaprika(): void {
    crc2.save();
    crc2.beginPath();
    crc2.fillStyle = "hsl(54, 100%, 56%)";
    crc2.beginPath();
    crc2.lineTo(750, 270);
    crc2.lineTo(780, 300);
    crc2.lineTo(750, 330);
    crc2.lineTo(720, 300);
    crc2.closePath();
    crc2.shadowOffsetX = 3;
    crc2.shadowOffsetY = 3;
    crc2.shadowColor = "black";
    crc2.shadowBlur = 5;
    crc2.fill();
    crc2.restore();

    crc2.save();
    crc2.font = "20px Arial";
    crc2.lineWidth = 1;
    crc2.strokeStyle = "hsl(54, 100%, 15%)";
    crc2.strokeText("Paprika", 720, 350, 60);
    crc2.restore();
  }

  //EGGPLANT
  function drawEggplant(): void {
    crc2.save();
    crc2.beginPath();
    crc2.strokeStyle = "black";
    crc2.fillStyle = "hsl(276, 100%, 47%)";
    crc2.lineWidth = 2;
    crc2.moveTo(740, 380);
    crc2.bezierCurveTo(750, 380, 810, 420, 730, 440);
    crc2.closePath();
    crc2.shadowOffsetX = 3;
    crc2.shadowOffsetY = 3;
    crc2.shadowColor = "black";
    crc2.shadowBlur = 5;
    crc2.fill();
    crc2.restore();

    crc2.save();
    crc2.font = "20px Arial";
    crc2.lineWidth = 1;
    crc2.strokeStyle = "hsl(276, 100%, 20%)";
    crc2.strokeText("Eggplant", 715, 460, 70);
    crc2.restore();
  }

  //SALAD
  function drawSalad(_position: Vector, _size: Vector): void {
    let nParticles: number = 11;
    let radiusParticle: number = 18;
    let particle: Path2D = new Path2D();

    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.fillStyle = "green";
    for (let drawn: number = 0; drawn < nParticles; drawn++) {
      crc2.save();
      let x: number = (Math.random() - 0.5) * _size.x;
      let y: number = Math.random() * _size.y;
      crc2.translate(x, y);
      crc2.fill(particle);
      crc2.restore();
      crc2.shadowOffsetX = 1;
      crc2.shadowOffsetY = 1;
      crc2.shadowColor = "black";
      crc2.shadowBlur = 1;
    }
    crc2.restore();
    crc2.save();
    crc2.font = "20px Arial";
    crc2.lineWidth = 1;
    crc2.strokeStyle = "green";
    crc2.strokeText("Salad", 728, 570, 80);
  }

  // DRAW FIELD
  function drawField(_position: Vector): void {
    let nRows: number = 5;
    let nCollumn: number = 8;
    let fieldSize: number = 60;
    let widthField: number = 510;
    let heightField: number = 350;
    let field: Path2D = new Path2D();

    field.rect(0, 0, fieldSize, fieldSize);

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.fillStyle = "hsl(30, 100%, 31%)";

    let offsetY = 0;
    for (let drawn: number = 0; drawn < nRows; drawn++) {
      let offsetX = 0;
      for (let drawn: number = 0; drawn < nCollumn; drawn++) {
        crc2.save();
        let x = 0;
        if (drawn == 0) {
          x = 20 + offsetX;
        } else {
          x = 20 + widthField / 8 + offsetX;
        }
        offsetX = x;
        let y: number = heightField / 5 + offsetY;
        crc2.translate(x, y);
        crc2.fill(field);
        crc2.restore();
      }
      offsetY += fieldSize + 50;
    }
    crc2.restore();
  }

  function drawBackground(): void {
    crc2.fillStyle = "hsl(30, 0%, 95%)";
    crc2.strokeStyle = "black";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    /*crc2.beginPath();
    crc2.lineWidth = 2;
    crc2.rect(20, 30, 50, 50);
    crc2.stroke();*/
  }
  function update(): void {
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    /*for (let bug of bugs) {
      bug.move(1 / 50);
      bug.draw();
    }*/
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
}

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
