import React from 'react'
import c from './floors.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Apartments = () => {
  const block = Number(localStorage.getItem('block'))
  const floors = Number(localStorage.getItem('floor'))

  const Navigate = useNavigate()
  const aps = []
  
  if(block === 1){
    if(floors == 1){
      for(let i = 1; i <= 9; i++){
        aps.push(i)
      }
    }else if(floors == 2){
      for(let i = 10; i <= 19; i++){
        aps.push(i)
      }
    }else if(floors == 3){
      for(let i = 20; i <= 29; i++){
        aps.push(i)
      }
    }else if(floors == 4){
      for(let i = 30; i <= 39; i++){
        aps.push(i)
      }
    }else if(floors == 5){
      for(let i = 40; i <= 49; i++){
        aps.push(i)
      }
    }else if(floors == 6){
      for(let i = 50; i <= 59; i++){
        aps.push(i)
      }
    }else if(floors == 7){
      for(let i = 60; i <= 69; i++){
        aps.push(i)
      }
    }else if(floors == 8){
      for(let i = 70; i <= 79; i++){
        aps.push(i)
      }
    }else if(floors == 9){
      for(let i = 80; i <= 89; i++){
        aps.push(i)
      }
    }else if(floors == 10){
      for(let i = 90; i <= 99; i++){
        aps.push(i)
      }
    }else if(floors == 11){
      for(let i = 100; i <= 109; i++){
        aps.push(i)
      }
    }else if(floors == 12){
      for(let i = 110; i <= 119; i++){
        aps.push(i)
      }
    }else if(floors == 13){
      for(let i = 120; i <= 129; i++){
        aps.push(i)
      }
    }else if(floors == 14){
      for(let i = 130; i <= 139; i++){
        aps.push(i)
      }
    }else if(floors == 15){
      for(let i = 140; i <= 149; i++){
        aps.push(i)
      }
    }else if(floors == 16){
      for(let i = 150; i <= 159; i++){
        aps.push(i)
      }
    }
  }else if(block === 2){
    if(floors == 1){
      for(let i = 1; i <= 4; i++){
        aps.push(i)
      }
    }else if(floors == 2){
      for(let i = 5; i <= 9; i++){
        aps.push(i)
      }
    }else if(floors == 3){
      for(let i = 10; i <= 14; i++){
        aps.push(i)
      }
    }else if(floors == 4){
      for(let i = 15; i <= 19; i++){
        aps.push(i)
      }
    }else if(floors == 5){
      for(let i = 20; i <= 24; i++){
        aps.push(i)
      }
    }else if(floors == 6){
      for(let i = 25; i <= 29; i++){
        aps.push(i)
      }
    }else if(floors == 7){
      for(let i = 30; i <= 34; i++){
        aps.push(i)
      }
    }else if(floors == 8){
      for(let i = 35; i <= 39; i++){
        aps.push(i)
      }
    }else if(floors == 9){
      for(let i = 40; i <= 44; i++){
        aps.push(i)
      }
    }else if(floors == 10){
      for(let i = 45; i <= 49; i++){
        aps.push(i)
      }
    }else if(floors == 11){
      for(let i = 50; i <= 54; i++){
        aps.push(i)
      }
    }else if(floors == 12){
      for(let i = 55; i <= 59; i++){
        aps.push(i)
      }
    }else if(floors == 13){
      for(let i = 60; i <= 64; i++){
        aps.push(i)
      }
    }else if(floors == 14){
      for(let i = 65; i <= 69; i++){
        aps.push(i)
      }
    }else if(floors == 15){
      for(let i = 70; i <= 74; i++){
        aps.push(i)
      }
    }else if(floors == 16){
      for(let i = 75; i <= 79; i++){
        aps.push(i)
      }
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
                {block === 2 ? item+159 : item}
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