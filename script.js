function yodaSpeak(sentence) {
  const words = sentence.split(' ');
  if (words.length < 4) return sentence + ", hmmm.";

  const mid = Math.floor(words.length / 2);
  const firstHalf = words.slice(0, mid);
  const secondHalf = words.slice(mid);

  let rearranged = `${secondHalf.join(' ')} ${firstHalf.join(' ')}, hmm.`;
  rearranged = rearranged.charAt(0).toUpperCase() + rearranged.slice(1);
  return rearranged;
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
