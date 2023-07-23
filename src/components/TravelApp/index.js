import {useState} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

import Flight from '../Flight'

import './index.css'

import {
  TravelContainer,
  TravelItems,
  MainHeading,
  Date,
  SearchContainer,
  LocationContainer,
  TimeContainer,
  Airport,
  ButtonContainer,
  Button,
  Time,
  IconContainer,
} from './styledComponents'

const FlightDetails = [
  {
    flight_number: 'AA123',
    airline: 'American Airlines',
    departure_airport: 'JFK',
    departure_time: '2023-07-22T08:00:00',
    arrival_airport: 'LAX',
    arrival_time: '2023-07-22T12:00:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'DL456',
    airline: 'Delta Airlines',
    departure_airport: 'ATL',
    departure_time: '2023-07-22T10:30:00',
    arrival_airport: 'ORD',
    arrival_time: '2023-07-22T12:30:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'UA789',
    airline: 'United Airlines',
    departure_airport: 'SFO',
    departure_time: '2023-07-22T14:45:00',
    arrival_airport: 'SEA',
    arrival_time: '2023-07-22T17:30:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'BA234',
    airline: 'British Airways',
    departure_airport: 'LHR',
    departure_time: '2023-07-22T07:15:00',
    arrival_airport: 'CDG',
    arrival_time: '2023-07-22T09:45:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'LH567',
    airline: 'Lufthansa',
    departure_airport: 'FRA',
    departure_time: '2023-07-22T11:00:00',
    arrival_airport: 'MUC',
    arrival_time: '2023-07-22T12:15:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'AF890',
    airline: 'Air France',
    departure_airport: 'CDG',
    departure_time: '2023-07-22T16:20:00',
    arrival_airport: 'FCO',
    arrival_time: '2023-07-22T18:45:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'SQ345',
    airline: 'Singapore Airlines',
    departure_airport: 'SIN',
    departure_time: '2023-07-22T03:30:00',
    arrival_airport: 'HKG',
    arrival_time: '2023-07-22T06:15:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'EK678',
    airline: 'Emirates',
    departure_airport: 'DXB',
    departure_time: '2023-07-22T12:10:00',
    arrival_airport: 'JFK',
    arrival_time: '2023-07-22T17:00:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'QF912',
    airline: 'Qantas',
    departure_airport: 'SYD',
    departure_time: '2023-07-22T09:30:00',
    arrival_airport: 'LAX',
    arrival_time: '2023-07-22T18:45:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
  {
    flight_number: 'TK789',
    airline: 'Turkish Airlines',
    departure_airport: 'IST',
    departure_time: '2023-07-22T14:00:00',
    arrival_airport: 'CDG',
    arrival_time: '2023-07-22T16:30:00',
    image_url:
      'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  },
]

const updatedData = FlightDetails.map(each => ({
  flightNumber: each.flight_number,
  airline: each.airline,
  departureAirport: each.departure_airport,
  departureTime: each.departure_time,
  arrivalAirport: each.arrival_airport,
  arrivalTime: each.arrival_time,
  imageUrl: each.image_url,
}))

const TravelApp = () => {
  const [flightsData, setFlightsData] = useState(updatedData)
  const [isSearchDep, setIsSearchDep] = useState('')
  const [isSearchArr, setIsSearchArr] = useState('')

  const onDeparture = event => {
    setIsSearchDep(event.target.value)
  }

  const onArrival = event => {
    setIsSearchArr(event.target.value)
  }

  const onClickSearch = () => {
    const newFlightsData = updatedData.filter(each => {
      const departure = each.departureAirport
        .toLowerCase()
        .includes(isSearchDep.toLowerCase())
      const arrival = each.arrivalAirport
        .toLowerCase()
        .includes(isSearchArr.toLowerCase())
      return departure && arrival
    })

    setFlightsData(newFlightsData)
  }

  return (
    <TravelContainer>
      <TravelItems>
        <MainHeading>Flight Travel Booking</MainHeading>
        <SearchContainer>
          <LocationContainer>
            <Airport value={isSearchDep} onChange={onDeparture}>
              {updatedData.map(each => (
                <option>{each.departureAirport}</option>
              ))}
            </Airport>
            <TimeContainer>
              <Date type="date" />
              <Time type="time" />
            </TimeContainer>
          </LocationContainer>
          <IconContainer>
            <AiOutlineArrowRight size={44} color="black" className="icon" />
          </IconContainer>

          <LocationContainer>
            <Airport value={isSearchArr} onChange={onArrival}>
              {updatedData.map(each => (
                <option>{each.arrivalAirport}</option>
              ))}
            </Airport>
            <TimeContainer>
              <Date type="date" />
              <Time type="time" />
            </TimeContainer>
          </LocationContainer>
          <ButtonContainer>
            <Button type="button" onClick={onClickSearch}>
              Search
            </Button>
          </ButtonContainer>
        </SearchContainer>
        {flightsData.length > 0 ? (
          <ul className="listContainer">
            {flightsData.map(each => (
              <Flight flightDetails={each} key={each.flightNumber} />
            ))}
          </ul>
        ) : (
          <p className="notFound">No Flights Found</p>
        )}
      </TravelItems>
    </TravelContainer>
  )
}

export default TravelApp
