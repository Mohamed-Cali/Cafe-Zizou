import { Catamaran } from "@next/font/google"
import './page.css'



const catamaran = Catamaran({
  subsets: ['latin'],
  display: 'swap',
})

export default function page() {
  return (
    <div className='container'>
        <h1>About Us</h1>
       
      
        
          

        <div className='images'>
          <div className='about-section'>
            <p className={catamaran.className}>Welcome to Cafe Zizou! We are thrilled to offer you a cozy spot to relax and enjoy some delicious food in Twickenham. Our menu is sure to impress French and Mediterranean cuisine lovers, and we are excited for you to try our tasty scrambled eggs and good sandwiches.
            </p>
          </div>
          <div className='imageContainer'>
            <img src="/images/image1.jpeg" alt="" />
          </div>
          <div className='imageContainer'>
            <img src="/images/image6.jpeg" alt="" />
          </div>
          <div className='about-section'>
            <p className={catamaran.className}>
              We take pride in our beverages as well, so be sure to start your meal with a delicious espresso, tea, or smoothie. Our friendly staff is always ready to provide you with great service and make your experience with us enjoyable.

              At Cafe Zizou, we believe that quality doesn't have to come with a high price tag. That's why our prices are affordable and offer great value for the quality of our food and service.

              Don't just take our word for it - our 4.4 rating on Google speaks for itself! We invite you to come and experience Cafe Zizou for yourself.
          </p>
        </div>
          <div className='imageContainer'>
            <img src="/images/image4.jpeg" alt="" />
          </div>
          
          <div className='imageContainer'>
            <img src="/images/image5.jpeg" alt="" />
          </div>
         
        
        
      </div>
    </div> 
  )
}
