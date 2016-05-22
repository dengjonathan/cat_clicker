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

        getCurrentCat: function(name) {
            return $.grep(this.cats, function(e) {
                return e.name == name
            })[0];
        },

        getAllNames: function() {
            var array = [];
            for (i=0; i<this.cats.length;i++) {
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
            return model.getCurrentCat(name);
        },
        incrementCounter: function() {
            var cat = model.getCurrentCat(name);
            cat.clocks += 1;
            return cat.clicks;
        },
        init: function() {
            listView.init();
        }
    };


    var listView = {
        init: function() {
            var cats = controller.getAllNames();
            console.log(cats);
            for (var i = 0; i < cats.length; i++) {
                var cat = cats[i];
                console.log(cat);
                var entry = $(document.createElement('li')).text(cat).attr('id', cat);
                entry.attr('class', 'cat-name')
                console.log(entry);
                $('div.cat-list > ul').append(entry);
            };
        }
    };

    var picView = {
        display: function() {
            $('li.cat-name').click(function() {
                $('div.cat-pics').empty();
                var name = this.id;
                var cat = getCurrentCat(name);
                var name = $(document.createElement('h2')).text(cat.name);
                var clicks = $(document.createElement('p')).text(cat.clicks).attr('id', cat.name);
                var image = $(document.createElement('img')).attr('src', cat.pic_url).attr('id', cat.name);
                $('div.cat-pics').append(name).append(clicks).append(image).attr('id', cat.name);
            });
        },
        incrementCounter: function() {
            $('div.cat-pics').click(function() {
                var clicks = model.incrementCounter();
                $('p#' + id).text(cat.clicks);
            });
        }
    }

    controller.init()

});
