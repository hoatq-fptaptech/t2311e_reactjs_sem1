import { useState } from "react";
import { Card } from "react-bootstrap";
function ProductCard(props){ // component
    const item = props.item;
    return (
        <Card>
            <Card.Img thumbnail  src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Card.Text>{item.qty > 0 ? "In stock": "Out of stock"}</Card.Text>
                <button className="btn btn-primary" type="button">Increment</button>
            </Card.Body>
        </Card>
    );
}
export default ProductCard;