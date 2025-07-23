function calcStacks() {
  const pointPerStack = parseFloat(document.getElementById('pointPerStack').value);
  const totalPointNeeded = parseFloat(document.getElementById('totalPointNeeded').value);

  if (!pointPerStack || !totalPointNeeded || pointPerStack <= 0) {
    alert("Isi input dengan benar yaa~");
    return;
  }

  const stacksNeeded = Math.ceil(totalPointNeeded / pointPerStack);
  const resultBox = document.getElementById('stackResult');
  resultBox.innerHTML = `<b>Jumlah yang dibutuhkan:</b> ${stacksNeeded} stak`;
  resultBox.style.display = 'block';
}

function calcSpina() {
  const pricePerStack = parseFloat(document.getElementById('pricePerStack').value);
  const stacksToBuy = parseFloat(document.getElementById('stacksToBuy').value);

  if (!pricePerStack || !stacksToBuy || pricePerStack <= 0) {
    alert("Isi input dengan benar yaa~");
    return;
  }

  const totalCost = pricePerStack * stacksToBuy;
  const resultBox = document.getElementById('spinaResult');
  resultBox.innerHTML = `<b>Total spina yang di butuhkan:</b> ${totalCost.toLocaleString()} spina`;
  resultBox.style.display = 'block';
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
  
  const btn = document.querySelector('.toggle-mode button');
  if (document.body.classList.contains('light-mode')) {
    btn.textContent = 'Dark Mode';
  } else {
    btn.textContent = 'Light Mode';
  }
}