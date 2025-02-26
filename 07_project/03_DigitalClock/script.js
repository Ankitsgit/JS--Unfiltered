const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


// setInterval(function, milliseconds) -it control execution of function after every milliseconds
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

