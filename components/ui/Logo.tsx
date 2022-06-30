import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo: FC = () => {
  return (
    <Link href={'/'}>
      <a className='my-2 flex items-center space-x-1 text-examedi dark:text-examedi-dark'>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          width={80}
          height={80}
        />
        <span className='font-bold text-3xl font-sans tracking-tight whitespace-nowrap'>
          Examedi Pokedex
        </span>
      </a>
    </Link>
  )
}

export default Logo
