const apiPath = import.meta.env.VITE_BACKEND_HOST

export const getOwnUserService = async token => {
  const response = fetch(`${apiPath}/users/own`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const { message, data } = await response.json()

  if (!response.ok) throw new Error(message || 'Error al obtener el usuario')

  return data
}

export const registerUserService = async value => {
  const response = await fetch(`${apiPath}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  })

  const { message } = await response.json()

  if (!response.ok) {
    throw new Error(message)
  }

  return message
}
