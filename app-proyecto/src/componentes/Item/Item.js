import React from 'react'


export const Item = ({product}) => {

console.log('aca llega el producto',product)

  return (
    <div>
        {product.title}
    </div>
  )
}

export default Item