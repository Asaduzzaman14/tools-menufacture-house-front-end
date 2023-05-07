import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';



const CheckoutForm = ({ order }) => {
    console.log('This si odrer', order);

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transection, setTransection] = useState('')

    const [Processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    const { _id, price, quantity, email, name } = order
    const totalPrice = price * quantity
    const prices = { totalPrice }

    useEffect(() => {
        fetch('https://manufacturer-house-server-ac2k.vercel.app/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": " application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(prices)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('data', data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })


    }, [])
    if (Processing) {
        <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        setSuccess('')

        setProcessing(true)

        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message)
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransection(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('payment is complete')

            // patch stor payment on data base
            const payment = {
                order: _id,
                transectionId: paymentIntent.id

            }
            console.log('1111111111111111', payment);  //ok
            fetch(`https://manufacturer-house-server-ac2k.vercel.app/tool/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": " application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ payment })
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })

        }
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'><p>
                    {success}
                </p>
                    <p>your transaction id: {transection}</p>

                </div>
            }

        </>
    );
};

export default CheckoutForm;