
var createNotification = function(target) {
  var content = "Copied: " + target.innerText
  var notification = new Notification(content)
  setTimeout(function() {
    notification.close()
  }, 1000)
}

window.addEventListener('click', function(event) {
  if (event.target.className === 'glyphicon-class') {
    var range = document.createRange();
    range.selectNode(event.target);
    window.getSelection().addRange(range);
    var successful = document.execCommand('copy');
    if (successful) {
      if (Notification.persmission === 'granted') {

        createNotification(event.target)
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            createNotification(event.target)
          }
      });

      }
    }
    window.getSelection().removeAllRanges();
  }
})
