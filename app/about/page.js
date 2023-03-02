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
            Come try our delicious drinks! Our friendly staff is always ready to serve you and make your experience enjoyable. At Cafe Zizou, quality doesn't have to be expensive. Our affordable prices offer great value for our food and service. Don't just take our word for it - see our 4.4 Google rating. Come visit Cafe Zizou and experience it yourself!
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
