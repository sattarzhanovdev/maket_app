import React from 'react'
import c from './floors.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Apartments = () => {
  const block = Number(localStorage.getItem('block'))
  const floors = Number(localStorage.getItem('floors'))

  const Navigate = useNavigate()
  const aps = []
  
  if(block === 1){
    for(let i = 1; i <= 9; i++){
      aps.push(i)
    }
  }else if(block === 2){
    for(let i = 1; i <= 4; i++){
      aps.push(i)
    }
  }

  const value = data => {
    api.putValue(data)
    localStorage.setItem('apartment', data)
    Navigate('/apartment/')
  }
  return (
    <div className={c.floors}>
      <div className={c.left}>
        <h3>
          Выберите квартиру
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

export default Apartments