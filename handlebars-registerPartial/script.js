$(function() {
  var tmplSrc = $('#source').html();
  $.getJSON('data.json').done( function(data) {

    // テンプレートを準備
    var source_table = $('#source-table').html();
    var source_tr = $('#source-tr').html();
    var source_categories = $('#source-categories').html();

    // partialを登録
    Handlebars.registerPartial('tr', source_tr)
    Handlebars.registerPartial('categories', source_categories)

    // 適用
    var template = Handlebars.compile(source_table);
    var compiledHtml = template(data);
    $('body').append(compiledHtml);

  });
});
