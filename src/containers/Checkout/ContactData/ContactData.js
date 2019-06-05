import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adddress: {
      street: '',
      country: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    
    console.log(34, this.props);
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Damilola Adekoya',
        address: {
          street: '12, oluwole',
          city: 'Akoka Lagos',
          country: 'Nigeria',
        },
        email: 'test@gmail.com',
        deliveryMethod: 'fastest',
      }
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
        })        
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    let form = (
      <form>
          <input className={classes.input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.input} type="text" name="email" placeholder="Your Email" />
          <input className={classes.input} type="text" name="street" placeholder="Your Street" />
          <input className={classes.input} type="text" name="country" placeholder="Your Country" />
          <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
        </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div>
        <h4>Enter your Conatct Details</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;