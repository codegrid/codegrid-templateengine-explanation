$(function() {
  var tmplSrc = $('#source').html();
  $.getJSON('data.json').done( function(data) {
    var source = $('#source').html();
    var template = Handlebars.compile(source);
    var compiledHtml = template(data);
    $('body').append(compiledHtml);
  });
});
