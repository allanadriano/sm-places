
interface AlertProps {
  message: string
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="alert alert--sucess position-absolute">
      <p>{message}</p>
    </div>
  )
}

export default Alert
