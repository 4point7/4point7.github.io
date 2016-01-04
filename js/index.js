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
