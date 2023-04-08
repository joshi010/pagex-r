import React from "react";
import './contact-form.css';

export default function ContactForm(){

    return(
        <div className="contact-form-container degradado-chido">
            <form className="contact-form" name="contact" method="POST" data-netlify="true">
                <h2>Correo Electrónico</h2>
                <input type="email" placeholder="correo@ejemplo.com" required/>
                <h2>Asunto</h2>
                <select name="asunto" required>
                    <option value="pregunta">Preguntas</option>
                    <option value="cotizar">Cotización</option>
                    <option value="otro">Otro</option>
                </select>
                <h2>Mensaje</h2>
                <textarea name="mensaje" id="mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
)
}