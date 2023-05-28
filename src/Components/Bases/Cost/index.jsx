import { Link } from 'react-router-dom'
import style from './index.module.css'

const Biaya = ({ close, price, totalPrice, onchange, driver, resDriver, onclickclose, driver2 }) => {

  return (
    <div className={style.wrapper}>
      <div className={style.back}></div>
      <div className={style.konten}>
        <div className={style.card}>
          <button onClick={close} className={style.close}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className={style.tittle} id='SemiBold'>Perhitungan Biaya</p>
          <div className="wrapper">
            <div className={style.flex} id='Medium'>
              <div className={style.jenis}>
                <p>Harga Sewa</p>
              </div>
              <div className={style.jenis2}>
                <p className={style.text1}>Rp. {price}</p>
              </div>
            </div>
            <div className={style.flex} id='Medium'>
              <div className={style.jenis}>
                <p>Jenis Mobil</p>
              </div>
              <div className={style.jenis2}>
                <p className={style.text1}>BMW M4 2021</p>
              </div>
            </div>
            <div className={style.flex} id='Medium'>
              <div className={style.jenis}>
                <p>Lama Sewa Mobil</p>
              </div>
              <div className={style.jenis2}>
                <input type="number" className={style.input} onChange={onchange} />
              </div>
            </div>
            <div className={style.flex} id='Medium'>
              <div className={style.jenis}>
                <p>Driver</p>
              </div>
              <div className={style.jenis3}>
                <div className={style.wrapperbutton}>
                  <div onClick={driver} className={resDriver === true ? style.button : style.button2}>
                    <p className={style.ceklist}>{resDriver === true ? "✔" : ""}</p>
                  </div>
                  <p>Ya</p>
                </div>
                <div className={style.wrapperbutton}>
                  <div onClick={driver2} className={resDriver === false ? style.button : style.button2}>
                    <p className={style.ceklist}>{resDriver === false ? "✔" : ""}</p>
                  </div>
                  <p>Tidak</p>
                </div>
              </div>
            </div>
            <div className={style.flex} id='Medium'>
              <div className={style.jenis}>
                <p>Jumlah Biaya</p>
              </div>
              <div className={style.jenis2}>
                <p className={style.text1}>Rp. {totalPrice}</p>
              </div>
            </div>
            <div className={style.wrapperkonfirmasi}>
              <button onClick={onclickclose} className={style.buttonkonfirmasi}>Pilih mobil lain</button>
              <Link to={'https://wa.me/qr/KIHAOQ4OUBBSN1'} className={style.buttonkonfirmasi}>
                <button className={style.buttons}>Sewa sekarang</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biaya