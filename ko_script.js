var cats = {
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
};


var ViewModel = function() {
  this.cat_list = ko.observableArray([]);

  cats.forEach(function(cats) {
    this.cat_list.push(new Cat(cats));
  });

  this.current_cat = ko.observable( this.cat_list()[0]);
  this.incrementScore = function() {
    this.score(this.score() + 1);
  };

  this.setcat = function(clickedcat) {
    this.current_cat(clickedcat); 
  };
}

var Cat = function () {
  this.score = ko.observable(0);
  this.name = ko.observable("Tom");
  this.url = ko.observable("newcat.jpg");
  this.nicknames = ko.observableArray(['Tibby','Snoopy','Snow']);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.score();
    if(clicks < 10)
    {
      title = "New Born";
    }
    else if(click <50) {
      title = "adult";
    }
    else {
      title = "Ninja";
    }
    return title;
  },this);
}


ko.applyBindings(new ViewModel());
