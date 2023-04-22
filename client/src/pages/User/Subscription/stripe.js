/* import Stripe from 'stripe';

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

export default stripe; */
import { useEffect, useState } from "react";
import Stripe from "stripe";

const useStripe =()=>{
  const [stripe,setStripe] = useState(null);
  useEffect(()=>{
    const newStripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
    setStripe(newStripe);
  },[]);
  return stripe;
}
export default useStripe;