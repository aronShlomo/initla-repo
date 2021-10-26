import React from 'react';
import Tour from './Tour';


const Tours = ({ tours }) => {
    
    return (
        <section>
            <div>
                <h2>ours tours</h2>
            </div>

            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id}{...tour}>
                    </Tour>;
                })};
            </div>
        </section>
    );
}

export default Tours
