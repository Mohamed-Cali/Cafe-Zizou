
import './page.css'
import { Sofia_Sans } from '@next/font/google'

const sofia_Sans = Sofia_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <div className='home'>
      <div className="homePage">
        
        <div className='homePage_gradient'>
          <h1 className='welcome'>Welcome to Cafe Zizou Twickenham
          </h1>
          <a href='/menu'>
            <h1 className='menuBtn'> View our Menu</h1>
          </a>
          <a href='https://www.just-eat.co.uk/restaurants-cafezizou-twickenham/menu'>
            <h1 className='orderBtn'>Order on Just Eat</h1>
          </a>
        </div>
      </div>

      

    </div>
  )
}


