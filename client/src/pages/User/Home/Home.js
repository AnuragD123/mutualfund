import React from 'react'
import Slider from '../../../Components/User/Slider/Slider'
import FAQ from '../../../Components/User/FAQ/Faq'
import Feedback from '../../../Components/User/Feedback/Feedback'
import Checkout from '../../../Components/User/Subscribe button/checkout'
//import Subscription from '../Subscription/Subscription';
function Home() {
  return (
    <div mt-0>

      <Slider/>
      <FAQ/>
      <Feedback/>
      {/* <Subscription/> */}  
      <Checkout/> 
      
    </div>
  )
}

export default Home
