import React, { FC } from 'react'
import { Pokemon } from '../../interfaces'
import { capitalize, sanitize } from '../../utils'

interface Props {
  pokemon: Pokemon
}
export const PokemonDetailBody: FC<Props> = ({ pokemon }) => {
  const { abilities } = pokemon
  return (
    <div>
      <div className='flex border-t border-examedi dark:text-white py-2'>
        <span className='font-bold'>Peso</span>
        <span className='ml-auto '>{pokemon.weight / 10} Kg</span>
      </div>
      <div className='flex border-t border-gray-200 dark:text-white py-2'>
        <span className='font-bold'>Altura</span>
        <span className='ml-auto'>{pokemon.height / 10} m</span>
      </div>
      <div className='flex border-t border-b mb-6 border-gray-200 dark:text-white py-2'>
        <span className='font-bold'>Habilidades</span>
        <span className='ml-auto'>
          <ul>
            {abilities.map((ability, id) => (
              <li key={id}>{capitalize(sanitize(ability.ability.name))}</li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  )
}
