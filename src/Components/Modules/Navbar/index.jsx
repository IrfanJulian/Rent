import React, { useState } from 'react'
import style from './index.module.css'
import { useNavigate } from 'react-router-dom'
import menu from '../../../Assets/Images/menu icon.png'
import close from '../../../Assets/Images/close icon.png'
import car from '../../../Assets/Images/car.png'
import car2 from '../../../Assets/Images/car black.png'

const Navbar = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

  return (
    <div className={style.body}>
      <div className={style.head}>
        <div onClick={()=>navigate('/')} className={style.wraps}>
          <img src={car} className={style.carpic} alt="" />
          <p id='SemiBold' className={style.texttittle}>Fan's Garage</p>
        </div>
      </div>
        <button onClick={()=>show === false ? setShow(true) : setShow(false)} className={style.menu}>
        <img className={style.images} src={menu} alt='' /></button>
        {show === true ?
        <div className={show === true ? style.wrapper : style.wrapper2}>
            <div className={style.head2}>
              <div onClick={()=>navigate('/')} className={style.wraps}>
                <img src={car2} className={style.carpic2} alt="" />
                <p id='SemiBold' className={style.texttittle2}>Fan's Garage</p>
              </div>
            </div>
            <button onClick={()=>setShow(false)} className={style.close}>
              <img src={close} alt="" className={style.images} /> 
            </button>
            <hr style={{borderColor: "#000000", width: "90%"}} />
            <button  id='Medium' onClick={()=>navigate("/")} className={style.list}>Home</button>
            <button  id='Medium' onClick={()=>navigate("/daftar-paket")} className={style.list}>List Car</button>
            <button  id='Medium' onClick={()=>navigate("/tentang-kami")} className={style.list}>About us</button>
        </div>
        :
        null}
    </div>
  )
}

export default Navbar