// Active nav highlighting on scroll
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-list li");

window.onscroll = () => {
  let top = window.scrollY;
  sections.forEach((sec, index) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
};

// ========== Skills Progress Animation ==========
const skillCircles = document.querySelectorAll(".skill-circle");

function animateSkills() {
  skillCircles.forEach(circle => {
    const progress = circle.querySelector(".progress");
    const percentSpan = circle.querySelector(".percent");
    const target = +circle.getAttribute("data-percent");

    let current = 0;
    let interval = setInterval(() => {
      if (current <= target) {
        percentSpan.textContent = current + "%";
        progress.style.background = `conic-gradient(var(--main-color) ${current * 3.6}deg, #222 ${current * 3.6}deg)`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  });
}

// Trigger only when skills section is in view
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      obs.disconnect();
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector("#skills"));

// ========== Contact Form ==========
function emailSend() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  Email.send({
    SecureToken: "YOUR_SMTPJS_TOKEN",
    To: 'aritrikadhara@gmail.com',
    From: email,
    Subject: `${name} sent you a message`,
    Body: message
  }).then(msg => alert("Message Sent Successfully!"));
}
