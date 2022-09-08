const newCard = document.querySelector('.card');
function requestApi() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(xhttp.response);
      let data = obj.slip;
      newCard.innerHTML = template(data);
    }
  };
  xhttp.open('GET', 'https://api.adviceslip.com/advice', true);
  xhttp.send();
}

function template(paramsData) {
  let result = `
  <p class="card__idText">ADVICE #${paramsData.id}</p>
  <div class="card__quote">
    <blockquote>${paramsData.advice}</blockquote>
  </div>

  <div class="pattern">
    <img src="images/pattern-divider-mobile.svg" alt="" />
  </div>

  <div class="button" onclick="requestApi()">
    <img src="images/icon-dice.svg" alt="" />
  </div>
  `;

  return result;
}

requestApi();
