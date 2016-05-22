var cats = [{
    name: 'ed',
    pic_url: 'http://www.catdepot.org/App_Themes/CatDepot/images/cat-img.jpg',
    clicks: 0
}, {
    name: 'fred',
    pic_url: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    clicks: 0
},
{
    name: 'ted',
    pic_url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    clicks: 0
},
{
    name: 'shed',
    pic_url: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg',
    clicks: 0
},
{
    name: 'red',
    pic_url: 'http://e2ua.com/data/wallpapers/92/WDF_1365569.jpg',
    clicks: 0
}];

$('document').ready(function(){

        //populate cat list with names of all cats stored in data
        for(var i = 0; i<cats.length;i++){
          var cat = cats[i].name;
          var entry = $(document.createElement('li')).text(cat).attr('id', cat);
          entry.attr('class', 'cat-name')
          $('div.cat-list > ul').append(entry);
        }

        $('li.cat-name').click(function(){
          $('div.cat-pics').empty();
          var id = this.id;
          var cat = cats.filter(function(e){return e.name==id;})[0];
          var name = $(document.createElement('h2')).text(cat.name);
          var clicks = $(document.createElement('p')).text(cat.clicks).attr('id', cat.name);
          var image = $(document.createElement('img')).attr('src', cat.pic_url).attr('id', cat.name);
          $('div.cat-pics').append(name).append(clicks).append(image).attr('id', cat.name);
        });

        $('div.cat-pics').click(function(){
          var id = this.id;
          var cat = cats.filter(function(e){return e.name==id;})[0];
          cat.clicks += 1;
          $('p#' + id).text(cat.clicks);
        });
    });
