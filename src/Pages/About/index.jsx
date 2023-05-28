import React from 'react'
import style from './index.module.css'
import Navbar from '../../Components/Modules/Navbar'
import maps from '../../Assets/Images/maps.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div  id='Medium' className='background'>
        <Navbar />
        <div className="kontainer">
            <div className={style.wrapper}>
                <p id='SemiBold' className={style.tittle}>Tentang Fan's Garage</p>
                <div className={style.wrapperabout}>
                    <p id='Light' className={style.text}>Rental mobil Bandung merupakan bagian dari berbagai bidang usaha transportasi dari Fan's Garage . Lokasi berada di kawasan yang mudah dijangkau yaitu di Bekamin, DJl. Sekepanjang 1 Cikutra Cibeunying Kidul Kota Bandung 40124, Jawa Barat. Saat ini perusahaan kami telah memiliki 10 kantor cabang rental atau sewa mobil di 10 kota besar di Indonesia.

                    Kami menyediakan berbagai pilihan mobil dengan berbagai kapasitas penumpang. Armada mobil yang kami gunakan adalah mobil keluaran terbaru. Saat ini kami telah memiliki lebih dari 200 unit armada. Dengan berbagai jenis mobil yang kami miliki, kami memastikan jika anda akan mendapatkan mobil yang sesuai dengan kebutuhan perjalanan anda.

                    Bagi anda warga masyarakat kota Bandung dan sekitarnya atau siapapun anda yang sedang membutuhkan armada mobil dengan segera di wilayah Bandung, kamilah penyedia jasa sewa mobil Bandung terdekat. Untuk pemesanan mobil kami, anda bisa melakukannya secara online maupun offline. Semua bisa dilakukan dengan mudah. Anda bisa memesan armada mobil kami melalui website kami atau bisa langsung mendatangi kantor kami.

                    Perusahaan kami memiliki pengalaman bertahun-tahun atau sejak tahun 2001 dalam bidang usaha transportasi. Dengan dukungan berbagai jenis armada mobil serta karyawan dan kru yang professional, ramah dan menyenangkan, tidak mengherankan jika kami mendapatkan kepercayaan yang tinggi dari para pengguna armada kami di kota Bandung
                    </p>
                </div>
                <p id='SemiBold' className={style.tittle}>Keunggulan Fan's Garage</p>
                <div className={style.wrapperabout}>
                    <p id='Light' className={style.text}>Produk dan layanan kami hadir dengan berbagai keunggulan. Berikut adalah keunggulan kami sebagai penyedia jasa rental mobil Bandung:

                    1. Kami memiliki pengalaman bertahun-tahun dalam mengelola bidang usaha transportasi. Kami juga didukung oleh karyawan dan kru yang ramah, menyenangkan dan sangat professional.
                    2. Untuk kenyamanan dan keamanan berkendara, kami selalu berusaha untuk meng-upgrade unit armada kami dengan kendaraan keluaran terbaru.
                    3. Kami memiliki kendaraan dalam kondisi terbaik. Semua unit mobil kami juga telah dilengkapi dengan asuransi all-risk untuk melindungi kendaraan dan juga para penumpang.
                    4. Untuk pemesanan armada mobil yang mudah, cepat dan simple, kami menggunakan system booking online.
                    5. Dengan layanan yang professional serta tarif sewa mobil Bandung murah menjadikan kami memiliki pengguna yang setia.
                    6. Kami melayani berbagai jangka waktu sewa kendaraan. Rental mobil bandung murah 24 jam kami akan menjadi pilihan terbaik bagi anda. Berikut adalah jenis dan tarif harga sewa mobil Bandung lengkap kami.</p>
                </div>
                <p id='SemiBold' className={style.tittle}>Alamat kami</p>
                <div className={style.wrapperabout}>
                    <p id='Light' className={style.text2}>Jl. Sekepanjang 1 Cikutra Cibeunying Kidul Kota Bandung 40124</p>
                </div>
                <div className={style.wrapperabout2}>
                    <p id='Light' className={style.text3}>Cek via google maps</p>
                    <Link className={style.wrappermap} to={"https://www.google.com/maps/place/Jl.+Puri+Nirwana+3,+Karadenan,+Kec.+Cibinong,+Kabupaten+Bogor,+Jawa+Barat+16913/@-6.5118142,106.8096472,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c3d05999a579:0xbec9480875f44584!8m2!3d-6.5118142!4d106.8096472!16s%2Fg%2F11b6ym0ny4?entry=ttu"}>
                        <img src={maps} alt="" className={style.map} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About