'use client'

import './page.css'
import { Catamaran } from '@next/font/google'
import {motion} from 'framer-motion'
import Link from 'next/link'

const catamaran = Catamaran({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <div className={catamaran.className}>
      <div className="homePage">
        
        <div className='homePage_gradient'>
          <h1 className='welcome'>Welcome to Cafe Zizou
          </h1>
        </div>
      </div>

      <section className='subpage-wrapper'>
      <div className='subpage-img-container'>
        <motion.div 
        initial={{width: "100%"}}
        whileInView={{width: 0}}
        transition={{duration: 1, delay: 0.3}}
        viewport={{once: true}}
        className='subpage-overlay'></motion.div>
        <img src="/images/image10.jpeg" alt="" className='subpage-img' />
      </div>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.3}}
        viewport={{once: true}}
      className='subpage-content-container'>
        <h2 className='subpage-title'>Fine <br />Dining</h2>
        <p className='subpage-content-paragraph'>Indulge your senses in the best cuisine the world has to offer.</p>
        <a className='menuLink' href='/menu'>
            <h1 className='menuBtn'> View our Menu</h1>
          </a>
      </motion.div>
    </section>

    <section className='subpage-wrapper-2'>
        <div className='subpage-img-container-2'>
            <motion.img 
            initial={{height: 0}}
            whileInView={{height: "100%"}}
            transition={{duration: 1.3, delay: 0.3}}
            viewport={{once: true}}
            src="/images/image11.jpeg" alt="" className='subpage-img' />
        </div>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.3}}
        viewport={{once: true}}
        className='subpage-content-container-2'>
            <h1 className='subpage-title'>Serving with <br /> Passion</h1>
            <p className='subpage-content-paragraph'>Our mission is to take your dining experience to the next level. Our passionate team and diverse menu ensure that every visit to our cafe is a memorable one, filled with flavors that will leave you wanting more.</p>
            <a className='menuLink' href='/about'>
            <h1 className='menuBtn'> Learn more about us</h1>
          </a>
        </motion.div>
    </section>

    </div>
  )
}


