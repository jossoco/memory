Card = function (id, symbol) {

  return '<div class="card-container">' +
      '<div class="shape card" id="' + id + '">' +
      '<div class="face ft">' +
      '<div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.223529);">' +
      '<span class="card-symbol fa fa-3x ' + symbol + '"></span>' +
      '</div>' +
      '</div>' +
      '<div class="face bk">' +
      '<div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.372549);"></div>' +
      '</div>' +
      '<div class="face rt">' +
      '<div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.227451);"></div>' +
      '</div>' +
      '<div class="face lt">' +
      '<div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.372549);"></div>' +
      '</div>' +
      '<div class="face bm">' +
      '<div class="photon-shader" style="background-color: rgba(0, 0, 0, 0.647059);">' +
      '</div>' +
      '</div>' +
      '<div class="face tp">' +
      '<div class="photon-shader" style="background-color: rgba(255, 255, 255, 0.0431373);"></div>' +
      '</div>' +
      '</div></div>';
};
