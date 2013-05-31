$('.open-popup').magnificPopup({
    items: [
      {
        src: 'assets/img/1.jpg',
      },
      {
        src: 'assets/img/2.jpg',
      },
      {
        src: 'assets/img/3.jpg',
      },
      {
        src: 'assets/img/4.jpg',
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});//@ sourceURL=pen.js</script>

var cell = document.createElement('div');
var imgDir = "assets/img/"
var html = "";
for (var i = 1; i <= 20; i ++) {
    var photoPath = imgDir + i + ".jpg";
    var img = '<a href="#modal" role="button" data-toggle="modal" onclick="replacePhoto(\'' + photoPath + '\')")><img class="candidate-photo" src="' + photoPath + '"/></a>';
    html += img;
}
cell.innerHTML = html;
$("#candidate-container").append(cell);

function replacePhoto(res) {
    var newCss =  "url('" + res + "')";
    $('#main-photo-container').css('background-image', newCss);
}
