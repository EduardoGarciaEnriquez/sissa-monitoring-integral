import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai' // https://react-icons.github.io/react-icons/

import styles from './footer.module.scss'

function index() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <section className={styles.sectionA}>
        <div>
          <a
            href='https://www.youtube.com/channel/UC6NAyWKACq8AwWuYA1B94yg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillYoutube />
          </a>
          <a
            href='https://www.linkedin.com/company/sissa-monitoring-integral-sa-de-cv/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin />
          </a>
          <span className={styles.icon}>@sissamx</span>
        </div>
        <div>
          <Image
            src={'https://sissamx.com.mx/img/footer/partners.png'}
            alt='Header Logo'
            width={400}
            height={48}
          />
        </div>
      </section>
      <div className={styles.divider} />
      <section className={styles.sectionB}>
        <div>
          <span>SISSA &#169;{currentYear} Todos los derechos reservados</span>
        </div>
        <div>
          <p>
            <Link href='/AvisoPrivacidad'>Aviso legal y política de privacidad</Link>
          </p>
          <p>
            <a href='https://sissamx.com.mx/Nota/349/politicas-y-codigo-de-etica'>Política de Seguridad y Salud</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default index
