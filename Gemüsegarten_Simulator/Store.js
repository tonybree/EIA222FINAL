var KepabStore;
(function (KepabStore) {
    window.addEventListener("load", handleLoad);
    let form;
    let canvasContainer;
    let canvas = document.querySelector("canvas");
    KepabStore.crc2 = canvas.getContext("2d");
    drawKebapStore();
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", loadCanvas);
    }
    function loadCanvas(_event) {
        //Canvas wird deklariert
        let canvas = document.querySelector("canvas");
        KepabStore.crc2 = canvas.getContext("2d");
        form = document.querySelector("form");
        form.classList.add("isHidden");
        canvas.classList.remove("isHidden");
        //Wertzuweisung für Canvas und isHidden remove
        canvasContainer = document.getElementById("canvasContainer");
        canvasContainer.classList.remove("isHidden");
    }
    function drawKebapStore() {
        let canvas = document.querySelector("canvas");
        KepabStore.crc2 = canvas.getContext("2d");
        let pattern = document.createElement("canvas").getContext("2d");
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
        KepabStore.crc2.fillStyle = KepabStore.crc2.createPattern(pattern.canvas, "repeat");
        KepabStore.crc2.fillRect(0, 0, canvas.width, canvas.height);
        KepabStore.crc2.beginPath();
        KepabStore.crc2.lineWidth = 4;
        KepabStore.crc2.fillStyle = "#BAA88C";
        KepabStore.crc2.strokeRect(800, 0, 200, 600);
        KepabStore.crc2.strokeStyle = "grey";
        KepabStore.crc2.closePath();
    }
})(KepabStore || (KepabStore = {}));
//# sourceMappingURL=Store.js.map