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

        getCat: function(name) {
            return $.grep(this.cats, function(e) {
                return e.name == name;
            })[0];
        },

        getAllNames: function() {
            var array = [];
            for (i = 0; i < this.cats.length; i++) {
                array.push(this.cats[i].name);
            }
            return array;
        }
    };


    var controller = {
        currentCat: '',
        getAllNames: function() {
            return model.getAllNames();
        },
        setCurrentCat: function(name) {
            this.currentCat = name;
            return model.getCat(name);
        },
        incrementCounter: function() {
            var cat = model.getCat(this.currentCat);
            cat.clicks += 1;
            return cat.clicks;
        },
        init: function() {
            listView.init();
            picView.init();
        }
    };


    var listView = {
        init: function() {
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
            // display cat pic on click
            $('li.cat-name').click(function() {
                $('div.cat-pics').empty();
                var name = this.id;
                console.log('this function called');
                console.log(name);
                var cat = controller.setCurrentCat(name);
                console.log(name);
                var name_input = $(document.createElement('h2')).text(cat.name);
                var clicks = $(document.createElement('p')).text(cat.clicks).attr('id', cat.name);
                var image = $(document.createElement('img')).attr('src', cat.pic_url).attr('id', cat.name);
                $('div.cat-pics').append(name_input).append(clicks).append(image).attr('id', cat.name);
            });

            //increment number on click
            $('div.cat-pics').click(function() {
                var id = this.id;
                var clicks = controller.incrementCounter();
                $('p#' + id).text(clicks);
            });
        }
    };

    controller.init();
});
