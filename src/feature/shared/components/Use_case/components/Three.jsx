import React from 'react'
import Three_c from './pages/Three_c'

const Three = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
        <Three_c head="Online ordering" content="Give your customers the ability to search, filter, select, and order what they desire online - On your website, effortlessly. Customize the layout to suit your brand language." />
        
        <Three_c head="Multi-lingual" content="Language is never a barrier. Communicate with your customers in the language they prefer. Yelo can function in multiple languages as per your choices." />
        
        <Three_c head="Multiple Payment Gateways" content="Give your customers the freedom to pay through wallets and cards securely. Integrate with the multiple payment gateways, keep your customers satisfied." />
        
    </div>
  )
}

export default Three