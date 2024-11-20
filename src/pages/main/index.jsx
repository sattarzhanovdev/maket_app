import React from 'react'
import c from './main.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const Navigate = useNavigate()

  return (
    <div className={c.main}>
      <div className={c.left}>
        <button onClick={() => {
          api.putValue(1011)
          Navigate('/blocks/')
        }}>
          Включить дом
        </button>
        <button onClick={() => api.putValue(1010)}>
          Выключить дом
        </button>
        <button onClick={() => api.putValue(1012)}>
          Включить демо режим
        </button>
      </div>
      <div className={c.right}>

      </div>
    </div>
  )
}

export default Main