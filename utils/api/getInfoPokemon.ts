import { pokeApi } from './'
import { Pokemon } from '../../interfaces'

export const getPokemonInfo = async (id: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    return data
  } catch (error) {
    return null
  }
}
