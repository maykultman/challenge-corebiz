import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

const Item = ({product, addProduct}) => {
    const  { productId, imageUrl,productName,listPrice,price,installments, stars } = product;
    let small = [];
    installments.forEach( (i, index)=>{
        small.push(<small key={index}>o en {i.quantity}x de R {i.value}</small>)
    });
    let max = 0; let svgstars = [];
    while( max < 5){
        if( max < stars ){
            svgstars.push( <span key={max} className="fill"><AiTwotoneStar /></span>);
        }else{
            svgstars.push( <span key={max} className=""><AiTwotoneStar /></span>);
        }
        max ++;
    }
    return (
        <div className="content text-center">
            { installments.length > 0 && <div className="triangle off"></div>}
            <img src={imageUrl} className="img-fluid"/>
            <div className="info py-4 px-2">
                <p className="my-1"><small>{productName}</small></p>
                <div className="star">{svgstars}</div>
                <p className="my-1"><small>de ${ (listPrice/100)}</small></p>
                <p className="my-1"><strong>por ${(price/100)}</strong></p>
                <p className="my-1">{small}</p>
                <button className="btn btn-dark my-2" onClick={()=>addProduct(productId)}>COMPRAR</button>
            </div>
        </div>
        
    )
}
export default Item;