import { useState} from 'react'
import { Link } from 'react-scroll/modules'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem { 
  label: string
  page: string
}

const NAV_ITEMS: Array <NavItem> = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
]

const Navbar = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [ navbar, setNavbar ] = useState(false)

  return (
    <header className='w-full mx-auto px-4 shadow fixed top-0 z-50 sm:px-20 dark:border-stone-600'>

      <div className='justify-between md:items-center md:flex'>

        <div>
          <div className='flex items-center justify-between py-3'>

            <div className='md:py-5 md:block'>
              <h2 className='text-2xl font-bold'>Mia Kim Mihwa</h2>
            </div>
            
            <div className='md:hidden'>
              {/* <button>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu />}
              </button> */}
              
              <button
                aria-label='Toggle Menu'
                type='button'
                className='w-10 h-10 p-3 rounded dark:bg-stone-600'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>
            
          </div>
        </div>
        
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 pt-8 md:block md:pb-0 md:mt-0' ${
              navbar? "block" : "hidden"
            }`}>
            <div className='items-center justify-center space-y-8 md:space-y-0 md:flex md:space-x-6'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    activeClass='active'
                    to={item.page}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                    className='block lg:inline-block text-neutral-1000 hover:text-neutral-500 dark:text-neutral-100'
                  >
                    {item.label}
                  </Link>
                )
              })}

              {currentTheme === 'dark' ? (
                <button 
                  onClick={() => setTheme('light')}
                  className='bg-slate-100 p-2 rounded-xl'
                > 
                  <RiSunLine size={25} color='black' />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className='bg-slate-100 p-2 rounded-xl'
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>

          </div>
        </div>
        
      </div>

    </header>
  )
}

export default Navbar