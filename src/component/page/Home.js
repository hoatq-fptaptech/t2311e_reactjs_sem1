import { useEffect, useState } from "react";
import Product from "../common/Product";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../common/ProductCard";

function Home(props){
    const [list,setList] = useState([]);
    function callData(){
        const url = `https://dummyjson.com/products?limit=12`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setList(data.products);
        });
    }
    useEffect(function(){
        callData();
    },[]);
    return (
        <section>
            <Container>
             <h1>Product Listing</h1>
             <Row>
             {
                list.map((e,i)=>{
                return <Col xs={3} key={i}>
                        <ProductCard item={e} />
                    </Col>
                })
             }
             </Row>
            </Container>
        </section>
    );
}
export default Home;