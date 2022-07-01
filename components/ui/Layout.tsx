import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from './'

interface Props {
  title?: String
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`Examedi Pokédex ${title ? ' - ' + title : ''}`}</title>
        <meta name='author' content='Cristobal Mesias Duran' />
        <meta name='description' content={`Información de Pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      <div className='min-h-screen mx-auto flex flex-col'>
        <Navbar />
        <main className='flex-grow container mx-auto px-4 sm:px-6'>
          {children}
        </main>
      </div>
    </>
  )
}
