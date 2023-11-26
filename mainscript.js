var counterSecond = document.getElementById("second");
var submitButton = document.getElementById("submit-button");
var submitButtonText = document.getElementById("button-text");
var spinner = document.getElementById("fa-spin");
var modal = document.getElementsByClassName("modal");
var modalCloseButton = document.getElementById("modal-close-button");
var modalOpenButton = document.getElementById("modal-open-button");
var counterSecond = document.getElementById("second");
var backArrow = document.getElementById("back-arrow");
var tcno, gsm, ad, soyad, email, ibanName, birth, iban, confirmation;
var form = document.getElementById("mainForm");

let loadertime = 0;

document.addEventListener("DOMContentLoaded", init(), false);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    tcno.value == "" ||
    gsm.value == "" ||
    ad.value == "" ||
    soyad.value == "" ||
    email.value == "" ||
    ibanName.value == "" ||
    iban.value == "" ||
    birth.value == ""
  ) {
    alert("Lütfen gerekli alanları doldurunuz");
  } else if (
    contract1.checked == false ||
    contract2.checked == false ||
    contract3.checked == false
  ) {
    alert("Lütfen Sözleşmeleri kabul ediniz");
  } else {
    spinner.classList.add("isloading");
    submitButtonText.classList.add("submit-button-disable");
    setTimeout(() => {
      spinner.classList.remove("isloading");
      window.location.href = "http://localhost:5500/result.html";
    }, 3000);
  }
});

function init() {
  tcno = document.getElementById("tcNo");
  gsm = document.getElementById("gsm");
  ad = document.getElementById("ad");
  soyad = document.getElementById("soyad");
  email = document.getElementById("email");
  ibanName = document.getElementById("iban-ad");
  birth = document.getElementById("dogum");
  iban = document.getElementById("iban");
  confirmation = document.querySelectorAll(".confirmation");

  let elems = Array.from(
    document.querySelectorAll("#mainForm input, #mainForm checkbox")
  );
  elems.forEach((e) => e.addEventListener("input", handleChange, false));

  let cached = getForm();
  if (cached) {
    tcno.value = cached.tcno;
    gsm.value = cached.gsm;
    ad.value = cached.ad;
    soyad.value = cached.soyad;
    email.value = cached.email;
    ibanName.value = cached.ibanName;
    birth.value = cached.birth;
    iban.value = cached.iban;
    if (cached.confirmation) {
      confirmation.forEach((c) => {
        if (cached.confirmation.includes(c.value)) c.checked = true;
      });
    }
  }

  function handleChange(e) {
    let form = {};
    form.tcno = tcno.value;
    form.gsm = gsm.value;
    form.ad = ad.value;
    form.soyad = soyad.value;
    form.email = email.value;
    form.ibanName = ibanName.value;
    form.birth = birth.value;
    form.iban = iban.value.toUpperCase();
    // either empty array or some things
    form.confirmation = [];
    confirmation.forEach((c) => {
      if (c.checked) form.confirmation.push(c.value);
    });

    // now store

    saveForm(form);
  }

  function saveForm(form, event) {
    let f = JSON.stringify(form);
    window.localStorage.setItem("form", f);
  }

  function getForm() {
    let f = window.localStorage.getItem("form");
    if (f) return JSON.parse(f);
  }
}

// MODAL CLOSE //
function closeModal() {
  modal[0].style.display = "none";
}
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    modal[0].style.display = "none";
  }
};
// MODAL CLOSE //

// MODAL OPEN //
function openModal() {
  modal[0].style.display = "flex";
}
// MODAL OPEN //
