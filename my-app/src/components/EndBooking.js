import "../styles/EndBooking.css"

function EndBooking() {
  return (
   <div className="CompleteBooking">
     <p className="Title">Thank You for Staying With Us!</p>
     <p className="ConfirmNum">Your Confirmation Number is #153769-835</p>
     <a className="EndButton" href="http://localhost:3000/RateUs">End Booking</a>
   </div>
  );
}

export default EndBooking