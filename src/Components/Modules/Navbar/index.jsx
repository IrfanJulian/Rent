import React, { useState } from 'react'
import style from './index.module.css'
import { useNavigate } from 'react-router-dom'
import menu from '../../../Assets/Images/menu icon.jpg'
import close from '../../../Assets/Images/close icon.jpg'

const Navbar = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

  return (
    <div id='Light' className={style.body}>
        <button onClick={()=>show === false ? setShow(true) : setShow(false)} className={style.menu}>
        <img className={style.images} src={menu} alt='' />  
        </button>
        {show === true ?
        <div className={show === true ? style.wrapper : style.wrapper2}>
            <button onClick={()=>setShow(false)} className={style.close}>
            <img className={style.images} src={close} alt='' />   
            </button>
            <p className={style.tittle} id='SemiBold'>Fan's Rents</p>
            <button onClick={()=>navigate("/")} className={style.list}>Home</button>
            <button onClick={()=>navigate("/daftar-paket")} className={style.list}>List Car</button>
            <button onClick={()=>navigate("/tentang-kami")} className={style.list}>About us</button>
        </div>
        :
        null}
    </div>
  )
}

export default Navbar