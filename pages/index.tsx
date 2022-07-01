import { useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { PokemonCard } from '../components/pokemon/'
import { Layout } from '../components/ui'
import { SmallPokemon } from '../interfaces'
import { getId, getMorePokemons, getPokemons, session } from '../utils/'

interface Props {
  initialPokemons: SmallPokemon[]
  initialNext: string
}
const LIMIT_POKEMON = 12

const HomePage: NextPage<Props> = ({ initialPokemons, initialNext }) => {
  const [data, setData] = useState(initialPokemons)
  const [nextUrl, setNextUrl] = useState(initialNext)

  useEffect(() => {
    if (session.pokemons().length !== 0) {
      setData(session.pokemons())
      setNextUrl(sessionStorage.getItem('next'))
    }
  }, [])

  useEffect(() => {
    session.savePokemons(data)
    sessionStorage.setItem('next', nextUrl)
  }, [data, nextUrl])

  const fetchData = async () => {
    const { pokemons, next } = await getMorePokemons(nextUrl)
    setNextUrl(next)
    setData(data.concat(pokemons))
  }

  const handleClickMorePokemons = (event) => {
    event.preventDefault()
    fetchData()
  }

  const handleClickCollapse = (event) => {
    event.preventDefault()
    sessionStorage.clear()
    session.savePokemons(initialPokemons)
    setData(initialPokemons)
    setNextUrl(initialNext)
  }

  return (
    <Layout>
      <div className='pt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className='flex justify-center my-8'>
        <button
          onClick={handleClickMorePokemons}
          type='button'
          className='text-white bg-examedi hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-examedi-dark dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Cargar más Pokémons
        </button>
        <button
          onClick={handleClickCollapse}
          type='button'
          className='text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
        >
          Colapsar
        </button>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { results, next } = await getPokemons(LIMIT_POKEMON, 0)

  const pokemons: SmallPokemon[] = results.map((pokemon) => ({
    ...pokemon,
    id: getId(pokemon.url),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getId(
      pokemon.url
    )}.svg`
  }))

  return {
    props: {
      initialPokemons: pokemons,
      initialNext: next
    }
  }
}

export default HomePage
