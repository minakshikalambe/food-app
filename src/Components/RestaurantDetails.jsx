

function RestaurantDetails({
    image:url,
    name:title,
    cost,
    rating,
    votes,
    reviews,
    paymentMethods,
    cuisine:tags
}){

    return(
        <div style={{display:"flex" ,gap:"2rem", border:"1px solid black", padding:"1rem", margin:"0.5rem"}}>
        <div>
            <img width="50px" src={url} alt={title}/>
        </div>
        <div>
            <div>{title}</div>
            <div>{tags}</div>
            <div>Cost ${cost} for one</div>
            <div>accepts {JSON.stringify(paymentMethods)}</div>
        </div>
        <div>
            <div>{rating}</div>
            <div>{votes} votes</div>
            <div>{reviews}reviews</div>
        </div>
        </div>
    )

}
export default RestaurantDetails