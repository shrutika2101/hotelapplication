import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay'
import CostFilter from '../filters/CostFilter';
import RoomFilter from '../filters/RoomFilter';
 
const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:""
        }
    }

    filterHotels = (data) => {
        console.log(data)
        this.setState({
            hotellist : data
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data) => {this.filterHotels(data)}}/>
                    <CostFilter costPerType ={(data) => {this.filterHotels(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay hotellist={this.state.hotellist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let tripId = this.props.match.params.id;
        console.log("in listing api")
        sessionStorage.setItem('tripId', tripId);
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({hotellist:res.data})})
    }
}

export default Listing