import React from 'react'
import c from './floors.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'
import a_block from '../../images/а.svg'
import b_block from '../../images/б.svg'

const Floors = () => {
  const aps = []
  for(let i = 1; i <= 16; i++){
    aps.push(i)
  }

  const Navigate = useNavigate()

  const value = data => {
    api.putValue(data)
    localStorage.setItem('floor', data)
    Navigate('/apartments/')
  }
  const block = Number(localStorage.getItem('block'))
  return (
    <div className={c.floors}>
      <div className={c.left}>
        <h3>
          Выберите этаж
        </h3>
        <div>
          {
            aps.map(item => (
              <button onClick={() => value(item)}>
                {item}
              </button>
            ))
          }
        </div>
      </div>
      <div className={c.right}>
        
      </div>
    </div>
  )
}

export default Floors