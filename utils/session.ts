import { SmallPokemon } from '../interfaces/pokemon-list'
const savePokemons = (pokemons: object) => {
  sessionStorage.setItem('pokemons', JSON.stringify(pokemons))
}

const pokemons = (): SmallPokemon[] => {
  return JSON.parse(sessionStorage.getItem('pokemons') || '[]')
}

export default { savePokemons, pokemons }
