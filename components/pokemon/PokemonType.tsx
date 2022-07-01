import { FC } from 'react'
import { capitalize, pokemonTypeIcons } from '../../utils'

interface Props {
  type: string
}

// https://tailwindcss.com/docs/content-configuration
// Tailwind no acepta construir clases dinamicamente :(
const PokemonTypesColors = {
  bug: 'bg-bug',
  dark: 'bg-dark',
  dragon: 'bg-dragon',
  electric: 'bg-electric',
  fairy: 'bg-fairy',
  fighting: 'bg-fighting',
  fire: 'bg-fire',
  flying: 'bg-flying',
  ghost: 'bg-ghost',
  grass: 'bg-grass',
  ground: 'bg-ground',
  ice: 'bg-ice',
  normal: 'bg-normal',
  poison: 'bg-poison',
  psychic: 'bg-psychic',
  rock: 'bg-rock',
  steel: 'bg-steel',
  water: 'bg-water'
}

export const PokemonType: FC<Props> = ({ type }) => {
  const switchColor = PokemonTypesColors[type]
  return (
    <>
      <span
        className={`${switchColor} text-gray-50 ml-auto font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2`}
      >
        <img width='32' src={pokemonTypeIcons[type]} />
        {capitalize(type)}
      </span>
    </>
  )
}
