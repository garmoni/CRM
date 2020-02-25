import React from 'react'


const Input = props => {
  const inputType = props.type || 'text'
  const placeholder = props.placeholder


  return (

       <input
        type={inputType}
        placeholder={placeholder}
        value={props.value}
        onChange={props.onChange}
      />

  )
}

export default Input