import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import './styles.scss'

export function Return() {
  return (
    <header>
      <Link to={'/'}><BsArrowLeft /> Voltar</Link>
    </header>
  )
}