Card = function (id, symbol) {

  return '<div class="card-container">' +
      '<div class="shape card" id="' + id + '">' +
      '<div class="face ft">' +
      '<div class="wrapper ft">' +
      '<span class="card-symbol icon ' + symbol + '"></span>' +
      '</div>' +
      '</div>' +
      '<div class="face bk">' +
      '<div class="wrapper bk"></div>' +
      '</div>' +
      '<div class="face rt">' +
      '<div class="wrapper rt"></div>' +
      '</div>' +
      '<div class="face lt">' +
      '<div class="wrapper lt"></div>' +
      '</div>' +
      '<div class="face bm">' +
      '<div class="wrapper bm">' +
      '</div>' +
      '</div>' +
      '<div class="face tp">' +
      '<div class="wrapper tp"></div>' +
      '</div>' +
      '</div></div>';
};
