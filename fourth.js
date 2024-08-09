function NumFrequency(arr) {
  return arr.reduce((freq, str) => {
    freq[str] = (freq[str] || 0) + 1;
    return freq;
  }, {});
}

const input = [
  "hello",
  "world",
  "one",
  "hello",
  "cc",
  "one",
  "world",
  "hello",
  "cc",
];
const frequency = NumFrequency(input);
console.log(frequency);
