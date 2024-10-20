submitBtn.addEventListener("click", async (e) => {

    e.preventDefault()

  console.log("clicked");
  resultCont.innerHTML =`<img width="123" src="img/Spinner@1x-1.0s-200px-200px.svg" alt=""></img>`;

  let key = "ema_live_AFg1i2f9F85FsyDilp91RIKlT1eLI8JPTIqy3fZp";
  let email = document.getElementById("Email").value;



  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url);

  let result = await res.json();


  let str = ``;

  for (key of Object.keys(result)) {
    if (result[key]!=="" && result[key]!== " ") {
        str = str + `<div>${key}: ${result[key]}<div>`;
    }
    
  }

  console.log(str);

  resultCont.innerHTML = str;
});


