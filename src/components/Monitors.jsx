import React from 'react'
import AllProductsCatd from '../layer/AllProductsCatd'
import Container from '../layer/Container'
import ProductsItem from '../layer/ProductsItem'

const CustomeBuilds = () => {
  return (
    <div>
       <Container>
        <div>
          <div></div>
        </div>
       <div className={"flex"}>
       <AllProductsCatd className={"allP4"} title={"Gaming Monitors"}/>
        <ProductsItem/>
        <ProductsItem/>
        <ProductsItem/>
        <ProductsItem/>
        <ProductsItem/>
       </div>

        </Container> 
    </div>
  )
}

export default CustomeBuilds