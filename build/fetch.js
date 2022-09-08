const newCard = document.querySelector('.card');
const animationSkelton = document.querySelector('.parent-skeleton');

const getApi = () => {
  let result = fetch('https://api.adviceslip.com/advice');
  return result
    .finally(() => animationOff())
    .then((accessBody) => accessBody.json())
    .then((body) => body.slip)
    .then((data) => data);
};

const start = async () => {
  animationON();
  const getValueApi = await getApi();
  let display = template(getValueApi);
  newCard.innerHTML = display;
};

const template = (paramsData) => {
  let result = `
  <p class="card__idText">ADVICE #${paramsData.id}</p>
  <div class="card__quote">
    <blockquote>${paramsData.advice}</blockquote>
  </div>

  <div class="pattern">
    <img src="images/pattern-divider-mobile.svg" alt="" />
  </div>

  <div class="button" onclick="start()">
    <img src="images/icon-dice.svg" alt="" />
  </div>
  `;

  return result;
};

const animationOff = () => {
  animationSkelton.style.display = 'none';
  newCard.style.display = 'block';
};

const animationON = () => {
  animationSkelton.style.display = 'block';
  newCard.style.display = 'none';
};

start();
