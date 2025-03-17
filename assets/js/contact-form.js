import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-msg").innerHTML = error;
    thisForm.querySelector(".error-msg").classList.add("d-block");
    thisForm.querySelector(".success-message").classList.remove("d-block");
}

function displaySuccess(thisForm, message) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".success-message").innerHTML = message;
    thisForm.querySelector(".success-message").classList.add("d-block");
    thisForm.querySelector(".error-msg").classList.remove("d-block");
}

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const thisForm = e.target;

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const subject = document.getElementById("subject").value

    thisForm.querySelector(".loading").classList.add("d-block");

    thisForm.querySelector(".error-msg").classList.remove("d-block");
    thisForm.querySelector(".success-message").classList.remove("d-block");

    if (name === "" || email === "" || message === "" || subject === "") {
        displayError(thisForm, "All fields are required.");
        thisForm.querySelector(".loading").classList.remove("d-block");
        return;
    }

    if (!email.includes("@")) {
        displayError(thisForm, "Please enter a valid email address.");
        thisForm.querySelector(".loading").classList.remove("d-block");
        return;
    }

    await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        subject
    })

    displaySuccess(thisForm, "Your message has been sent successfully!");

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
    document.getElementById("subject").value = ""

    setTimeout(() => {
        thisForm.querySelector(".error-msg").classList.remove("d-block");
        thisForm.querySelector(".success-message").classList.remove("d-block");
    }, 3000);
})