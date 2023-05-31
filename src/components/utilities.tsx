export const fetchMilk = async () => {
  const response = await fetch('http://localhost:3002/api/milks')
  return response.json()
}

export const fetchMilkTypes = async () => {
  const response = await fetch('http://localhost:3002/api/milks/types')
  return response.json()
}

export const fetchMilkByType = async (type: string) => {
  const response = await fetch(`http://localhost:3002/api/milks/${type}`)
  return response.json()
}