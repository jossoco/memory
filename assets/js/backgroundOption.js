BackgroundOption = function (id, name) {
  return '<div id="' + id + '" class="selected background-option ' + id + '">' +
         '<div class="background-sample"><div class="wrapper"></div></div>' +
         '<div class="background-label"><span>' + name + '</span></div>' +
         '</div>';
};
