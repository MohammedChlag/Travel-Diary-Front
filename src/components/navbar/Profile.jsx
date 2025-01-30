import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/auth/theme/ThemeContext.js'
import useAuth from '../../hooks/useAuth.js'
import { filterItems } from '../../utils/helpers.js'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'
import Modal from '../Modal.jsx'
import NavList from './Navlist.jsx'
import profileList from '../../mocks/profile.json'

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { token } = useAuth()
  const { theme } = useContext(ThemeContext)

  const filteredList = filterItems(profileList, token, theme)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  return (
    <>
      <Button id='profile' handleClick={handleClick}>
        <Icon name='account_circle' />
      </Button>
      <Modal isVisible={isVisible} handleClick={handleClick}>
        <NavList className='profile' list={filteredList} />
      </Modal>
    </>
  )
}

export default Profile
