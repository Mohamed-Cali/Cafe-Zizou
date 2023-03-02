import Image from 'next/image'
import './globals.css'
import Script from 'next/script'
import { Sofia_Sans } from '@next/font/google'

const sofia_Sans = Sofia_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={sofia_Sans.className}>
          <nav className='navbar'>
           
              <a href='/' className='leftSide'>
                <Image src="/images/logo2.gif" alt='' className='image' width={25} height={25}/>
                <h1 className='name'>Café Zizou</h1>
              </a>
           
            <a className='toggle-button'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </a>
            <div className='navbar-links'>
              <ul className={sofia_Sans.className}>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/menu'>Menu</a>
                </li>
                <li>
                  <a href='/about'>About Us</a>
                </li>
                <li>
                  <a href='/contact'>Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        {children}
          <footer className={sofia_Sans.className}>
            <div className='footer-content'>
              <div className='top-footer'>
                <h1 className='name-footer'>Café Zizou</h1>
              </div>
              <div className='justEat'>
              
                <h1 className='availableOn'>Available on</h1>
                <a href='https://www.just-eat.co.uk/restaurants-cafezizou-twickenham/menu'>
                  <Image src="/images/justeat.png" alt='' className='justEatLogo' width={20} height={20}/>
                </a>
                <a href='https://deliveroo.co.uk/menu/london/hammersmith/cafe-zizou-twickenham?utm_medium=affiliate&utm_source=google_maps_link'>
                <Image src="/images/image9.png" alt='' className='justEatLogo' width={30} height={20}/>
                </a>
              </div>
              <h1 className='copyright'>copyright &copy;CafeZizou2023</h1>
            </div>
          </footer>
        
      </body>
      <Script >
        {`const toggleBtn = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];

        toggleBtn.addEventListener('click', () => {
          navbarLinks.classList.toggle('active');
        })`}
      </Script>
      
    </html>
  )
}
