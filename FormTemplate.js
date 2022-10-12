import "./FormTemplate.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_n3flru6",
        "template_vfdxpbx",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = '<p class="success">Message envoyé !</p>';

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML =
            "<p class='success'>Une erreur s'est produite, veuillez réessayer !</p>";
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <div class="select">
          <div class="div12">
            <i class="fa-solid fa-user"></i>
          </div>
          <input
            type="text"
            class="formulaire"
            name="name"
            placeholder="Nom / Prenom"
            required
          />
          <div class="div12">*</div>
        </div>
        <br />
        <div class="select">
          <div class="div12">@</div>
          <input
            type="email"
            class="formulaire"
            name="email"
            placeholder="E-mail"
            required
          />
          <div class="div12">*</div>
        </div>
        <br />
        <div class="select">
          <div class="div12">
            <i class="fa-solid fa-phone"></i>
          </div>
          <input
            class="formulaire"
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            required
          />
          <div class="div12">*</div>
        </div>
        <br />
        <div class="select">
          <textarea
            name="message"
            placeholder="Merci de détailler au maximum votre demande afin de facilité nos futurs échanges"
            required
          ></textarea>
          <div class="div12">*</div>
        </div>
        <hr class="break-form" />
        <input class="boutton" type="submit" value="Envoyer" placeholder />
        <div className="form-message"></div>
      </form>
    </div>
  );
};

export default FormTemplate;
