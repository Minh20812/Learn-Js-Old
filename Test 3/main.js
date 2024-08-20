// E1
const display = document.getElementById("display_e1");
const increase = document.getElementById("+");
const reset = document.getElementById("reset");
const decrease = document.getElementById("-");

let counte1 = 0;

increase.onclick = function () {
  counte1++;
  display.textContent = counte1;
};
reset.onclick = function () {
  counte1 = 0;
  display.textContent = counte1;
};
decrease.onclick = function () {
  counte1--;
  display.textContent = counte1;
};

// E2

let num_random = Math.floor(Math.random() * 100) + 1;
let counte2 = 1;

function guessNumber() {
  const num_guess = document.getElementById("guess").value;
  if (num_guess <= 100 && num_guess >= 1) {
    if (num_guess < num_random) {
      document.getElementById("result").innerHTML = "Quá thấp! Thử cao hơn.";
      counte2++;
    } else if (num_guess > num_random) {
      document.getElementById("result").innerHTML = "Quá cao! Thử thấp hơn.";
      counte2++;
    } else {
      document.getElementById("result").innerHTML =
        "Chúc mừng! Bạn đã đoán đúng số " + num_random;
      document.getElementById("counte2").innerHTML =
        "Bạn đã đoán " + counte2 + " lần";
    }
  } else {
    document.getElementById("result").innerHTML =
      "Số nhập vào phải nằm trong khoảng từ 1 đến 100.";
  }
}

const guessInput = document.getElementById("guess");
guessInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    guessNumber(); // Call the guessNumber function on Enter press
  }
});

const resetButton = document.getElementById("reset");
function resetGame() {
  // Reset the game state
  num_random = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guess").value = "";
  document.getElementById("result").innerHTML = "";
  counte2 = 1;
  document.getElementById("counte2").innerHTML = "";
}

// E3

function convert() {
  const textBox_e3 = document.getElementById("textBox_e3").value;
  const CtoF_e3 = document.getElementById("CtoF_e3");
  const FtoC_e3 = document.getElementById("FtoC_e3");
  const result_e3 = document.getElementById("result_e3");

  if (CtoF_e3.checked) {
    result_e3.textContent = "C to F : " + ((textBox_e3 * 9) / 5 + 32);
  } else if (FtoC_e3.checked) {
    result_e3.textContent = "F to C: " + ((textBox_e3 - 32) * 5) / 9;
  } else {
    result_e3.textContent = "You must chose";
  }
}

const textBox_e3_key = document.getElementById("textBox_e3");
textBox_e3_key.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    convert();
  }
});

// E4

function roll_e4() {
  const input_e4 = document.getElementById("int_e4").value;
  const result_e4 = document.getElementById("result_e4");
  let values = [];

  for (let i = 0; i < input_e4; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
  }

  result_e4.textContent = ` dice: ${values.join(", ")}`;
}

// E5

let myWindow;
function openWin() {
  myWindow = window.open("", "This is window", "width = 400, height = 200");
}
function closeWin() {
  myWindow = myWindow.close();
}

// E6

// Lấy các phần tử HTML
const timeLeftInput = document.getElementById("timeleft_e6");
const startButton = document.getElementById("start_e6");
const stopButton = document.getElementById("stop_e6");
const timerElement = document.getElementById("timer_e6");

let countdownInterval; // Biến để lưu ID của setInterval

// Gắn sự kiện click cho nút "Start"
startButton.addEventListener("click", startCountdown);

// Gắn sự kiện click cho nút "Stop"
stopButton.addEventListener("click", stopCountdown);

function startCountdown() {
  // Lấy giá trị thời gian từ input và chuyển đổi thành số nguyên
  let timeLeft = parseInt(timeLeftInput.value, 10);

  // Kiểm tra tính hợp lệ của giá trị thời gian
  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Vui lòng nhập thời gian hợp lệ.");
    return; // Dừng thực thi hàm nếu giá trị không hợp lệ
  }

  // Cập nhật giao diện người dùng để hiển thị thời gian đếm ngược ban đầu
  timerElement.textContent = timeLeft;

  // Sử dụng setInterval để thực hiện đếm ngược mỗi giây
  countdownInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    // Kiểm tra xem thời gian đã đếm ngược về 0 hay chưa
    if (timeLeft <= 0) {
      clearInterval(countdownInterval); // Dừng setInterval khi hết thời gian
      timerElement.textContent = "Hết giờ!";
    }
  }, 1000); // Đếm ngược mỗi 1 giây (1000 milliseconds)
}

function stopCountdown() {
  clearInterval(countdownInterval); // Dừng setInterval
  timerElement.textContent = "Đã dừng";
}

// E7

function updateClock_e7() {
  const day_e7 = new Date();
  const hour_e7 = day_e7.getHours();
  const minute_e7 = day_e7.getMinutes();
  const second_e7 = day_e7.getSeconds();
  const timestring_e7 = `${String(hour_e7).padStart(2, 0)}:${String(
    minute_e7
  ).padStart(2, 0)}:${String(second_e7).padStart(2, 0)}`;
  document.getElementById("time_e7").textContent = timestring_e7;
}
updateClock_e7();
setInterval(updateClock_e7, 1000);

// E8

const time_e8 = document.getElementById("time_e8");
const milliseconds_e8_element = document.getElementById("milisecond_e8"); // Lưu trữ phần tử
const second_e8_element = document.getElementById("second_e8");
const minute_e8_element = document.getElementById("minute_e8");
const hour_e8_element = document.getElementById("hour_e8");
const start_e8 = document.getElementById("start_e8");
const stop_e8 = document.getElementById("stop_e8");
const reset_e8 = document.getElementById("reset_e8");
let milliseconds_e8 = 0;
let second_e8 = 0;
let minute_e8 = 0;
let hour_e8 = 0;
let intervalId;
let isRunning = false;

function increaseTime_e8() {
  milliseconds_e8++;
  if (milliseconds_e8 >= 100) {
    milliseconds_e8 = 0;
    second_e8++;
    if (second_e8 >= 60) {
      second_e8 = 0;
      minute_e8++;
      if (minute_e8 >= 60) {
        minute_e8 = 0;
        hour_e8++;
      }
      hour_e8_element.textContent = hour_e8;
    }
    minute_e8_element.textContent = minute_e8;
  }
  second_e8_element.textContent = second_e8;
  milliseconds_e8_element.textContent = milliseconds_e8;
}

start_e8.addEventListener("click", () => {
  if (!intervalId) {
    // Kiểm tra nếu intervalId chưa được gán
    intervalId = setInterval(increaseTime_e8, 10); // Bắt đầu đếm thời gian
    isRunning = true;
  }
});

stop_e8.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null; // Đặt lại intervalId để có thể bắt đầu lại
  isRunning = false;
});

reset_e8.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;
  milliseconds_e8 = second_e8 = minute_e8 = hour_e8 = 0; // Đặt lại tất cả các giá trị về 0
  milliseconds_e8_element.textContent = "000";
  second_e8_element.textContent = "00";
  minute_e8_element.textContent = "00";
  hour_e8_element.textContent = "00";
});

// E9
const display_e9 = document.getElementById("display_e9");
function submit_to_display(input_e9) {
  display_e9.value += input_e9;
}

function calculate() {
  try {
    display_e9.value = eval(display_e9.value);
  } catch (error) {
    display_e9.value = "Error";
  }
}

function clear_display() {
  display_e9.value = "";
}

// EJ1
