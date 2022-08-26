const fetch = require("node-fetch");
const API_ENDPOINT = "http://15.207.210.8/mservice/GPSMobile/getLiveDatasWeb"

export async function handler() {
    const data = await fetch(API_ENDPOINT, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ p_imeino: 869523057984560 })
    });
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}