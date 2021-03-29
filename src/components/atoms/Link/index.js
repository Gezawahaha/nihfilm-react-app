import React from 'react';
import './link.scss';

const Link = ({tittle, onClick, className}) => {
    return (
        <p className={className} onClick={onClick}>{tittle}</p>
    )
}

export default Link;
