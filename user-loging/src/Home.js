import React from 'react';
import img1 from '../src/img.png';

class Home extends  React.Component
{
    render()
    {
        return(
            <div>
                <h1> User Home Page </h1>
                <img src={img1} width="100" height="100" alt='icon' />
            </div>
        );
    }
}
export default Home;