module.exports = function check(str, bracketsConfig) {
  const brackets = parseConfig(bracketsConfig);
  let s = str;
  while (containsAny(s, brackets)) {
    s = removeEntries(s, brackets);
  }
  return s.length === 0;
}

function containsAny(str, substrings) {
  for (let sub of substrings) if (str.includes(sub)) return true;
  return false;
}

function removeEntries(str, substrings) {
  let tmp = str;
  for (let s of substrings) tmp = tmp.split(s).join("");
  return tmp;
}

function parseConfig(brackets) {
  return brackets.map(pair => pair[0] + pair[1]);
}