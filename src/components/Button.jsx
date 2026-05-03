import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-primary px-3 py-2 text-lg text-white font-bold w-fit rounded-lg'>
      {text}
    </button>
  )
}

export default Button
