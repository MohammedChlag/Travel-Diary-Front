import { useState } from 'react'
import useAuth from '../../hooks/useAuth.js'
import menuList from '../../mocks/menu.json'
import { filterItems } from '../../utils/helpers.js'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'
import Modal from '../Modal.jsx'
import NavList from './Navlist.jsx'

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false)

  const { token } = useAuth()

  const filteredList = filterItems(menuList, token)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Button id='menu' handleClick={handleClick}>
        <Icon name='menu' />
      </Button>
      <Modal isVisible={isVisible} handleClick={handleClick}>
        <NavList className='menu' list={filteredList} />
      </Modal>
    </>
  )
}

export default Menu
