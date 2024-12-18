import React from 'react'
import Banner from '../components/Banner'
import NewProducts from '../components/NewProducts'
import CustomeBuilds from '../components/CustomeBuilds'
import Laptop from '../components/Laptop'
import Desktop from '../components/Desktop'
import Monitors from '../components/Monitors'
import LogoAndPost from '../components/LogoAndPost'

const Home = () => {
  return (
    <div>
        <Banner/>
        <NewProducts/>
        <CustomeBuilds/>
        <Laptop/>
        <Desktop/>
        <Monitors/>
        <LogoAndPost/>
    </div>
  )
}

export default Home