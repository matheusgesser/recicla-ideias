import { Return } from '../../components'
import { useParams } from 'react-router-dom'
import data from '../../assets/data'
import './styles.scss'

export function Project() {
  const { id } = useParams()
  const post = data.find(post => post.id == id)
  return (
    <main className='project'>
      <Return />
      <section className="info">
        {post.suggestion && <i>Sugerido por: {post.suggestion}</i>}
        <h2 className="title">{post.title}</h2>
        <p className="description">{post.description}</p>
        <b className="difficulty">{post.difficulty}</b>
        <iframe src={`https://www.youtube.com/embed/${post.link}?modestbranding=1&rel=0&controls=2&iv_load_policy=3&showinfo=0&cc_load_policy=1`} />
      </section>
    </main>
  )
}

// TODO botão ver/esconder legendas