import React from 'react'

const AgeResult = ({age}) => {

  console.log("age obj" , age);

  return (
    <h2 className='mt-10 underline text-2xl font-bold dark:text-white'>
      You are {age.age} years, {age.months % 12} months or {age.days} days old
    </h2>
  )
}

export default AgeResult
