import { pokeApi } from './'
import { PokemonListResponse } from '../../interfaces'

export const getPokemons = async (count: number, offset: number) => {
  try {
    const { data } = await pokeApi.get<PokemonListResponse>(
      `/pokemon?limit=${count}&offset=${offset}`
    )
    return data
  } catch (error) {
    return null
  }
}
