import { FC } from 'react'
import { Pokemon } from '../../interfaces'
import { capitalize } from '../../utils'

interface Props {
  pokemon: Pokemon
}
export const PokemonDetailTitle: FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <h2 className='text-sm title-font text-gray-500 tracking-widest'>
        N°{pokemon.id}
      </h2>
      <h1 className='text-examedi dark:text-examedi-dark text-3xl title-font font-medium mb-4 border-examedi dark:border-examedi-dark'>
        {capitalize(pokemon.name)}
      </h1>
    </div>
  )
}
