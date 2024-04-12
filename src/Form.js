
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './Navbar';
import Footer from "./Footer";
import "./App.css"

const navigation = [
    { name: 'Home', href: '/home', current: false },
    { name: 'Clinics', href: '/clinic', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Reviews', href: './review', current: false },
    { name: 'My Appointments', href: '/form', current: true },
  ]

function Form() {
  const [state, handleSubmit] = useForm("xkndpppn");
  if (state.succeeded) {
      return <p>Thanks for Submitting!</p>;
  }
  return (
    <div>
        <Navbar />
        <div className='form'>
        
        <form onSubmit={handleSubmit} className='bg-l'>
            <h2>Appointment Form</h2>
      <div className='box'>
      <label htmlFor="email" className=' text-black'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='text-black '
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='box'>
      <label htmlFor="email" className=' text-black'>
        Concern
      </label>
      <textarea
        id="message"
        name="message"
        className='text-black '
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className='box'>
      <label htmlFor="date" className=' text-black'>
        Date of Appointment
      </label>
      <input type='date'
        id="message"
        name="message"
        className='text-black in ' 
        required
      />
      <ValidationError 
        prefix="dateofappointment" 
        field="dateofappointment"
        errors={state.errors}
      />
      </div>
      <div className='box'>
      <label htmlFor="text" className=' text-black'>
        Medical History
      </label>
      <textarea
        id="medicalhistory"
        name="medicalhistory"
        className='text-black '
        required
      />
      <ValidationError 
        prefix="medicalhistory" 
        field="medicalhistory"
        errors={state.errors}
      />
      </div>
      
      <button type="submit" disabled={state.submitting} className='text-white py-2 rounded-sm px-2' >
        Submit
      </button>
    </form>
    </div>
    <Footer />
    </div>
   
     
  );
}
export default Form;