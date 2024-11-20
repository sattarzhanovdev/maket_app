import React from 'react'
import { Images } from '../../images'
import c from './ap.module.scss'

const Apartment = () => {
  const block = Number(localStorage.getItem('block'))
  const floor = Number(localStorage.getItem('floor'))
  const apartment = Number(localStorage.getItem('apartment'))
  return (
    <div className={c.apartment}>
      {
        block === 1 && apartment === 1 ?
        <img src={Images.a1} /> :
        block === 1 && apartment === 2 ?
        <img src={Images.a2} /> :
        block === 1 && apartment === 3 ?
        <img src={Images.a3} /> :
        block === 1 && apartment === 4 ?
        <img src={Images.a4} />:
        block === 1 && apartment === 5 ?
        <img src={Images.a5} /> :
        block === 1 && apartment === 6 ?
        <img src={Images.a6} /> :
        block === 1 && apartment === 7 ?
        <img src={Images.a7} /> :
        block === 1 && apartment === 8 ?
        <img src={Images.a8} /> :
        block === 1 && apartment === 9 ?
        <img src={Images.a9} /> :
        block === 2 && apartment === 1 ?
        <img src={Images.b1} /> :
        block === 2 && apartment === 2 ?
        <img src={Images.b2} /> :
        block === 2 && apartment === 3 ?
        <img src={Images.b3} /> :
        block === 2 && apartment === 4 ?
        <img src={Images.b4} /> : null
      }
    </div>
  )
}

export default Apartment