import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import {remove} from '../store/cartSlice'
import { useDispatch } from 'react-redux'

export default function Cart() {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }

  const cards = products.map(product => {
    return (
        <div className="col-md-12" style={{marginBottom: '10px'}} key={product.id}>
            <Card className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
                </div>
                
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
              
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer style={{textAlign: 'center', backgroundColor: 'white'}}>
                    <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove item</Button>
                </Card.Footer>
            </Card>
        </div>
    )
})


  return (
    <>  
      <h2>Cart</h2>
      <div className="row">
        {cards}
      </div>
    </>
  )
}
