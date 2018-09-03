$(document).ready(() => {
	$("h1").on("click", () => {
		if ($("img").is(":visible")) {
			$("img").css("visibility", "visible");
		} else {
			$("img").css("visibility", "hidden");
		}
	});
});