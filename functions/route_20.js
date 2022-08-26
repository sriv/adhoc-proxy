export async function handler() {
    const data = await fetch("http://15.207.210.8/mservice/GPSMobile/getLiveDatasWeb", {
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