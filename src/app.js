import React from 'react';
import User from './user';
import Faker from 'faker';

const App = () => {
    return (
        <div className="container">
            <User name="Shelly" role="Backend Developer" imgurl={Faker.image.food()} />
            <User name="Shubhi" role="Front Developer" imgurl={Faker.image.food()} />
            <User name="Payal" role="Fullstack Developer" imgurl={Faker.image.food()} />


        </div>
   

    );
    
};

export default App;