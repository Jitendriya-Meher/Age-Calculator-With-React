import React, { useState } from 'react'

const Form = ({calculateAge}) => {

  const [dob, setDob] = useState("");

  const handleChange= (e) => {
    e.preventDefault();
    setDob(e.target.value);
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    calculateAge(dob);
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input type="date" onChange={handleChange} />
      <button disabled={!dob} type='submit'>
        Calculate Age
      </button>
    </form>
  )
}

export default Form
