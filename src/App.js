import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51H72nUH0GGPRCLhwev6X1yYWv3cNqmsGcuqAMVKYYdJQkHHIbURisMYNLIHhRraj1RwrMGtYaEHSGlLDg7Xtkjjl00BhLv8Je3");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
