$('document').ready(function() {
    var model = {
        cats: [{
            name: 'ed',
            pic_url: 'http://www.catdepot.org/App_Themes/CatDepot/images/cat-img.jpg',
            clicks: 0
        }, {
            name: 'fred',
            pic_url: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
            clicks: 0
        }, {
            name: 'ted',
            pic_url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
            clicks: 0
        }, {
            name: 'shed',
            pic_url: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg',
            clicks: 0
        }, {
            name: 'red',
            pic_url: 'http://e2ua.com/data/wallpapers/92/WDF_1365569.jpg',
            clicks: 0
        }],

        currentCat: '',

        init: function() {
            this.currentCat = this.cats[0];
        },
        getCat: function(name) {
            return $.grep(this.cats, function(e) {
                return e.name == name;
            })[0];
        },
        getCurrentCat: function() {
            return this.currentCat;
        },
        setCurrentCat: function(name) {
            var cat = $.grep(this.cats, function(e) {
                return e.name == name;
            })[0];
            this.currentCat = cat;
            return this.currentCat;
        },
        getAllNames: function() {
            var array = [];
            for (i = 0; i < this.cats.length; i++) {
                array.push(this.cats[i].name);
            }
            return array;
        },
        changeCat: function(name, clicks, pic_url) {
            var cat = this.currentCat;
            cat.name = name;
            cat.clicks=clicks;
            cat.pic_url=pic_url;
            alert('changeCat', cat);
        },
        incrementCounter: function() {
            this.currentCat.clicks++;
            return this.currentCat.clicks;
        }
    };

    var controller = {
        admin_view: false,
        getAllNames: function() {
            return model.getAllNames();
        },
        setCurrentCat: function(name) {
            return model.setCurrentCat(name);
        },
        getCurrentCat: function() {
            return model.getCurrentCat();
        },
        incrementCounter: function() {
            return model.incrementCounter();
        },
        changeCat: function(name, clicks, pic_url) {
                model.changeCat(name, clicks, pic_url);
                picView.render();
                listView.init();
        },
        init: function() {
            model.init();
            listView.init();
            picView.init();
        }
    };


    var listView = {
        init: function() {
            $('div.cat-list > ul').empty()
            var cats = controller.getAllNames();
            for (var i = 0; i < cats.length; i++) {
                var cat = cats[i];
                var entry = $(document.createElement('li')).text(cat).attr('id', cat);
                entry.attr('class', 'cat-name');
                $('div.cat-list > ul').append(entry);
            }
        }
    };

    var picView = {
        init: function() {
            this.render();

            // display cat pic on click
            $('li.cat-name').click(function() {
                controller.setCurrentCat(this.id);
                picView.render();
            });

            //increment number on click
            $('div.cat-pics').click(function() {
                var clicks = controller.incrementCounter();
                $('p.clicks').text(clicks);
            });

            //Admin View
            $('button.admin').click(function() {
                controller.admin_view = true;
                picView.showForm();
            });

            //Submit updated info for cats
            $('button#submit').click(function() {
                //fill in inputs in form object
                var name = $('input[name=name]').val();
                var clicks = $('input[name=clicks]').val();
                var pic_url = $('input[name=pic_url]').val();
                alert(clicks);
                controller.changeCat(name, clicks, pic_url);
            });
        },
        render: function() {
            $('div.cat-pics').empty();
            var cat = controller.getCurrentCat();
            var name_input = $(document.createElement('h2')).text(cat.name);
            var clicks = $(document.createElement('p')).text(cat.clicks).attr('class', 'clicks');
            var image = $(document.createElement('img')).attr('src', cat.pic_url).attr('id', cat.name);
            $('div.cat-pics').append(name_input).append(clicks).append(image).attr('id', cat.name);
            if (controller.admin_view){
              this.showForm();
            }
        },
        showForm: function(){
          $('div.admin').removeClass('hidden');
          var cat = controller.getCurrentCat();
          //fill in inputs in form object
          $('input[name=name]').attr('value', cat.name);
          $('input[name=clicks]').attr('value', cat.clicks);
          $('input[name=pic_url]').attr('value', cat.pic_url);
        }
    };

    controller.init();
});
