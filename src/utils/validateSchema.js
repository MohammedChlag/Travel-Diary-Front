const validateSchemaUtil = (schema, data) => {
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true,
  })
}

export default validateSchemaUtil

// abortEarly: false. Devuelve todos los errores encontrados en lugar de detenerse en el primero.
// allowUnknown: false. No permite campos adicionales en el objeto.
// stripUnknown: true. Elimina los campos adicionales del objeto.
