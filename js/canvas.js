window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	// canvas.height = window.innerHeight;
	// canvas.width = window.innerWidth;
	canvas.height = 300;
	canvas.width = 500;
	let painting = false;
	function startPosition() {
		painting = true;
		draw(e);
	}
	function finishPosition() {
		painting = false;
		ctx.beginPath();
	}
	function draw(e) {
		if (!painting) { return; }
		ctx.lindWidth = 100;
		ctx.lineCap = "round";
		ctx.strokeStyle = "red";
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
	function getMouse(e) {
		mx = e.clientX - ctx.offsetLeft;
		my = e.clientY - ctx.offsetTop;
	}
	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishPosition);
	canvas.addEventListener("mousemove", draw);
});