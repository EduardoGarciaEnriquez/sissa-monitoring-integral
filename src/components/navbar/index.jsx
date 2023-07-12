'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Menu, Drawer } from 'antd'
import { AiOutlineMenu } from 'react-icons/ai' // https://react-icons.github.io/react-icons/

import { useWindowSize } from '@utils/useWindowSize'
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { width } = useWindowSize()

  const onClick = (e) => {
    setCurrent(e.key)
  }

  const onToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  if (width <= 768) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.menuIcon}>
            <span onClick={onToggleDrawer}>
              <AiOutlineMenu />
            </span>
          </div>
          <div className={styles.headerLogo}>
            <Link href='/'>
              <Image
                src={'https://sissamx.com.mx/img/logos/header_logo.png'}
                alt='Header Logo'
                width={100}
                height={24}
              />
            </Link>
          </div>
        </div>
        <Drawer
          title='SISSA MONITORING LOGO'
          placement='left'
          onClose={onToggleDrawer}
          open={isDrawerOpen}
        >
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='inline'
            items={items}
          />
        </Drawer>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerLogo}>
        <Link href='/'>
          <Image
            src={'https://sissamx.com.mx/img/logos/header_logo.png'}
            alt='Header Logo'
            width={100}
            height={24}
          />
        </Link>
      </div>
      <div className={styles.menu}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
        />
      </div>
    </div>
  )
}

export default index
