import React from 'react'
import c from './blocks.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'
import b_block from '../../images/б.svg'
import a_block from '../../images/а.svg'

const Blocks = () => {
  const Navigate = useNavigate()
  const value = (data) => {
    api.putValue(1110+data)
    localStorage.setItem('block', data)
    Navigate('/floor/')
  }
  return (
    <div className={c.blocks}>
      <button onClick={() => value(1)}>
        <img src={a_block} alt="" />
      </button>
      <button onClick={() => value(2)}>
        <img src={b_block} alt="" />
      </button>
    </div>
  )
}

export default Blocks