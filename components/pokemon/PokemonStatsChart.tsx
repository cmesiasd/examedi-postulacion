import { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Stat } from '../../interfaces'
import { capitalize } from '../../utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

interface Props {
  stats: Stat[]
  title: String
}

export const PokemonStatsChart: FC<Props> = ({ stats, title }) => {
  const stats_reduce = stats.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.stat.name]: cur.base_stat
    }),
    {}
  )

  const labels = Object.keys(stats_reduce)
  const data = Object.values(stats_reduce)

  const chart_data = {
    labels,
    datasets: [
      {
        label: 'Stats',
        data,
        backgroundColor: 'rgba(0, 140, 255, 0.2)',
        borderColor: 'rgba(0, 140, 255, 1)',
        borderWidth: 1
      }
    ]
  }
  return (
    <div className='flex flex-col w-1/2'>
      <span className='title-font text-center font-medium text-2xl text-examedi dark:text-examedi-dark'>
        Puntos de Habilidad de {capitalize(title)}
      </span>
      <Bar data={chart_data} />
    </div>
  )
}
