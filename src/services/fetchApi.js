const apìPath = import.meta.env.VITE_BACKEND_HOST

export const getOwnUserService = async token => {
  const response = fetch(`${apìPath}/users/own`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const { message, data } = await response.json()

  if (!response.ok) throw new Error(message || 'Error al obtener el usuario')

  return data
}
