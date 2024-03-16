import { useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function ProductCard(props){ // component
    const item = props.item;
    return (
        <Card>
            <Card.Img thumbnail  src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Card.Text>{item.qty > 0 ? "In stock": "Out of stock"}</Card.Text>
                <NavLink to={"/product/"+item.id} className="btn btn-primary">Detail</NavLink>
            </Card.Body>
        </Card>
    );
}
export default ProductCard;