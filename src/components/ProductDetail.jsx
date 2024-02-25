import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../../context/ProductContext';
import { fetchSingleProduct } from '../../context/ProductAction';


const ProductDetail = ({product}) => {

    const {productItem, dispatch} = useContext(ProductContext)
    const {ID} = useParams();
    console.log(ID)

    // console.log(productItem)

    const getSingleProduct = async(id) => {

        const data = await fetchSingleProduct(id)
        dispatch({
            type: "PRODUCT_DETAIL",
            payload: data
        })
    }

    useEffect(() => {
        getSingleProduct();
    }, [])


    if (!productItem) {
      return <h1 className="display-5 text-center">
        No product
      </h1>  
    }
  return (
    <div className='product-detail'>
      <h1>{productItem.title}</h1>
      <img src="" alt="" />
      <h5>{productItem.price}</h5>
      <h6>{productItem.category}</h6>
      <p>{productItem.description}</p>
      {/* <p>product ID: {id}</p> */}
    </div>
  )
}

export default ProductDetail
