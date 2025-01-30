export const getFromLocalStorage = key => {
  return localStorage.getItem(key)
}

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const filterItems = (list, token, theme) => {
  return list.filter(item => {
    if (!token && item.name === 'logout') return false
    if (!token && item.name === 'account_circle') return false
    if (!token && item.name === 'add') return false
    if (!token && item.name === 'group') return false
    if (token && item.name === 'login') return false
    if (token && item.name === 'how_to_reg') return false
    if (theme === 'light' && item.name === 'light_mode') return false
    if (theme === 'dark' && item.name === 'dark_mode') return false

    return true
  })
}
