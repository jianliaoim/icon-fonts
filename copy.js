
window.addEventListener('click', function(event) {
  if (event.target.className === 'glyphicon-class') {
    var range = document.createRange();
    range.selectNode(event.target);
    window.getSelection().addRange(range);
    var successful = document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
})
