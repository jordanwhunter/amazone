// Dependencies
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';
import { useAuth } from '../../contexts/AuthContext';
import amazone from '../../images/logo/amazone-bw.png';


// Styles
import '../../styles/authentication/UpdateProfile.css'

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  
  const [error, setError] = useState('');

  const [loading, setLoading] = useStateIfMounted(false);

  const { currentUser, updateEmail, updatePassword } = useAuth();

  const history = useHistory();
  
  function handleSubmit(event) {
    event.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords must match')
    }

    const promises = []
    setLoading(true)
    setError('')
    
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
      history.push('/your-prime')
    }).catch(() => {
      setError('Unable to update')
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className='update-profile'>
      <Link to='/'>
        <img
          className='update-profile-logo'
          src={amazone}
          alt='Amazone Logo'
        />
      </Link>

      <div className='update-profile-container'>
        <h1>Update Profile</h1>
        {error && <h4 className='error-message'>{error}</h4>}
        <form>
          <h5>Email</h5>
          <input
            type='email'
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />

          <h5>Password</h5>
          <input
            type='password'
            ref={passwordRef}
            placeholder='Leave blank to keep the same'
          />

          <h5>Confirm Password</h5>
          <input
            type='password'
            ref={passwordConfirmRef} 
            placeholder='Leave blank to keep the same'
          />

          <button
            className='button-update-profile'
            disabled={loading}
            type='submit'
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
      <p className='redirect-to-your-prime'>
        <Link 
          to='/your-prime'
          className='redirect-your-prime'
        >
          Cancel
        </Link>
      </p>
    </div>
  )
};