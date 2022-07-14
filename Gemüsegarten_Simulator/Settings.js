var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = (document.querySelector("div#form"));
        form.addEventListener("change", buildGame);
    }
    function buildGame(_event) {
        /*console.log(_event);
        let progress: HTMLProgressElement = <HTMLProgressElement>(
          document.querySelector("progress")
        );*/
        let capital = document.querySelector("div#capital");
        capital.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        /*//let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        //let amount: string = (<HTMLInputElement>_event.target).value;
        //progress.value = parseFloat(amount);*/
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);
            let gain = document.querySelector("[value= " + entry[1] + "']");
            console.log(gain);
            let price = Number(gain.getAttribute("price"));
            console.log(price);
            capital.innerHTML += gain.name + " € " + gain;
        }
    }
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Settings.js.map