$(function() {
  var tmplSrc = $('#source').html();
  $.getJSON('data.json').done( function(data) {
    var $ul = $('<ul></ul>');
    var $li, liText;
    _.each(data.products, function(product) {
      $li = $('<li></li>');
      liText = product.name + ': ' + product.price + '円';
      $li.text(liText);
      $ul.append($li);
    });
    $('body').append($ul);
  });
});
