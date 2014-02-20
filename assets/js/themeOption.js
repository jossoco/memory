ThemeOption = function (id, name) {
  return '<div id="' + id + '" class="selected theme-option ' + id + '">' +
         '<div class="theme-sample"><div class="wrapper"></div></div>' +
         '<div class="theme-label"><span>' + name + '</span></div>' +
         '</div>';
};
