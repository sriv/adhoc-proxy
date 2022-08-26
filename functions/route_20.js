import axios from 'axios';
const API_ENDPOINT = "http://15.207.210.8/mservice/GPSMobile/getLiveDatasWeb"

export async function handler(event, context) {
  try {
    const {data} = await axios.post(API_ENDPOINT, { p_imeino: 869523057984560 });
    return { statusCode: 200, body: data };
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}
