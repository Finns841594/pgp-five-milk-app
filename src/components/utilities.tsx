import { MilkResponse } from "../types"

const backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3002'

export const fetchMilk = async () => {
  const response = await fetch(backendHost + '/api/milks')
  return response.json()
}

export const fetchMilkByPage = async (page: number) => {
  const response = await fetch(backendHost + '/api/milks?page='+page)
  return response.json()
}

export const fetchMilkTypes = async () => {
  const response = await fetch(backendHost + '/api/milks/types')
  return response.json()
}

export const fetchMilkByType = async (type: string) => {
  const response = await fetch(backendHost + `/api/milks/types/${type}`)
  return response.json()
}

export const fetchMilkBySearch = async (search: string) => {
  const response = await fetch(backendHost + `/api/milks/search?q=${search}`)
  return response.json()
}

export const fetchMilkByTypeAndPage = async (type: string, page = 1) => {
  const response = await fetch(backendHost + `/api/milks/types/${type}?page=${page}`)
  return response.json()
}

export const findMilkById = (data: MilkResponse, id: string) => {
  return data.results.find((milk) => milk.id === id)
}