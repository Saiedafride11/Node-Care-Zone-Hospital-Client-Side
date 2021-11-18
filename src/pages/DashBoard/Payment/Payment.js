import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwnqrGpYkDLgyl1Zi7G6glUml9pBBKkaPLaLWQdEovIXwnpU2Cw8MJBXaf4MRwfIf1IPvCUv0DyDGicZwz6rvev00NRottOy8');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointments] = useState({});

    useEffect(() => {
        // fetch(`http://localhost:5000/appointments/${appointmentId}`)
        fetch(`https://tranquil-fortress-32370.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [appointmentId])
        
    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {   appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}/>
                </Elements>
            }
        </div>
    );
};

export default Payment;


/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/

// 371449635398431 card number
// 371449635398431 card number