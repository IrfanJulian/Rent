import React, { useState } from 'react'
import style from './index.module.css'
import Card from '../../Components/Bases/Cards'
import car1 from '../../Assets/Images/aventador 2020.png'
import car2 from '../../Assets/Images/bmw m3 2019.png'
import car3 from '../../Assets/Images/bmw m4 2021.png'
import car4 from '../../Assets/Images/Chevrolet camarro 2018.png'
import car5 from '../../Assets/Images/Mustang GTR 2019.png'
import car6 from '../../Assets/Images/s-680.png'
import car7 from '../../Assets/Images/tesla S series 2021.png'
import car8 from '../../Assets/Images/tesla S series 2022.png'
import Biaya from '../../Components/Bases/Cost'
import Navbar from '../../Components/Modules/Navbar'

const Package = () => {

    const [cost, setCost] = useState(false);
    const [rentPrice, setRentPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [driver, setDriver] = useState(false);



    const data = [
        {
            id: 1,
            pic: car1,
            brand: 'Lamborghini Aventador 2018',
            transmition: "Automatic Transmition",
            price: 2500000
        },
        
        {
            id: 2,
            pic: car2,
            brand: 'BMW M3 2019',
            transmition: "Automatic Transmition",
            price: 2200000
        },
        {
            id: 3,
            pic: car3,
            brand: 'BMW M4 2021',
            transmition: "Automatic Transmition",
            price: 2800000
        },
        {
            id: 4,
            pic: car4,
            brand: 'Chevrolet Camaro 2018',
            transmition: "Automatic Transmition",
            price: 2000000
        },
        {
            id: 5,
            pic: car5,
            brand: 'Mustang GT 2019',
            transmition: "Automatic Transmition",
            price: 2600000
        },
        {
            id: 6,
            pic: car6,
            brand: 'Mercedes-Benz S-600',
            transmition: "Automatic Transmition",
            price: 2900000
        },
        {
            id: 7,
            pic: car7,
            brand: 'Tesla S Series 2021',
            transmition: "Automatic Transmition",
            price: 2700000
        },
        {
            id: 8,
            pic: car8,
            brand: 'Tesla X Series 2022',
            transmition: "Automatic Transmition",
            price: 2900000
        },
    ]

  return (
    <div className='background'>
        <Navbar />
        {cost === true ?
        <Biaya driver={()=>setDriver(true)} driver2={()=>setDriver(false)} resDriver={driver} onchange={(e)=>setAmount(e.target.value)} close={()=>setCost(false)} price={rentPrice} totalPrice={driver === false ? amount * rentPrice : amount * rentPrice + amount * 250000} onclickclose={()=>setCost(false)} />
        :
        null}
        <div className="kontainer">
            <div className={style.wrapper}>
                <p className={style.tittle} id='Light'>Selamat Datang di Rental Mobil <span className={style.irfan} id='Medium'> Fan's Garage</span></p>
                <p className={style.headline}>Berikut list kendaraan yang tersedia di kami:</p>
                <div className={style.wrappercard}>
                    {data ? data.map((car)=>
                        <Card key={car.id} image={car.pic} brand={car.brand} transmition={car.transmition} onClick={()=>{setCost(true); setRentPrice(car.price)}} />
                    )
                    :
                    null }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Package