//var productsSearch = [];

$(document).ready(function() {

 /* var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
*/
  $('.btn-mais-info').on('click', function(event) {
        $( '.open_info' ).toggleClass( "hide" );
    })

  $('.fancybox').fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });




/*$.ajax({
    url: 'https://gist.githubusercontent.com/gledsoncruz/8454e3b7eb29374ba998/raw/e676509ca8ae89b94fcba2986fd26182eb22ce2e/products.json',
    async: false,
    dataType: 'json',
    success: function (data) {
       $.each(data, function(idx, obj) {
        productsSearch.push({
            id: obj.id,
            name: obj.name,
            source: "Produtos",
            description: obj.description,
            price: obj.price,
            available: obj.available
          });
      });
    }
  });

  console.log(productsSearch);

  var productsBH = new Bloodhound({
    name: "Products",
    datumTokenizer: function (d) {
    return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: productsSearch,
    limit: 10
  });

  productsBH.initialize();

  $("#searchbox").typeahead({
      minLength: 1,
      highlight: true,
      hint: false
    }, {
      name: "Produtos",
      displayKey: "name",
      source: productsBH.ttAdapter()
    });

   $('.detail').on('click', function(event) {
        event.preventDefault();
        var url = ($(this).attr('href'));
        var param_id = getURLParameter(url, 'id');
        prod = getObjects(productsSearch, 'id', param_id);
        createModal(prod);
        console.log(prod[0].name);
    })


    function getURLParameter(url, name) {
      return (RegExp(name + '=' + '(.+?)(&|$)').exec(url)||[,null])[1];
    }

    function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}


  function createModal(obj){

    $('.modal-body').remove();

    $('<div>',{
        class: 'modal-body'
    }).insertAfter('.modal-header');

    var table = $('<table></table>').addClass('pull-left col-md-8');

    var tr = $('<tr></tr>');
    var td1 = $('<td></td>').addClass('h6').text('Codigo');
    var td2 = $('<td></td>');
    var td3 = $('<td></td>').addClass('h5').text(obj[0].id);
    table.append(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    var tr2 = $('<tr></tr>');
    var td4 = $('<td></td>').addClass('h6').text('Nome');
    var td5 = $('<td></td>');
    var td6 = $('<td></td>').addClass('h5').text(obj[0].name);
    table.append(tr2);
    tr2.append(td4);
    tr2.append(td5);
    tr2.append(td6);

    $(table).insertAfter('<div>',{class: 'col-md-4'});
   $('.modal-body').append(table);


   $('#modal').modal('show');

  }
*/

});