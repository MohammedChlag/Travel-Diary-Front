import { createContext } from 'react'

const FormContext = createContext({
  info: {},
  previews: [],
  errors: [],
  validate: () => undefined,
  handleChange: () => undefined,
})

export default FormContext
