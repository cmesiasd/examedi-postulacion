import { GetStaticProps, NextPage } from 'next'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { Layout } from '../components/ui'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { pokeApi } from '../utils/'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => (
  <Layout>
    <div className='pt-8 grid grid-cols-4 gap-4'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
    <div className='flex justify-center my-8'>
      <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-examedi rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-examedi-dark dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Cargar más Pokemon
      </button>
    </div>
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    '/pokemon?limit=12&offset=0'
  )
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
