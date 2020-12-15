import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Name from './name';
import Role from './role';
import ImageUrl from './imageUrl';

const User = (props) =>
{
    let style={
        backgroundColor:'red',
        color:'white'
    };
    let {name,role,imgurl} = props;
    return(
    
        <div className="row">
            <div className="col-md-4">
                <div className="card text-left">
                  <ImageUrl imgurl={imgurl}/>
                  <div className="card-body">
                   <Name name={name} />
                    <Role role={role} />
                  </div>
                </div>
               
            </div>
       
        </div>
    );
};


export default User; 