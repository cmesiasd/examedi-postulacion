import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SmallPokemon } from '../../interfaces'
import { capitalize } from '../../utils'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, img, name } = pokemon

  const router = useRouter()

  const handleClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <div className='pb-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex justify-center justify-items-center items-center'>
        <Image
          className=''
          src={img}
          alt={`Foto de ${name}`}
          width={150}
          height={150}
        />
      </div>
      <div className='flex my-2 space-x-3 justify-evenly items-center'>
        <h5 className='text-2xl font-bold tracking-tight text-examedi dark:text-white'>
          {capitalize(name)}
        </h5>
        <p> N° {id} </p>
      </div>
      <div className='flex justify-center'>
        <button
          type='button'
          onClick={handleClick}
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-examedi rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-examedi-dark dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Ver detalles
        </button>
      </div>
    </div>
  )
}
