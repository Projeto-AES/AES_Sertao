import Link from 'next/link';
import s from '../../../styles/container.module.scss'

function Empresas() {
  return (
    <div className={s.conteudo3}>
        <Link href={`/public/empresa/`}>
          <a className="btn btn-success btn-lg">Empresas</a>
        </Link>
      </div>
  );
}

export default Empresas;

