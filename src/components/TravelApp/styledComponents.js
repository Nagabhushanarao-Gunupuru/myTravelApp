import styled from 'styled-components'

export const TravelContainer = styled.div`
  background-image: url('https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/rsz_plane_flight_fly_travel_shutterstock_128469755.jpg');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  overflow: auto;

  @media screen and (max-width: 577px) {
    width: 100%;
  }
`

export const TravelItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 577px) {
    width: 100%;
  }
`

export const MainHeading = styled.h1`
  color: yellow;
  font-size: 60px;
  font-weight: Bold;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (max-width: 577px) {
    font-size: 30px;
    text-align: center;
  }
`

export const SearchContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 30%;
  width: 70%;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 577px) {
    flex-direction: column;
    width: 72%;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 992px) {
    width: 90%;
  }
`

export const Date = styled.input`
  height: 40px;
  background-color: #ffffff;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 200px;
  max-width: 350px;
  margin-right: 10px;
  @media screen and (max-width: 577px) {
    width: 150px;
  }
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 577px) {
    margin-bottom: 10px;
  }
`

export const TimeContainer = styled.div``

export const Airport = styled.select`
  height: 50px;
  background-color: #ffffff;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 400px;
  max-width: 450px;
  margin-bottom: 10px;
  @media screen and (max-width: 577px) {
    width: 250px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  height: 70px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 12px;
  text-align: center;
  color: #ffffff;
  background-color: green;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';

  @media screen and (max-width: 577px) {
    height: 40px;
    width: 70px;
    font-size: 15px;
  }
`
export const Time = styled.input`
  height: 40px;
  background-color: #ffffff;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 180px;
  max-width: 200px;
  margin-left: 10px;
  @media screen and (max-width: 577px) {
    width: 70px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
