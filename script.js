$(function() {

var model = {
            current_cat : null,
            cats : [
              {"name":"Snoopy",
                "url":"cat.jpg",
                "score":0},
              {"name":"Snow",
                "url":"ncat.jpg",
                "score":0},
              {"name":"Cuddles",
                "url":"cat1.jpg",
                "score":0},
              {"name":"snuggles",
                "url":"cat2.jpeg",
                "score":0},
              {"name":"tiger",
                "url":"tiger.png",
                "score":0}
              ]
            };

var octopus = {
  init : function() {
    model.current_cat = model.cats[0];
    catListView.init();
    catView.init();
    admin_view.init();
  },
  getCurrentCat : function() {
    return model.current_cat;
  },
  setCurrentCat : function(cat) {
    model.current_cat = cat;
  },
  getCats : function() {
    return model.cats;
  },
  incrementScore : function() {
    model.current_cat.score++;
    catView.render();
  },
  changeModel : function(nam,link,sco) {
    model.current_cat.name = nam;
    model.current_cat.url = link;
    model.current_cat.score = sco;
  }
};

var catView = {
  init : function() {
    this.catElem = document.getElementById('cat');
    this.catnameElem = document.getElementById('cat_name');
    this.catImgElem = document.getElementById('cat_img');
    this.catScoreElem = document.getElementById('cat_score');

    this.catImgElem.addEventListener('click',function() {
      octopus.incrementScore();
    });
    this.render();
  },
  render : function() {
    var currentCat = octopus.getCurrentCat();
    this.catnameElem.textContent = currentCat.name;
    this.catImgElem.src = currentCat.url;
    this.catScoreElem.textContent = currentCat.score;
  }
};

var catListView = {
  init : function() {
    this.catListElem = document.getElementById('list_content');
    this.render();
  },
  render : function() {
    var cat,elem,i;

    var cats = octopus.getCats();
    this.catListElem.innerHTML = "";

    for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    cat = cats[i];

    // We're creating a DOM element for the number
    elem = document.createElement('li');
    elem.textContent = cat.name;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catCopy) {
        return function() {
            octopus.setCurrentCat(catCopy);
            catView.render();
        };
    })(cat));
      this.catListElem.appendChild(elem);
  }
}
};

var admin_view = {
  init : function() {
    $('#admin_content').hide();
    this.render();
  },
  render : function() {
    $('#admin').click(function() {
      $('#admin_content').toggle();
    });
    $('#submit').click(function() {
      var nam = $('#c_name').val();
      var link = $('#c_url').val();
      var sco = $('#c_score').val();
      octopus.changeModel(nam,link,sco);
    });
  }
};

octopus.init();

/*

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

// This is the number we're on...
var cat = cats[i];

// We're creating a DOM element for the number
var elem = document.createElement('div');
elem.textContent = cat.name;

// ... and when we click, alert the value of `num`
elem.addEventListener('click', (function(catCopy) {
    return function() {

        var catscreen = document.createElement('div');

        catscreen.innerHTML += '<h2>'+catCopy.name +'</h2>';
        catscreen.innerHTML += '<img src="'+catCopy.url+'" alt="A image of the cat" class="catImage">';
        catCopy.score++;
        score(catCopy.score);
        //document.body.appendChild(catscreen);
        $('.cats_space').append(catscreen);
    };
})(cat));

//document.body.appendChild(elem);
$('.list_content').append(elem);
};
function score(a){
$('.score').text(a);
};*/

}());
