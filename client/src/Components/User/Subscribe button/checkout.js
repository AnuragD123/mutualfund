import React, { useState } from 'react';
import './checkout.css';
import useStripe from '../../../pages/User/Subscription/stripe';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [planId, setPlanId] = useState('');
  const [showModal, setShowModal] = useState(false);

  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: {
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
        cvc: cvc,
      },
      billing_details: {
        email: email,
      },
    });

    if (error) {
      console.log(error);
    } else {
      const { id } = paymentMethod;
      const subscription = await stripe.subscriptions.create({
        customer: 'customer_id', // replace with actual customer ID
        items: [{ plan: planId }],
        default_payment_method: id,
      });

      console.log(subscription);
    }
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  

  return (
    <>
      


<div className="content">

<div className="subscribe-container">
    <button onClick={handleShowModal} className="subscribe-btn">
      Subscribe
    </button>
  </div>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card number"
              />
              <br />
              <input
                type="text"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                placeholder="MM"
              />
              <input
                type="text"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                placeholder="YYYY"
              />
              <br />
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
              />
              <br />
              <select
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
              >
                <option value="">Select a plan</option>
                <option value="price_1Mx55zSHUiplHeHF4Eduq6Bh">
                  Bronze Membership (499.00INR/month)
                </option>
                <option value="price_1Mx55zSHUiplHeHFcOGTnJ62">
                  Silver Membership (1399.00INR/3 month)
                </option>
                <option value="price_1Mx55zSHUiplHeHFFt9OOhU2">
                  Gold Membership (2599.00INR/6 months)
            </option>
          </select>
          <br />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )}
  </div>
</>
);
};

export default Checkout;