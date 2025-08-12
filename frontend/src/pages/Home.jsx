import React from 'react'
import Hero from '../components/Hero'
import { FeaturedDestination } from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testtimonial from '../components/Testimonial'
import StarRating from '../components/StarRating'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testtimonial />
      <Newsletter />
    </>
  )
}

export default Home