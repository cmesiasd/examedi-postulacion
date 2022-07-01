import React, { FC } from 'react'
import { capitalize, pokemonTypeIcons } from '../../utils'

interface Props {
  type: string
}

export const PokemonType: FC<Props> = ({ type }) => {
  return (
    <>
      <span
        className={`bg-${type} text-gray-50 ml-auto font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2`}
        //className='bg-water ml-auto text-gray-800 font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:text-gray-300'
      >
        <img width='32' src={pokemonTypeIcons[type]} />
        {capitalize(type)}
      </span>
    </>
  )
}
