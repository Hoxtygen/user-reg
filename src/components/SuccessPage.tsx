import React from "react";

const SuccessPage = ({ paymentDataId }: { paymentDataId: string }) => {
  return (
    <div className="success-page">
      <h3 className="success-text">You've successfully made payment</h3>
      <h5 className="success-payment-id">
        Payment ID: <span className="span">{paymentDataId}</span>{" "}
      </h5>
    </div>
  );
};

export default SuccessPage;
