import './styles.scss'

import { Return } from '../../components'

export function Error() {
  return (
    <main className='error'>
      <Return />
      <p>Página não encontrada!</p>
    </main>
  )
}