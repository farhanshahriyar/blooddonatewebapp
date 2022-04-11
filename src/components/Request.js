import React from 'react'


export default function Request() {
  return (
    <div>
        <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your name'
              required
            />

            <p>Select your Gender:</p>
            <select>
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
            </select>
                

            <p className='text-start'>Blood Group :</p>
            <select>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>O+</option>
                <option>B-</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
            </select>
            <input type='text' name='number' id='number'  placeholder='Enter your phone number' required/>
            <input type='text' name='area' id='area'  placeholder='Enter your area' required/>
            <button type='submit'>Request</button>
          </form>
        </div>
      </section>
    </div>
  )
}
