var source = $('#store-template').html();
var template = Handlebars.compile(source);

var source2 = $('#store-info').html();
var template2 = Handlebars.compile(source2);

var fetch = function (searchword) {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q='+ searchword,
    dataType: "json",
    success: function(data) {
      console.log(data);
      var items = data.items;
      /*Zz*/
      // var title = data.items[].volumeInfo.title;
      // var author = data.items[0].volumeInfo.authors[0];
      // var description = data.items[0].volumeInfo.description;
      // var image = data.items[0].volumeInfo.imageLinks.smallThumbnail;
      // $(".display").append("<h1>"+title+"</h1>"+"<br><h3>"+ author +"</h3>"+ "<br><p>" + description + "</p>" + "<img src='"+ image + "'/>");
      var newHTML = template({items: items})
      $(".display").append(newHTML);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("hi there");
    }
  }); 
};

var fetch2 = function (searchword) {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q='+ searchword,
    dataType: "json",
    success: function(data) {
      console.log(data);
      var items = data.items;
      var newHTML = template({items: items})
      $(".displayInfo").append(newHTML);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("hi there");
    }
  }); 
};

//Events 
$(".search-isbn").on("click", function(){
  var searchword = $(".form-control").val();
  fetch(searchword);
})

$(".display").on("click", ".moreInfo", function(){
  var searchword = $(".form-control").val();
  fetch2(searchword);

})
