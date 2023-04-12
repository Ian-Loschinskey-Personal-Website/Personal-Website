if (window.location.href.indexOf("about.html") > -1) {
    window.addEventListener('load', function() {
      alert('Click "Reveal" to show hidden!');
    });
  }
// Welcoming message
if (window.location.href.indexOf("index.html") > -1) {
    window.addEventListener('load', function() {
        alert('My home page.')
});
}
//
//
const button = document.getElementById('button1-js'); // Fetches the ID from <button> in first section. 
const hiddenPar = document.getElementById('about1'); // Fetches the ID from <p> in first section.
const img1 = document.getElementById('sect1-img');  // Fetches the ID from <img> in first section.
const read1 = document.getElementById('about-read') // Fetches the ID from <h1> in first section.

// function for "Reveal"
button.addEventListener("click", () => { // when "Reveal" is click It'll show
    img1.style.display = "block"        // the id thats style for "display: none;"
    hiddenPar.style.display = "block"
    read1.style.display = "block"
    button.style.display = "none"

});
//
//
//
const button2 = document.getElementById('button2-js'); // Fetches the ID from <button> in first section. 
const hiddenPar2 = document.getElementById('about2'); // Fetches the ID from <p> in first section.
const img2 = document.getElementById('sect2-img');  // Fetches the ID from <img> in first section.
const read2 = document.getElementById('about-gaming') // Fetches the ID from <h1> in first section.

// function for "Reveal"
button2.addEventListener("click", () => { // when "Reveal" is click It'll show
    img2.style.display = "block"        // the id thats style for "display: none;"
    hiddenPar2.style.display = "block"
    read2.style.display = "block"
    button2.style.display = "none"

});
//
//
//
const button3 = document.getElementById('button3-js'); // Fetches the ID from <button> in first section. 
const hiddenPar3 = document.getElementById('about3'); // Fetches the ID from <p> in first section.
const img3 = document.getElementById('sect3-img');  // Fetches the ID from <img> in first section.
const read3 = document.getElementById('about-anime') // Fetches the ID from <h1> in first section.
const final = document.getElementById('about-h1-m2') // Fetches the ID on the last <p> in about.html

// function for "Reveal"
button3.addEventListener("click", () => { // when "Reveal" is click It'll show
    img3.style.display = "block"        // the id thats style for "display: none;"
    hiddenPar3.style.display = "block"
    read3.style.display = "block"
    final.style.display = "block"
    button3.style.display = "none"
});
// Here my "Hello world" tier Javascript function, loaded via an external file
// e.g., a console.log of a given string
function Hello() {
    console.log("Hello world!");
  }
  // Form of Subsmission
  const form = document.querySelector("#form")
  const submitButton = document.querySelector("#submit")
  const scriptURL = 'https://httpbin.org/post'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
         alert('Success!', response)
         submitButton.disabled = false
        })
      .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false

      }
      )
  })