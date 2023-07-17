import { useNavigate } from "react-router-dom";
import { RiFolderAddFill } from 'react-icons/ri'
import './styles.scss'

export function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <h1>ReciclaIdeias 🌿</h1>
      <button onClick={() => navigate('/suggest')}><RiFolderAddFill /> Sugerir projeto</button>
    </header>
  )
}