import React from 'react'

const AgeResult = ({age}) => {

  console.log("age obj" , age);

  return (
    <h2>
      You are {age.age} years, {age.months} months, and {age.days} days old
    </h2>
  )
}

export default AgeResult
