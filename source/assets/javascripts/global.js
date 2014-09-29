var productsSearch = [];

$(document).ready(function() {

$.ajax({
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

/*

   $('products_galery').on('click', function(event) {
        event.preventDefault();
        $('#myModal').modal('show');
    })

    $('.btn-mais-info').on('click', function(event) {
        $( '.open_info' ).toggleClass( "hide" );
    })

*/
});