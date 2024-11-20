import axios from "axios"

const base_url = 'https://el-nasi-default-rtdb.asia-southeast1.firebasedatabase.app'

export const api = {
  putValue: (data) => axios.put(`${base_url}/value2/value.json`, data)
}