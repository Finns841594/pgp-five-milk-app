import { Milk } from '../types'

export const fetchMilk = async () => {
  const response = await fetch('http://localhost:3002/api/milks')
  return response.json()
}