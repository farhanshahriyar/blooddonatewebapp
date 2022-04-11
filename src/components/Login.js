import React from 'react'

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input type='password' name='password' id='password'  placeholder='Your password' />
            <button type='submit'>Log In</button>
            <p>Dont have account? <a href='/signup'>click here</a></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
