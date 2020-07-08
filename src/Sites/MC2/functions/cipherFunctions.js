function decode(input, code) {
  let output = input;

  let x;
  let key;
  let y;

  for (let i = 0; i < input.length; i += 1) {
    if (input.charCodeAt(i) <= 32 || input.charCodeAt(i) >= 226) {
      continue;
    }
    x = input.charCodeAt(i) - 33;
    key = code.charCodeAt(i % code.length) - 33;
    y = x - key;
    if (y < 0) y += 193;
    y %= 193;
    output = output.replaceAt(i, String.fromCharCode(y + 33));
  }

  return output;
}

function encode(input, code) {
  let output = input;

  let x;
  let key;

  for (let i = 0; i < input.length; i += 1) {
    if (input.charCodeAt(i) <= 32 || input.charCodeAt(i) >= 226) {
      continue;
    }
    x = input.charCodeAt(i) - 33;
    key = code.charCodeAt(i % code.length) - 33;
    x = (x + key) % 193;
    output = output.replaceAt(i, String.fromCharCode(x + 33));
  }

  return output;
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

export { encode, decode };
