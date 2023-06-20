//Get the button:
mybutton = document.getElementById("myBtn")

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"
  } else {
    mybutton.style.display = "none"
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Navbar
function openNav() {
  document.getElementById("myNav").style.height = "100%"
  console.log(document.getElementById("myNav"))
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%"
}

const carcounter = document.querySelector("#exper")
// const countertop = carcounter.getBoundingClientRect().top
// console.log(countertop)

const counters = document.querySelectorAll(".counter")

const setCounter = () => {
  counters.forEach((counter) => {
    counter.innerText = "0"

    const updatecounter = () => {
      const target = +counter.getAttribute("data-target")
      const c = +counter.innerText
      const increment = target / 250

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updatecounter, 200)
      } else {
        counter.innerText = target
      }
    }

    updatecounter()
  })
}

window.addEventListener("scroll", () => {
  const triggerNo = (window.innerHeight / 5) * 4
  if (carcounter.getBoundingClientRect().top < triggerNo) {
    setCounter()
  }
  console.log(carcounter.getBoundingClientRect().top, triggerNo)
})

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
