$(document).ready(function() {

  var linksArr = [
    { link: "https://donaldcollinsjr.bandcamp.com/",
      name: "Donald Collins Jr.",
      text: "He's an extremely talented piano player/composer with whom I have the great pleasure to work with."
    },
    { link: "https://www.facebook.com/512MidnightBlues",
      name: "Midnight Blues",
      text: "One of the bands I front, based out of San Marcos, TX."
    },
    { link: "http://www.music.txstate.edu/info/map.html",
      name: "Texas State University Music Building",
      text: "I now teach all of my lessons out of the Texas State University Music Building."
    },
    { link: "https://www.youtube.com/user/lishlindsey/videos",
      name: "Lish Lindsey",
      text: "My go-to for beginner flute students. She has quite a few tutorials and recordings online of various etudes from books that I teach out of, including the Rubank Advanced Etudes for Flute (one I seem to use often). I try to use recordings as much as possible in my lessons."
    },
    { link: "https://www.youtube.com/playlist?list=PL3325FF3A705DA04A",
      name: "Harvey Pittel",
      text: "A master classical saxophone player, and he has a few tutorials that I use with my kids. His vibrato tutorial in particular is one of my favorites, and I have used that with many of my students. He also happens to be my teacher's teacher, so basically I'm a 3rd generation Harvey Pittel student."
    },
    { link: "https://aqua-brew.com/",
      name: "AquaBrew",
      text: "You'll often find me performing at AquaBrew in San Marcos, TX. The food is incredible and it's the perfect atmosphere for live music."
    }
  ]
  var $partnersArea =   $('#partners-area');

  $partnersArea.append('<p class="partners-title">Some of my partners:</p>');

  for (var i=0; i<linksArr.length; i++) {


    var item = '<p class="partners-item"><a href="' + linksArr[i].link + '">' + linksArr[i].name +
          '</a> - ' + linksArr[i].text + "</p>";

    $partnersArea.append(item);
  }

}); // document ready
