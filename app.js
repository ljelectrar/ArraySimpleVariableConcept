var today = new Date();
var minuteNow = today.getMinutes();

var colors = new Array('White', 'blue', 'magenta', 'black');

var message = document.getElementById('message');

if (minuteNow > 10){
  message.textContent = colors[0];
}
else if (minuteNow > 20) {
  message.textContent = colors[1];
}
else if (minuteNow > 30) {
  message.textContent = colors[2];
}
else if (minuteNow > 50){
  message.textContent = colors[3];
}
else {
  var otherText = "There is no color for this hour!";
  message.textContent = otherText;
}
