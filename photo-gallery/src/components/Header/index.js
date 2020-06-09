import React from 'react'

import style from  './style.module.css'

const Header = () => {
  return (
    <div className='p-6 mb-4 shadow-lg'>
      <h1 className={style.title}>Images Gallery</h1>
    </div>
  )
}

export default Header