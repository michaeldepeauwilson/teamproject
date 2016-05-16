console.log('This will be the js used by the project.')
// $.ajax({
//    dataType: "json",
//    url: http:developer.nytimes.com/top_stories_v2.json#/Console/GET/%7Bsection%7D.%7Bformat%7D,
//    data: byline,
// });


$(document).ready(function() {
var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
url += '?' + $.param({
  'api-key': "4a4a769ce48a48aea15a51f049d59e30"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
})
}); 




// wrap everyhting in document.ready
// link everyhting