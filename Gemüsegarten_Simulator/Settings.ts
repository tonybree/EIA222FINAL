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
    createPaths();


    let bugs: Bug = new Bug(1)
    let vegetables: Vegetable = new Vegetable((this.x, this.y), "Tomato", 1);
    console.log(bugs);
    console.log(vegetables);
    //vegetables.push();

    form.addEventListener("change", buildGame);
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

  


      // draw Salad
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

    vegDied();

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
