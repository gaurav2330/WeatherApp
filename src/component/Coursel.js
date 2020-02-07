import React, { Component } from 'react';
import {Card,Button,CardGroup} from 'react-bootstrap';
import weather  from    '../Images/weather.jpg'
import snow from '../Images/snow.jpg'
import xyz from '../Images/fr.jpg'
export default class  Cour extends Component{
    render(){
       return (           
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={weather} />
            </Card>
            <Card>
                <Card.Img variant="top" src={snow} />
            </Card>
            <Card>
                <Card.Img variant="top" src={xyz}/>
            </Card>
            </CardGroup>
        );
    }
}