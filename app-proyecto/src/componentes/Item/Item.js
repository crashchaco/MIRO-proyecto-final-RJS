import React from 'react'


export const Item = ({product}) => {

console.log('aca llega el producto',product)

  return (
      <div>
    <h2>
        {product.title}
    </h2>
    <p>
        {product.description}
    </p>
    </div>
  )
}

export default Item