namespace Gemüsegarten_Simulator {
  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
    console.log("Start");
    let form: HTMLDivElement = <HTMLDivElement>(
      document.querySelector("div#form")
    );

    form.addEventListener("change", buildGame);
  }

  function buildGame(_event: Event): void {
    /*console.log(_event);
    let progress: HTMLProgressElement = <HTMLProgressElement>(
      document.querySelector("progress")
    );*/
    let capital: HTMLDivElement = <HTMLDivElement>document.querySelector("div#capital");
    capital.innerHTML = "";
    
    let formData: FormData = new FormData(document.forms[0]);
    /*//let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    //let amount: string = (<HTMLInputElement>_event.target).value;
    //progress.value = parseFloat(amount);*/
    console.log(formData);

    for (let entry of formData) {
      console.log(entry);
      let gain: HTMLInputElement = <HTMLInputElement>document.querySelector("[value= " + entry[1] + "']");
      console.log(gain);
      let price: number = Number(gain.getAttribute("price"));
      console.log(price);

      capital.innerHTML += gain.name + " € " +gain;
    }
  }
}
