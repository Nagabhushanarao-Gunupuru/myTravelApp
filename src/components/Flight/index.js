import './index.css'

const Flight = props => {
  const {flightDetails} = props
  const {
    flightNumber,
    airline,
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
    imageUrl,
  } = flightDetails

  return (
    <li className="listItemContainer">
      <div className="mainHeadingContainer">
        <h1 className="heading">{airline}</h1>
        <img src={imageUrl} alt="aeroplane" className="image" />
      </div>

      <p className="flightNo">
        Flight No: <span className="span">{flightNumber}</span>
      </p>
      <div className="cardContainer">
        <div className="locationContainer1">
          <p className="para">FROM</p>
          <p className="airport">{departureAirport}</p>
          <p className="time">{departureTime}</p>
        </div>
        <div className="locationContainer2">
          <p className="para1">TO</p>
          <p className="airport1">{arrivalAirport}</p>
          <p className="time1">{arrivalTime}</p>
        </div>
      </div>
    </li>
  )
}

export default Flight
