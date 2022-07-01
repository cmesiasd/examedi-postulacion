import { FC } from 'react'
import { Pokemon } from '../../interfaces'
import { PokemonDetailBody, PokemonDetailTitle, PokemonType } from './'

interface Props {
  pokemon: Pokemon
}

export const PokemonDetail: FC<Props> = ({ pokemon }) => {
  const { types } = pokemon
  return (
    <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 pl-8 ml-8 border-2 rounded-xl'>
      <PokemonDetailTitle pokemon={pokemon} />
      <PokemonDetailBody pokemon={pokemon} />
      <div className='flex justify-between'>
        <span className='title-font font-medium text-2xl text-examedi dark:text-white'>
          Tipo
        </span>
        <div>
          {types.map((type, id) => (
            <PokemonType key={id} type={type.type.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
