import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { PokemonDetail } from '../../components/pokemon/PokemonDetail'
import { PokemonStatsChart } from '../../components/pokemon/PokemonStatsChart'
import { Layout } from '../../components/ui'
import { Pokemon } from '../../interfaces'
import { capitalize, getPokemonInfo, sanitize } from '../../utils'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={capitalize(pokemon.name)}>
      <section className='body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
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
  const pokemons = [...Array(800)].map((_, index) => `${index + 1}`)

  return {
    paths: pokemons.map((id) => ({
      params: { id }
    })),
    fallback: false
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
