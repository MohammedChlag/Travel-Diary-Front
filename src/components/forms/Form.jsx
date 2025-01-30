const Form = ({ className, handleSubmit, children }) => {
  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form
