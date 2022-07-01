import { pokeApi } from './'
import { PokemonListResponse, SmallPokemon } from '../../interfaces'
import { getId, getNextURL } from '../strings'
import { cleanData } from '../data'

export const getMorePokemons = async (url: string) => {
  try {
    const { data } = await pokeApi.get<PokemonListResponse>(getNextURL(url))
    const { results, next } = data

    const pokemons: SmallPokemon[] = results.map((pokemon) => ({
      ...pokemon,
      id: getId(pokemon.url),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getId(
        pokemon.url
      )}.svg`
    }))

    return {
      pokemons,
      next
    }
  } catch (error) {
    return null
  }
}
