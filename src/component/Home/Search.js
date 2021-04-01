import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Search.css';

const url = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(props) {
        super(props);
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity=(data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel=(data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        //console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${hotelUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    handleHotel = (event) => {
        const hotelId = event.target.value;
        sessionStorage.removeItem('tripId');
        // window.location=`/details/${hotelId}`;
        this.props.history.push(`/details/${hotelId}`)
    }

    render(){
        console.log(">>>>>>>Inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>---------SELECT CITY-------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>---------SELECT Hotel-------</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    // onload api call
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
           this.setState({location:data})
        })
        .catch((err) => {console.log(err)})
        
    }

}

export default withRouter(Search)