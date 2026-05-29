window.addEventListener("DOMContentLoaded", function () {

  // Typing Effect
  const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Creative Coder",
    "UI Designer",
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  const typing = document.getElementById("typing");

  function type() {
    if (!typing) return;

    currentWord = words[i];

    if (isDeleting) {
      typing.textContent = currentWord.substring(0, j--);
    } else {
      typing.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();

  // Reveal on scroll
  function revealElements() {
    document.querySelectorAll(".reveal").forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < windowHeight - 100) {
        reveal.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements();

  // WhatsApp
  window.sendToWhatsApp = function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phoneInput = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let myPhone = "201119284562";

    let text =
`New Contact Message

Name: ${name}
Email: ${email}
Phone: ${phoneInput}

Message:
${message}

----------------------
Sent from Portfolio Website`;

    let url = "https://wa.me/" + myPhone + "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
  };

  // Email
 window.sendToGmail = function () {
  let name = document.getElementById("name")?.value.trim() || "";
  let email = document.getElementById("email")?.value.trim() || "";
  let phoneInput = document.getElementById("phone")?.value.trim() || "";
  let message = document.getElementById("message")?.value.trim() || "";

  let subject = "New Contact Message from Portfolio";

  let body =
`New Contact Message

Name: ${name}
Email: ${email}
Phone: ${phoneInput}

Message:
${message}

----------------------
Sent from Portfolio Website`;

  let gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=mohammedprograme@gmail.com" +
    "&su=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.open(gmailUrl, "_blank");
};
});
