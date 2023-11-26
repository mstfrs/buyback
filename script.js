var counterSecond = document.getElementById("second")
var backArrow=document.getElementById("back-arrow")

// COUNTER ---------
var saniye=60;
const myInterval = setInterval(myTimer, 1000);
function myTimer() {
  saniye--;
  counterSecond.innerHTML = saniye;
  if (saniye==0) {
    clearInterval(myInterval)
    window.location.href = "http://localhost:5500/index.html"
  }
}
// COUNTER ------


// COPY FUNCTION ------
var copyButton=document.getElementById('copyicon')
let text = document.getElementById('reference-number-number').value;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      
    } catch (err) {
      alert('Failed to copy: ', err);
    }
  }
  copyButton.addEventListener('click',copyContent)
// COPY FUNCTION ------


function goBack(e) {
  window.location.href = "http://localhost:5500/index.html";
}




