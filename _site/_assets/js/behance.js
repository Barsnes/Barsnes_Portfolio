$.getJSON('https://api.behance.net/v2/users/barsnes/projects?client_id=tIWBW0rUjYc3KY1INlcn4E6HTpNeTHmm', function(data) {
  console.log(data);
  
  $.each(data, function(index, value){
         console.log(value);
         
         });
});
