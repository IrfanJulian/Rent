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
                <p id='SemiBold' className={style.tittle}>Tentang Irfan Rent Cars</p>
                <div className={style.wrapperabout}>
                    <p id='Light' className={style.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi obcaecati, tenetur culpa ratione, atque porro dolor eos praesentium possimus modi cumque! Enim alias eveniet, hic saepe dignissimos, fugit similique quod voluptates omnis dolores maxime veniam, quaerat sed labore deleniti. Sint ex praesentium minima velit, officia quos labore molestiae. Rerum in qui assumenda ipsum nam, molestias laborum, aliquid adipisci dolores magnam non doloribus aut distinctio odit rem dicta! Enim quis impedit odio neque aliquam perferendis, recusandae provident corporis fuga assumenda iusto? Adipisci neque iste fugiat molestiae quos architecto sequi fuga, nemo, quis ullam dolorem quod officiis. Similique voluptates vero voluptatum dolorum pariatur neque quibusdam porro ab, aliquid deserunt omnis laboriosam, aspernatur corrupti? Vero quibusdam, excepturi a nihil quaerat dolorem laboriosam molestiae adipisci et sequi sunt eum fugit ut, laborum necessitatibus recusandae quia praesentium placeat pariatur? Quibusdam dolores nam obcaecati nemo maxime enim, eligendi aliquid illo laborum magni quaerat ratione rem suscipit autem quam quis ad illum eum cum velit vitae explicabo totam accusantium atque. Alias quos odit possimus at minus quae exercitationem nisi autem, perspiciatis obcaecati temporibus! Officiis exercitationem corporis consequatur! Neque sequi, ipsam fugiat pariatur inventore a libero dolorem nesciunt maiores excepturi soluta, facere id, illo consequatur? Explicabo, nisi?</p>
                </div>
                <p id='SemiBold' className={style.tittle}>Apa pendapat mereka?</p>
                <div className={style.wrapperabout}>
                    <p id='Light' className={style.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi obcaecati, tenetur culpa ratione, atque porro dolor eos praesentium possimus modi cumque! Enim alias eveniet, hic saepe dignissimos, fugit similique quod voluptates omnis dolores maxime veniam, quaerat sed labore deleniti. Sint ex praesentium minima velit, officia quos labore molestiae. Rerum in qui assumenda ipsum nam, molestias laborum, aliquid adipisci dolores magnam non doloribus aut distinctio odit rem dicta! Enim quis impedit odio neque aliquam perferendis, recusandae provident corporis fuga assumenda iusto? Adipisci neque iste fugiat molestiae quos architecto sequi fuga, nemo, quis ullam dolorem quod officiis. Similique voluptates vero voluptatum dolorum pariatur neque quibusdam porro ab, aliquid deserunt omnis laboriosam, aspernatur corrupti? Vero quibusdam, excepturi a nihil quaerat dolorem laboriosam molestiae adipisci et sequi sunt eum fugit ut, laborum necessitatibus recusandae quia praesentium placeat pariatur? Quibusdam dolores nam obcaecati nemo maxime enim, eligendi aliquid illo laborum magni quaerat ratione rem suscipit autem quam quis ad illum eum cum velit vitae explicabo totam accusantium atque. Alias quos odit possimus at minus quae exercitationem nisi autem, perspiciatis obcaecati temporibus! Officiis exercitationem corporis consequatur! Neque sequi, ipsam fugiat pariatur inventore a libero dolorem nesciunt maiores excepturi soluta, facere id, illo consequatur? Explicabo, nisi?</p>
                </div>
                <p id='SemiBold' className={style.tittle}>Alamat kami</p>
                <div className={style.wrapperabout}>
                    <p id='Light' className={style.text2}>Jl. Sekepanjang 1 no.70 Cikutra Cibeunying Kidul Kota Bandung 40124</p>
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