namespace KepabStore {

    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let canvasContainer: HTMLDivElement;

    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;

    drawKebapStore();

    function handleLoad(_event: Event): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", loadCanvas);

    }

    function loadCanvas(_event: MouseEvent): void {

        //Canvas wird deklariert
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        form = <HTMLFormElement>document.querySelector("form");
        form.classList.add("isHidden");
        canvas.classList.remove("isHidden");

        //Wertzuweisung für Canvas und isHidden remove
        canvasContainer = <HTMLDivElement>document.getElementById("canvasContainer");
        canvasContainer.classList.remove("isHidden");

    }

    function drawKebapStore(): void {


        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d")!;

        pattern.canvas.width = 120;
        pattern.canvas.height = 120;

        pattern.fillStyle = "white";
        pattern.strokeStyle = "#289FB9";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 0);
        pattern.lineTo(120, 0);
        pattern.lineTo(120, 120);
        pattern.lineTo(0, 120);
        pattern.closePath();
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat")!;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        crc2.beginPath();
        crc2.lineWidth = 4;
        crc2.fillStyle = "#BAA88C";
        crc2.strokeRect(800, 0, 200, 600);
        crc2.strokeStyle = "grey";
        crc2.closePath();

    }

}