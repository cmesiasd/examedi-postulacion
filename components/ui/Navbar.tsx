import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import Logo from './Logo'

export const Navbar: FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-10 h-10 text-yellow-500 '
          role='button'
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className='w-10 h-10 text-examedi '
          role='button'
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return (
    <header className='h-15 shadow-sm dark:border-gray-700'>
      <nav className='px-4 sm:px-6 py-4 flex justify-around items-center'>
        <Logo />
        {renderThemeChanger()}
      </nav>
    </header>
  )
}
