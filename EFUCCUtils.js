var memory = [];
var pointer = 0;

function getLoopEnd(lines, start) {
	var j = start;
	var end;
	var braces = 1;
	while (braces > 0) {
		var line = lines[j].trim();
		if (line.match(/^while \(SACC.RecurranceCheck\(.*\)\)/)) {
			braces++;
		} else if (line.match(/\}/)) {
			braces--;
			if (braces == 0) {
				end = j;
				break;
			}
		}
		j++;
	}
	return end;
}

function interpreter(code, stdout) {
	var lines;
	if (!Array.isArray(code)) {
		lines = code.split(/\r?\n/);
	} else {
		lines = code;
	}

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
			memory[pointer] = (memory[pointer] - 1) % 256;
		} else if (line.match(/^while \(SACC.RecurranceCheck\(.*\)\)/)) {
			var start = i+1;
			var end = getLoopEnd(lines, start);
			while (memory[pointer] > 0) {
				interpreter(lines.slice(start, end), stdout);
			}
			i = end;
		}
	}
}

function runProgram(code, stdout) {
	memory = [];
	pointer = 0;
	interpreter(code, stdout);
}

function stdout(charCode) {
	$("#result").val($("#result").val() + String.fromCharCode(charCode));
}

var programStart = "public class Main {\n\tpublic static void main(String[] args) {\n";
var programEnd = "\t}\n}\n";
var tabLevel = 2;

function convertBrainFucktoFUCC(code) {
	var output = programStart;
	var tabLevel = 2;

	var chars = code.split("");

	for (var i = 0; i < chars.length; i++) {
		var c = chars[i];

		if (c == "+") {
			output += Array(tabLevel+1).join("\t") + 'SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();\n';
			output += Array(tabLevel+1).join("\t") + 'currentPosition.applyValueAdvancement("increaseValueByOne.xml");\n';
		} else if (c == "-"){
			output += Array(tabLevel+1).join("\t") + 'SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();\n';
			output += Array(tabLevel+1).join("\t") + 'currentPosition.applyValueReduction("decreaseValueByOne.xml");\n';
		} else if (c == ">") {
			output += Array(tabLevel+1).join("\t") + 'SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();\n';
			output += Array(tabLevel+1).join("\t") + 'SACC.applyPointerAdvancement(++currentPosition);\n';
		} else if (c == "<") {
			output += Array(tabLevel+1).join("\t") + 'SACCPointerPosition currentPosition = SACC.getCurrentPointerPosition();\n';
			output += Array(tabLevel+1).join("\t") + 'SACC.applyPointerReduction(--currentPosition);\n';
		} else if (c == ".") {
			output += Array(tabLevel+1).join("\t") + 'OutputFactory outputFactoryInst = new OutputFactory(Routing.STDOUT);\n';
			output += Array(tabLevel+1).join("\t") + 'outputFactoryInst.STDOUT.write.character(SACC.getCurrentPointerValue(0));\n';
		} else if (c == "[") {
			output += Array(tabLevel+1).join("\t") + 'while (SACC.RecurranceCheck(SACC.getCurrentPointerValue(0))) {\n';
			tabLevel++;
		} else if (c == "]") {
			tabLevel--;
			output += Array(tabLevel+1).join("\t") + '}\n';
		}
	}

	output += programEnd
	return output;
}

function loadCodeExample() {
	var href = 'examples/' + $("#exampleDropdown").val();
	$.get(href, function(c) {
		$("#code").val(c);
	});
};

	