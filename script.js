function yodaSpeak(sentence) {
  const words = sentence.split(' ');
  if (words.length < 4) return sentence + ", hmmm.";

  const mid = Math.floor(words.length / 2);
  const firstHalf = words.slice(0, mid);
  const secondHalf = words.slice(mid);

  const rearranged = `${secondHalf.join(' ')} ${firstHalf.join(' ')}, hmm.`;
  const yodaPhrases = [
    "The Force strong with this one, it is.",
    "Much to learn, you still have.",
    "Patience you must have, my young Padawan.",
    "Do or do not. There is no try."
  ];

  return rearranged + " " + yodaPhrases[Math.floor(Math.random() * yodaPhrases.length)];
}

document.getElementById('translateBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value.trim();
  const output = document.getElementById('outputText');
  const sound = document.getElementById('yodaSound');

  if (input.length === 0) {
    output.textContent = "Type something, you must.";
    return;
  }

  output.textContent = yodaSpeak(input);
  sound.play();
});
