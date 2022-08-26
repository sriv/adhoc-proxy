import fetch from "node-fetch";
const API_ENDPOINT = "http://15.207.210.8/mservice/GPSMobile/getLiveDatasWeb"

export async function handler(event, context) {
  return fetch(API_ENDPOINT, {
      headers: { Accept: "application/json", "Content-Type": "application/json" } ,
      method: "POST",
      body: JSON.stringify({ p_imeino: 869523057984560 })
  }).then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}
