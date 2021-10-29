import axios from "axios"
import { Linking } from "react-native"
import env from "../../config/env"

interface GeolocationProps {
  address:string;
}

const getGeolocation = async (props:GeolocationProps) => {
  const {address} = props

  const baseUrl = env.GEOCODING_BASE_URL
  const apiKey = env.GOOGLE_API_KEY
  const response = await axios.get(`${baseUrl}${address}&key=${apiKey}`)

  console.log(response.data.results[0].geometry.location.lat);
  console.log(response.data.results[0].geometry.location.lng);

  const lat = response.data.results[0].geometry.location.lat
  const long = response.data.results[0].geometry.location.lng

  const url = `https://www.google.com.br/maps/search/${lat},${long}/@${lat},${long},17z`
  
  Linking.openURL(url);
}
export default getGeolocation;