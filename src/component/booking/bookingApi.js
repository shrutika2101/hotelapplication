import React, {Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:9080/bookings";

class BookingApi extends Component{
    constructor(){
        super()

        this.state={
            booking:""
        }
    }

    render(){
        return(
            <div>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url).then((res) =>{this.setState({booking:res.data})})
    }
}

export default BookingApi