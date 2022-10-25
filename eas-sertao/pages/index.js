import { Header } from '../src/components/Header/Header'
import { Footer } from '../src/components/Footer/Footer'
import CardMarket from '../src/components/CardMarket/CardMarket'
import s from '../styles/container.module.scss'
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <section>
      <header>
        <Header />
      </header>
      <section className={s.container}>
        <div>
          <CardMarket />
          <CardMarket />
          <CardMarket />
          <CardMarket />
          <CardMarket />
        </div>
        <div>
          <Button>Cadastrar</Button>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </section>
  )
}
