document.addEventListener("DOMContentLoaded", function () {
  const hudba = document.getElementById("hudba");
  hudba.volume = "0.05";

  const countDownDate = new Date("Jan 20, 2024 13:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById(
      "countdown-time"
    ).innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-time").innerHTML = "JUST MARRIED";
    }
  }, 1000);
});
