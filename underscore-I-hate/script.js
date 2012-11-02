$(function() {
  var tmplSrc = $('#source').html();
  $.getJSON('data.json').done( function(data) {
    var compiledHtml = _.template(tmplSrc, data);
    $('body').append(compiledHtml);
  });
});
