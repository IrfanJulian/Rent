import React from 'react'
import style from './index.module.css'

const Card = ({ brand, transmition, image, onClick }) => {
  return (
    <div>
        <div className={style.card}>
            <img src={image} alt="" className={style.image} />
            <div className={style.description}>
                <p className={style.tittle} id='SemiBold'>{brand}</p>
                <p id='Light' className={style.transmition}>{transmition}</p>
            </div>
            <button className={style.butt} id='SemiBold' onClick={onClick}>Hitung Biaya Sewa</button>
        </div>
    </div>
  )
}

export default Card