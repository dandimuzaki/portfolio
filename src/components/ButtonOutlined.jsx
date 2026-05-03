import React from 'react'

const ButtonOutlined = ({text}) => {
  return (
    <button className='px-2 py-1 text-lg text-white font-bold w-fit rounded-lg border-3 border-[var(--accent)]'>
      {text}
    </button>
  )
}

export default ButtonOutlined
