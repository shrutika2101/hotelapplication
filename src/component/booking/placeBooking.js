import React,{Component} from 'react';

class PlaceOrder extends Component{
    constructor(){
        super()

        this.state={
            id:Math.floor(Math.random()*1000000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            phone:'',
            cost:sessionStorage.getItem('cost')
        }
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default PlaceOrder;