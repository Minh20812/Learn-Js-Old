// 1
const display__1 = document.getElementById("display__1");
const increse__1 = document.getElementById("+");
const descrese__1 = document.getElementById("-");
const reset__1 = document.getElementById("reset");
let begin = 0;

if (increse__1) {
  increse__1.addEventListener("click", () => {
    begin += 1;
    display__1.textContent = begin;
  });
}

if (descrese__1) {
  descrese__1.addEventListener("click", () => {
    begin -= 1;
    display__1.textContent = begin;
  });
}

if (reset__1) {
  reset__1.addEventListener("click", () => {
    begin = 0;
    display__1.textContent = begin;
  });
}

// 2

const submit2 = document.getElementById("submit__2");
const result2 = document.getElementById("result__2");
const numberRandom2 = Math.floor(Math.random() * (100 - 0 + 1) + 1);
const guess2 = document.getElementById("guess__2");
let countGuess2 = 0;

console.log("Số đoán là: " + numberRandom2);

if (submit2) {
  submit2.addEventListener("click", () => {
    const numberGuess = parseInt(document.getElementById("guess__2").value, 10);
    if (numberGuess < numberRandom2 && numberGuess >= 0) {
      result2.textContent = "Bé quá thêm xíu nữa";
      countGuess2 += 1;
    } else if (numberGuess > numberRandom2 && numberGuess <= 100) {
      result2.textContent = "Lớn quá giảm xíu đi";
      countGuess2 += 1;
    } else if (numberGuess == numberRandom2) {
      countGuess2 += 1;
      result2.textContent = "Bravo! Bạn đã đoán " + countGuess2 + " lần!";
    } else {
      countGuess2 += 1;
      result2.textContent = "Nhập số nguyên từ 0 đến 100 !";
    }
  });
}

if (guess2) {
  guess2.addEventListener("keydown", (even) => {
    if (even.key == "Enter") {
      submit2.click();
    }
  });
}

// 3

const changeMoney3 = document.getElementById("change_money__3");
const changeChoice3 = document.querySelectorAll('input[name="choice"]');
const result3 = document.getElementById("result__3");
let moneyChange = 0;
let currentChoice = null; // Biến để lưu giá trị radio button đang được chọn

// Gắn event listener cho từng radio button
changeChoice3.forEach((event) => {
  event.addEventListener("click", () => {
    currentChoice = event.value; // Cập nhật giá trị radio button đang được chọn
    calculateMoneyChange(); // Tính toán lại giá trị moneyChange khi radio button thay đổi
  });
});

// Hàm tính toán và cập nhật kết quả
function calculateMoneyChange() {
  const inputValue = parseFloat(changeMoney3.value, 10) || 0; // Lấy giá trị từ input và chuyển thành số, mặc định là 0 nếu không phải số

  if (currentChoice === "vn-usd") {
    moneyChange = inputValue / 24000;
  } else if (currentChoice === "usd-vn") {
    moneyChange = inputValue * 24000;
  } else {
    moneyChange = inputValue;
  }

  result3.textContent = moneyChange.toFixed(2); // Hiển thị kết quả với 2 chữ số thập phân
}

// Event listener cho input
changeMoney3.addEventListener("input", calculateMoneyChange); // Tính toán lại khi giá trị input thay đổi

// 4

const inputRoll4 = document.getElementById("roll__4");
const result4 = document.getElementById("result__4");

if (inputRoll4) {
  inputRoll4.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const numberRoll4 = parseInt(inputRoll4.value);
      if (numberRoll4 <= 10 && numberRoll4 >= 1) {
        let numberArray4 = "";
        for (let i = 0; i < numberRoll4; i++) {
          numberArray4 += Math.floor(Math.random() * 6 + 1) + " ";
        }
        result4.textContent = numberArray4.trim();
      } else {
        result4.textContent = "Nhập một số nguyên từ 1 đến 10";
      }
    }
  });
}

// 5

function clock() {
  const date = new Date();
  let clock5 = document.getElementById("clock__5");
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let displayClock = "";
  displayClock = hours + ":" + minutes + ":" + seconds;
  clock5.textContent = displayClock;
}

setInterval(clock, 1000);

// 6
const display6 = document.getElementById("display__6");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display6.textContent = "";
}
function update() {
  elapsedTime = Date.now() - startTime;
  const date6 = new Date(elapsedTime);
  let hours = date6.getUTCHours().toString().padStart(2, "0");
  let minutes = date6.getUTCMinutes().toString().padStart(2, "0");
  let seconds = date6.getUTCSeconds().toString().padStart(2, "0");
  let miliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, "0");

  display6.textContent =
    hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}

// 7
const display7 = document.getElementById("display__7");

function appendToDisplay(event) {
  display7.value += event;
}

function clearDisplay() {
  display7.value = "";
}

function calculator() {
  try {
    display7.value = eval(display7.value);
  } catch (error) {
    display7.value = "Lỗi";
  }
}

// 8
const choice8 = ["rock", "paper", "scissor"];
const playerDisplay8 = document.getElementById("playerDisplay");

const computerDisplay8 = document.getElementById("computerDisplay");
const result8 = document.getElementById("result__8");

function playerChoice(choice) {
  playerDisplay8.textContent = "Player Choice: " + choice;
  const computerChoice = choice8[Math.floor(Math.random() * choice8.length)];
  computerDisplay8.textContent = "Computer Choice: " + computerChoice;
  if (computerChoice === choice) {
    result8.textContent = "Tie";
  } else {
    switch (computerChoice) {
      case "rock":
        if (choice === "paper") {
          result8.textContent = "Player win";
        } else {
          result8.textContent = "Computer win";
        }
        break;
      case "paper":
        if (choice === "scissor") {
          result8.textContent = "Player win";
        } else {
          result8.textContent = "Computer win";
        }
        break;
      case "scissor":
        if (choice === "rock") {
          result8.textContent = "Player win";
        } else {
          result8.textContent = "Computer win";
        }
        break;
    }
  }
}

// 9
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slides[slideIndex].classList.add("displaySlide");
  setInterval(nextSlide, 5000);
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// 10
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "083fbb6445908ec3d8de3aa4eb9f09f1";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const WeatherData = await getWeatherData(city);
      displayWeatherInfo(WeatherData);
    } catch (error) {
      console.log(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  console.log(response);
  if (!response.ok) {
    throw new Error("Could not fecth weather data");
  }
  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const desDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `Temperature: ` + (temp - 273.15).toFixed(2) + "°C";
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  desDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  desDisplay.classList.add("desDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(desDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 500:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId >= 700 && weatherId < 800:
      return "🌁🌪️";
    case weatherId === 800:
      return "🌇";
    case weatherId > 800 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
