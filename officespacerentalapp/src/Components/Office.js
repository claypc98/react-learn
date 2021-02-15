import React, {Component} from 'react';

export class Office extends Component {
    render() {
        const src = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        const element = "Office Space";
        const jsxatt = <img src={src} width="25%" height="25%" alt="Office Space"/>
        const itemName = {Name: "DBS", Rent: 50000, Address: "Chennai"};

        let colors = [];

        if(itemName.Rent <= 60000){
            colors.push("red");
        }
        else{
            colors.push("green");
        }

        return (
            <div style={{marginLeft: '400px'}}>
                <h1>{element}, at Affordable Range</h1>
                {jsxatt}
                <h1>Name: {itemName.Name}</h1>
                <h3 style={{color: colors}}>Rent: Rs. {itemName.Rent}</h3>
                <h3>Address: {itemName.Address}</h3>
            </div>
        );
    }
}