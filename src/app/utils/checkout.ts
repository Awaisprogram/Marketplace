import {loadStripe} from '@stripe/stripe-js'
export async function checkout({lineItems}:any){
  let stripepromise:any = null
  let getstripe =()=>{
    if(!stripepromise){
      stripepromise = loadStripe(process.env. NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY||'')
      
    } 
    return stripepromise
  }
  
  const stripe = await getstripe()
    await stripe.redirectToCheckout({
      mode:"payment",
      lineItems,
      success_url: `${window.location.origin}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${window.location.origin}/payment-cancelled`,
    })
  
}