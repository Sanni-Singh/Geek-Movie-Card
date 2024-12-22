import './Card.css'

const Card = ({bgp , title,releaseYear,director,imdbRating,genre,poster})=>{

    return (
        <div className="card">
            <div className="cardDetails">
                <div className="cardDetailsHeading">
                    <img src={bgp} alt="" />
                    <div className="cardDetailsHeadingImg">
                        <h1>{title}</h1>
                        <div className="date">
                            <p>{releaseYear}</p>
                            <p>{director}</p>
                        </div>
                        <div className="actor">
                            <button>{imdbRating}</button>
                            <p>{genre.join(', ')}</p>
                        </div>
                    </div>
                </div>
                <p className='puni'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quidem! Error doloribus libero ratione aliquid praesentium voluptates et totam atque cum minima in, architecto asperiores animi, fugit, ad quaerat. Rem.
                Quam non unde vel alias,uis facere nostrum unde veritatis?</p >
                <div className="icons">
                    <img src="../.././public/share.svg" alt="" />
                    <img src="../.././public/love.svg" alt="" />
                    <img src="../.././public/mess.svg" alt="" />
                </div>
            </div>
            <div className="cardImg">
                <img src={poster} alt="" />
            </div>
        </div>
    )
}
export default Card;