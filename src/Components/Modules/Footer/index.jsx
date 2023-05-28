import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className={style.wrapper}>
        <button onClick={()=>navigate('/tentang-kami')} id='Light' className={style.button}>Cari tahu lebih banyak tentang kami</button>
    </div>
  )
}

export default Footer