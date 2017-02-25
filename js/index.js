$(".portfolio-link").on("click", function(e) {
    e.preventDefault();
    history.pushState({view:"POPUP"}, "", "");
});

window.addEventListener("popstate", function(e) {
  // return to home state
  if (e.state.view === "POPUP") {
    history.pushState({}, "", "/");
    $(".close-modal").click();
  }
});

$(".project-nav A").on("click", function(e) {
  e.preventDefault();
  var button = $(this);
  console.log(  button.attr('href'), $('#portfolio a[href="##"].portfolio-link'.replace('##', button.attr('goto'))));
  history.pushState({}, "", "/");
  $(".btn-close").click();
  $('#portfolio a[href="##"].portfolio-link'.replace('##', button.attr('goto'))).click();
//  $('#portfolio a[href="##"].portfolio-link'.replace('##', button.attr('href') )).click();
});

$("body").keydown(function(e){
    e.preventDefault();
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {
      $(".project-nav A.prev:visible").click();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
      $(".project-nav A.next:visible").click();
    }
});
