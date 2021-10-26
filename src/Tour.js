import React, {useState} from 'react'


const Tour = (props) => {
    const {id, image, info, price, name} = props
    const [readMore, setReadMore] = useState(false);
    return (
    <article>
        <img src={image} alt={name} />
        <footer>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
            <p>{readMore ? info : `${info.substring(0,200)}...`}</p>
            <button >
                not Interested
            </button>
        </footer>
    </article>
    )
}

export default Tour
