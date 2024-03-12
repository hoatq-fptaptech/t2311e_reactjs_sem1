import { useEffect, useState } from "react";
import Product from "../common/Product";

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
        <div>
             <h1>Home Page content</h1>
             {
                list.map((e,i)=>{
                    return <Product item={e} key={i}/>
                })
             }
        </div>
    );
}
export default Home;