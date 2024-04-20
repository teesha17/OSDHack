import Carousel from './Carousel';
import {StarRating} from './StarRating';
import './Card.css';
export const Card1=({data})=>{
        return(
            
            <div className="BX">
            <div className='top-image'>
                <Carousel images={data.images} />
                <div className="rating-container">
                    {/* <div className="star"><StarRating rating={data.rating} /></div> */}
                    <p className="ratingval">{data.rating}</p>
                </div>
            </div>
            <div >
                <p className="name">{data.name}</p>
                <p className="loc">{data.location}</p>
             </div>
             <div className='BICH'>
                <div className='in'>
                <img src={data.profimg}/>
                </div>
                <div className='inn'>
                <p className="notable">{data.heading}</p>
                <p className="content">{data.content}</p>
                </div>
             </div>
             <div className='BX2'>
                <button className='BT BT1'>Quote Price</button>
                <button className='BT'>Message</button>
             </div>
             </div>
        )
    }
     
    export default Card1;
    