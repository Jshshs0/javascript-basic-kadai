const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
  const newText = document.getElementById('text');

  newText.textContent = 'ボタンをクリックしました';

})