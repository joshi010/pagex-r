import React from 'react';
import ContactForm from './contact-form';
import '../specialNav.css';
import './contacto.css';

export default function Contacto(){


    return(
        <div className='margins'>
            <div className='contact-center-container'>
                <div className='contact-center'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}