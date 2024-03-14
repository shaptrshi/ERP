const ProductVIew=({products})=>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Products  </h1>
            <p>Total Products: {products && (products.length||0) }</p>
        </div>
    )
}
export default ProductVIew;