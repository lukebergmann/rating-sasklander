import "../styles/EndBooking.css";

function EndBooking() {
  //Generate random string of numbers
  function generateNum(length) {
    let result = "";
    const characters =
      "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div className="CompleteBooking">
      <p className="Title">Thank You for Staying With Us!</p>
      <p className="ConfirmNum">Your Confirmation Number is #{generateNum(6)}-{generateNum(3)}</p>
      <a className="EndButton" href="http://localhost:3000/RateUs">
        End Booking
      </a>
    </div>
  );
}

export default EndBooking;
