import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/detail">Detail</NavigationItem>
        <NavigationItem link="/favs">Favorites</NavigationItem>
    </ul>
)


export default navigationItems;
