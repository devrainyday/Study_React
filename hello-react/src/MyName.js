import React, {Component} from 'react';

const MyName = ({name}) => {
    return (
        <div>
            Hi! I'm <strong>{name}</strong>.
        </div>
    );
};

MyName.defaultProps = {
    name: 'unknown'
}

export default MyName;