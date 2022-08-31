import React from 'react';
import Image from 'next/image';
import errorIcon from '../../public/errorIcons.svg'

const TextError = (props) => {
    console.log(props)
  return (
    <div className='text-light errormsg'>
        <Image
      src={errorIcon}
      alt="erron-icon"
      width="25px"
      height="15px"
    />
         <span className='errmessage px-2'>{props.errMessage}</span>
    </div>
  )
}

export default TextError