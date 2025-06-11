import { useEffect, useState } from "react";
import { CardFooter } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../store/productSlice";
import StatusCode from "../StatusCode";

const Product = () => {

    const dispatch = useDispatch();
    const { data: products, status} = useSelector(state => state.products);

    useEffect(() => {
// fetch('https://fakestoreapi.com/products').then(data => data.json()).then(result => getProducts(result))
        dispatch(getProducts())
    }, [])


    if(status === StatusCode.LOADING){
        return <h1>Loading...</h1>
    }
    else if(status === StatusCode.ERROR){
        return <h1>Error fetching data</h1>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    };

    const cards = products.map(product => {
        return (
            <div className="col-md-3" style={{ marginBottom: '10px' }} key={product.id}>
                <Card className="h-100">
                    <div className="text-center">
                        <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                    </div>

                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>

                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>

                    </Card.Body>
                    <CardFooter style={{textAlign: 'center', backgroundColor: 'white'}}>
                        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    })

    return(
        <>
            <h1>Product Dashboard</h1>
            <div className="container">
                {/* This is a bootstrap class for grid of 4 columns */}
                <div className="row">
                    {cards}
                </div>
            </div>
        </>
    )
}

export default Product;