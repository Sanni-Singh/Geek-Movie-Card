import './Card.css'

const Card = ({bgp , title,releaseYear,director,imdbRating,genre,poster,description})=>{

    return (
        <div className="card">
            <div className="cardDetails">
                <div className="cardDetailsHeading">
                    <img src={poster} alt="" />
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
                <p className='puni'>{description}</p >
                <div className="icons">
                    <img src="../.././public/share.svg" alt="" />
                    <img src="../.././public/love.svg" alt="" />
                    <img src="../.././public/mess.svg" alt="" />
                </div>
            </div>
            <div className="cardImg">
                <img src={bgp} alt="" />
            </div>
        </div>
    )
}
export default Card;