'use client'
import { useState } from 'react'
import Link from 'next/link'

import { Menu } from 'antd'
// import { AiOutlineAppstore, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai'

import styles from './navbar.module.scss'

const items = [
  {
    label: <Link href='/'>Inicio</Link>,
    key: 'home'
  },
  {
    label: <Link href='/about-us'>Quiénes somos</Link>,
    key: 'about-us'
  },
  {
    label: 'Servicios',
    key: 'services',

    children: [
      {
        label: <Link href='/services/sissa-digital'>SISSA DIGITAL</Link>,
        key: 'services:sissa-digital'
      },
      {
        label: <Link href='/services/sissa-monitoring'>SISSA MONITORING</Link>,
        key: 'services:sissa-monitoring'
      },
      {
        label: <Link href='/services/sissa-infrastructure'>SISSA INFRASTRUCTURE</Link>,
        key: 'services:sissa-infrastructure'
      }
    ]
  },
  {
    label: <Link href='/contact'>Contacto</Link>,
    key: 'contact'
  },
  {
    label: <Link href='/blog'>Blog</Link>,
    key: 'blog'
  },
  {
    label: 'Productos',
    key: 'products',
    children: [
      {
        label: <Link href='/products/peaje'>Soluciones Peaje</Link>,
        key: 'products:toll'
      },
      {
        label: <Link href='/products/ixmaki'>Soluciones IXMAKI</Link>,
        key: 'products:ixmaki'
      },
      {
        label: <Link href='/products/vss'>Soluciones VSS</Link>,
        key: 'products:vss'
      }
    ]
  }
]

const index = () => {
  const [current, setCurrent] = useState('home')

  const onClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <div className={styles.container}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode='horizontal'
        items={items}
      />
    </div>
  )
}

export default index
