import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { PokemonDetail, PokemonStatsChart } from '../../components/pokemon/'
import { Layout } from '../../components/ui'
import { Pokemon } from '../../interfaces'
import { capitalize, getPokemonInfo } from '../../utils'
import { ArrowLeftIcon } from '@heroicons/react/outline'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <Layout title={capitalize(pokemon.name)}>
      <section className='body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <button
            onClick={handleClick}
            type='button'
            className='inline-flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
          >
            <ArrowLeftIcon className='h-5 w-5' />
            Volver atrás
          </button>

          <div className='lg:w-4/5 mx-auto flex flex-wrap justify-center'>
            <Image
              width={400}
              height={400}
              className='lg:w-1/2 w-full lg:h-auto h-64 object-center rounded pr-8'
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                pokemon.sprites.other?.home.front_default
              }
            />
            <PokemonDetail pokemon={pokemon} />
          </div>
          <div className='mt-8 lg:w-4/5 flex items-center justify-center'>
            <PokemonStatsChart title={pokemon.name} stats={pokemon.stats} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = [...Array(200)].map((_, index) => `${index + 1}`)

  return {
    paths: pokemons.map((id) => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string }
  const pokemon = await getPokemonInfo(id)

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonPage
