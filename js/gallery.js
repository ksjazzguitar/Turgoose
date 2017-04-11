
// init Masonry after all images have loaded
$(document).ready(function() {
  var proxyStr = "http://crossorigin.me/";
  var strRT = "http://www.rachelturgoose.com/img/gallery/gallery.json";

  $.getJSON(proxyStr + strRT, function(data) {
    var myImgs = {
      list: [],
      path: 'img/gallery/',
      winHeightCSL: '100%',
      winWidthCSL: 100,
      delayCSL: 3000,
      transitionCSL: 500, // ? used?
      counterCSL: 1, // 1-indexed
      tblHeightCSL: 300,
      colsTBL: 3
    }


    // set up files
    myImgs.list=data;

    for (var i = 0 ; i < data.length ; i++) {
      myImgs.list[i].tName = data[i].fName.substr(0, data[i].fName.lastIndexOf('.')) +
            "-tn." + data[i].fName.substr(data[i].fName.lastIndexOf('.') + 1);
    }

    // set up carousel
    
    var $carouselArea = $("#carousel-area");

    var interval;


    for (var i = 0 ; i < myImgs.list.length ; i++) {
      $carouselArea.append('<img class = "transparent imgCSL" src="' + myImgs.path +
          myImgs.list[i].tName + '" alt="picture" height="' + myImgs.winHeight + '">')
    }


    function startCSL() {
      interval = setInterval( showImage, myImgs.delayCSL );
    }

    function pauseCSL() {
      clearInterval(interval);
    }

    function showImage() {
      $("#carousel-area img:nth-child(" + myImgs.counterCSL +
          ")").removeClass("transparent");

      if (myImgs.counterCSL > 1) {
        $("#carousel-area img:nth-child(" + (myImgs.counterCSL-1) +
            ")").addClass("transparent");
      } else {
        $("#carousel-area img:nth-child(" + myImgs.list.length +
            ")").addClass("transparent");
      }
      if (++myImgs.counterCSL > myImgs.list.length) {
        myImgs.counterCSL = 1;
      }
    }  showImage()

    $('#carousel-area').on('mouseenter', pauseCSL).on('mouseleave', startCSL);

    showImage();
    startCSL();

    // set up freewall grid

    var html = '<div class="grid-sizer"></div>';
    var strURL = "http://www.rachelturgoose.com/img/gallery/";
    var w;
    for (var i = 0 ; i < data.length ; i++) {
      w = 200;
      html += '<div class="grid-item"><img src="' + strURL + myImgs.list[i].tName +
            '"></div>\n';
    }
    $('#grid-area').html(html);

    var $grid = $('.grid').imagesLoaded(function() {
      $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      });
    });
   }); // getJSON
}); // document ready
