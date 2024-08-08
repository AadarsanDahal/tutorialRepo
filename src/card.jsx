import Profile from './assets/profile.jpg'

function Card() {
    return(
        <div className="card">
              
                <img className='card-image' src={Profile} alt="this was a img of a guy"style={{ width: '100px', height: '100px' }} />   
                <h2>Aarsan</h2>
                <p>this is my card .
                    i like to play 
                </p>
            </div>
        

    );
}

export default Card
