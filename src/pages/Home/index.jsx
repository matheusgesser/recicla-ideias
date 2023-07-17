import './styles.scss'

import { Header, Post } from '../../components'
import data from '../../assets/data'

export function Home() {
  return (
    <>
      <Header />
      <main className='home'>
        {data.map(post => <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          date={post.date}
          difficulty={post.difficulty}
          suggestion={post.suggestion}
        />)}
      </main>
    </>
  )
}