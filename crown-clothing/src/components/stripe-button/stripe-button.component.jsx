import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GzOgPI48rFGEYTAv9VjTLFRSOPaWqQ9kxtmwtUUSQxhso9IY5ivNZ28yUqdXti1ssf6DjT3OgNnpkcZ3NNeKayS00r0mY2nUi';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
