var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class StartGame {
        canvas;
        context;
        capital;
        start;
        info;
        constructor(_canvasName) {
            this.canvas = document.querySelector(_canvasName);
            this.context = this.canvas.getContext("2d");
            this.capital = document.querySelector("Capital");
            this.start = document.querySelector("#start");
            this.info = document.querySelector("#legend");
        }
        clearCanvas() {
            this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        startButton(buildGame) {
            this.start?.addEventListener("click", () => buildGame(this));
        }
        drawCapital(showCapital) {
            if (this.capital)
                this.capital.innerHTML = showCapital.toString();
        }
        drawLegend(legend) {
            if (this.info)
                this.info.innerHTML = legend;
        }
    }
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=StartGame.js.map