/* FORM VALIDATION */
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;
    let msg = document.getElementById("msg");

    if (name === "" || email === "" || phone === "" || course === "") {
        msg.innerHTML = "Please fill all required fields";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "Enquiry submitted successfully!";
    msg.style.color = "green";
    return false;
}

/* MULTIPLE CONTINUOUS SLIDERS */
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".gallery-slider").forEach(slider => {
        const slides = slider.querySelectorAll(".slide");
        let current = 0;

        setInterval(() => {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }, 6000);
    });

    revealElements();
});

/* SCROLL REVEAL */
function revealElements() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
