import React from 'react'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'

const Search = () => {
  return (
    <form>
      <input type='search' />
      <Button id='glassButton'>
        <Icon name='search' />
      </Button>
    </form>
  )
}

export default Search
