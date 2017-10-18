window.fixLayout = function () {
  var footerHeight  = window.$('.main-footer').outerHeight() || 0
  // var neg           = window.$('.main-header').outerHeight() + footerHeight
  var windowHeight  = window.$(window).height()
  // var sidebarHeight = window.$('.sidebar').height() || 0

  // Set the min-height of the content and sidebar based on
  // the height of the document.
  window.$('.content-wrapper').css('min-height', windowHeight - footerHeight)
}