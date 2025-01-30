import { useState } from 'react'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'

const Input = props => {
  const { label, type = 'text', name, errors, register } = props
  const [newType, setNewType] = useState(type)
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => {
    setShowPassword(!showPassword)
    setNewType(showPassword ? 'password' : 'text')
  }

  return (
    <label className={errors.name ? 'label-error' : ''}>
      <span className='label-content'>{label}</span>
      <div>
        {type === 'textarea' ? (
          <textarea
            name={name}
            placeholder={label}
            autoComplete={`new-${name}`}
            {...register(`${name}`)}
          ></textarea>
        ) : (
          <input
            type={newType}
            name={name}
            placeholder={label}
            autoComplete={`new-${name}`}
            {...register(`${name}`)}
          />
        )}
        {type === 'password' && (
          <Button id='viewPassword' className='visibility' handleClick={handleClick}>
            <Icon name={showPassword ? 'visibility_off' : 'visibility'} />
          </Button>
        )}
      </div>
      <span className='inputError' id={`error-${name}`}>
        {errors[name] && errors[name].message}
      </span>
    </label>
  )
}

export default Input
