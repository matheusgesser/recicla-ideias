import { Return } from '../../components'
import { useForm } from 'react-hook-form'
import { sendMail } from '../../utils/sendMail'
import './styles.scss'

export function Suggest() {
  const { register, handleSubmit, reset } = useForm()
  return (
    <main className='suggest'>
    <Return />
    <form onSubmit={handleSubmit(data => {
      sendMail(data)
      reset()
    })}>
      <label htmlFor="name">Seu nome</label>
      <input id="name" autoComplete='off' {...register("name")} />
      <label htmlFor="link">Link do vídeo</label>
      <input type="url" id="link" autoComplete='off' {...register("url")} />
      <input type="submit" />
    </form>
    </main>
  )
}