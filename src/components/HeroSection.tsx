import React from 'react'
import { Button } from './ui/button'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='bg-[#0C0C0C]'>

        <h1 className='text-white'>Track any Vessel, Anywhere!</h1>
        <p>Stay ahead of the waves!</p>
        <Button>Try For free</Button>
    </div>
  )
}

export default HeroSection