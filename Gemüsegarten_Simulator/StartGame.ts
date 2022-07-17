namespace Gemüsegarten_Simulator {
 class StartGame {
    
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private capital: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(_canvasName: string) {
      this.canvas = document.querySelector(_canvasName) as HTMLCanvasElement;
      this.context = this.canvas.getContext("2d");
      this.capital = document.querySelector("Capital");
      this.start = document.querySelector("#start");
      this.info = document.querySelector("#legend");
    }

    clearCanvas(): void {
      this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    startButton(buildGame: (view: StartGame) => void): void {
      this.start?.addEventListener("click", () => buildGame(this));
    }

    drawCapital(showCapital: number): void {
      if (this.capital) this.capital.innerHTML = showCapital.toString();
    }

    drawLegend(legend: string): void {
      if (this.info) this.info.innerHTML = legend;
    }

    /*function drawContainers(_nFields): void {
        console.log("draw Fields");
    };

    drawField(field: Field[]): void {
      field.forEach((field) => this.drawField(field));
    }*/
  }
}
