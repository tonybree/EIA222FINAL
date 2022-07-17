namespace Gemüsegarten_Simulator {
  window.addEventListener("load", handleLoad);

  export let canvas: HTMLCanvasElement;
  export let crc2: CanvasRenderingContext2D;
  //export let allFields: Field[] = [];
  //export let allPlants: Plant[] = [];
  export let time: number = 0;

  function handleLoad(_event: Event): void {
    console.log("Start");
    let form: HTMLDivElement = <HTMLDivElement>(
      document.querySelector("div#form")
    );
    //let radio: HTMLInputElement = <HTMLInputElement>document.querySelector("input#radio")
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas) return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    drawBackground();
    drawField({x: 0, y: 0});
    drawSalad({ x: 750, y: 500 }, { x: 40, y: 40 });
    
    
    
    //createPaths();


    drawTomato();


    let bugs: Bug = new Bug(1)
    let vegetables: Vegetable = new Vegetable((this.x, this.y), this.vegs, 1);
    console.log(bugs);
    console.log(vegetables);
    //vegetables.push();

    form.addEventListener("change", buildGame);
  }

  //TOMATO
  function drawTomato(): void {
  crc2.beginPath();
  crc2.strokeStyle = "black";
  crc2.fillStyle = "red";
  crc2.rect(100, 100, 500, 400);
  crc2.closePath();
  crc2.stroke();
  crc2.fill();

  }

  


  function drawField(_position: Vector): void {
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

  




  function drawBackground(): void {
    crc2.fillStyle = "white";
    crc2.strokeStyle = "black";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    /*crc2.beginPath();
    crc2.lineWidth = 2;
    crc2.rect(20, 30, 50, 50);
    crc2.stroke();*/
  }
  

  function buildGame(_event: Event): void {
    //console.log(_event);

    let formData: FormData = new FormData(document.forms[0]);
    //console.log(formData);

    for (let entry of formData) {
      let selection: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("[value='" + entry[1] + "']")
      );
      //console.log(selection);
      let money: number = Number(selection.getAttribute("money"));
      console.log(money);
    }


  
    /*function createPaths(): void {
      bugPath = createBugPaths(drawField);
    }

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
  }
}
function drawField(field: any) {
  throw new Error("Function not implemented.");
}

