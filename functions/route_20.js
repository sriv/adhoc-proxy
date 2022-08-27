import axios from 'axios';
const API_ENDPOINT = "http://15.207.210.8/mservice/GPSMobile/getLiveDatasWeb"

export async function handler(event, context) {
  try {
    const {data} = await axios.post(API_ENDPOINT, { p_imeino: 869523057984560 });
    const ping = data.ResponseData[0];
    var resp = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [ping.lng, ping.lat]
      },
      "properties": {
        "statusdatetime": ping.statusdatetime,
        "speed": ping.speed
      }
    }
    return { statusCode: 200, body: JSON.stringify(resp) };
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}
