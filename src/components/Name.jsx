import React from 'react';

const Name = ({ myName, myAge, myAddress }) => {
    return (
        <React.Fragment>
            <p>{`Hey, I'm ${myName}`}</p>
            <p>{`My age it's not ${myAge}`}</p>
            <p>{`I'm from ${myAddress}`}</p>
        </React.Fragment>
    );
};

export default Name;
