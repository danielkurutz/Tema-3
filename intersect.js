function intersect() {
	var set1Input = document.getElementById("set1").value;
	var set2Input = document.getElementById("set2").value;
	var set1 = new Set(set1Input.split(","));
	var set2 = new Set(set2Input.split(","));

	var intersection = new Set([...set1].filter(x => set2.has(x)));

	document.getElementById("result").innerHTML = Array.from(intersection).join(", ");
}