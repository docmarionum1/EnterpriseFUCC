function interpreter(code, stdout) {
	var memory = [];
	var pointer = 0;

	var lines = code.split(/\r?\n/);

	for (var i = 0; i < lines.length; i++) {
		var line = lines[i].trim();

		if (line.indexOf("import") >= 0) {
			var paths = line.split(" ")[1].split(".");
			memory[paths.length-1] = paths[paths.length-1].charCodeAt(0);
		} else if (line.match(/^\w*Factory \w* = new \w*Factory.*$/)) {
			console.log(line);
			var factory = line.match(/^(\w*Factory) \w* = new (\w*Factory).*$/)[1];
			stdout(memory[pointer]);
		} else if (line.match(/^SACC.applyPointerAdvancement\(\+\+currentPosition\);/)) {
			pointer++;
		} else if (line.match(/^SACC.applyPointerReduction\(\-\-currentPosition\);/)) {
			pointer--;
		} else if (line.match(/\w*.applyValueAdvancement\("increaseValueByOne.xml"\);/)) {
			if (!memory[pointer]) {
				memory[pointer] = 0;	
			}
			console.log(memory[pointer]);
			memory[pointer] = (memory[pointer] + 1) % 256;
		} else if (line.match(/\w*.applyValueReduction\("decreaseValueByOne.xml"\);/)) {
			if (!memory[pointer]) {
				memory[pointer] = 0;	
			}
			console.log(memory[pointer]);
			memory[pointer] = (memory[pointer] + 1) % 256;
		}
	}

	return memory;
}

function stdout(charCode) {
	$("#result").val($("#result").val() + String.fromCharCode(charCode));
}