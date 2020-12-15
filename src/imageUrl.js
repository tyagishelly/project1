import React from 'react';


const ImageUrl = ({imgurl}) =>
{
    return(
        
        <img className="card-img-top" src={imgurl} alt="food" />
          
    );
};

export default ImageUrl;