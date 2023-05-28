import React from 'react'
import style from './index.module.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Modules/Navbar';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div id='Medium' className='background'>
      <Navbar />
        <div className="kontainer">
          <div className={style.wrapper}>
            <div className={style.content}>
              <p className={style.tittle} id='Light'>Rental Mobil <span className={style.irfan} id='Medium'>Julian Ibrahim Rent's</span></p>
              <p id='Light'>Anda mau jalan-jalan tapi belum siap kendaraan? Kami siap membantu Anda. Layanan rental mobil terpercaya. Kami menyediakan berbagai jenis mobil mulai dari jenis SUV, MPV, sampan jenis mobil sedan. Sewa mobil di kami bisa lepas kunci atau dengan driver.</p>
              <button onClick={()=>navigate('/daftar-paket')} id='Medium' className={style.butt}>Lihat lebih lengkap</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home