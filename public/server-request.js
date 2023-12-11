export async function getAllHouses() {
  const res = await fetch('http://localhost:3000/data')
  const data = await res.json()
  return data
}

export async function addHouse() {
  let response = await fetch('http://localhost:3000/data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "id": 4,
      "bostadsTyp": "lägenhet",
      "addres": "vargväg 3, Stockholm",
      "utgångsPris": 2500000,
      "antalRum": 2,
      "boarea": 60,
      "balkong": "ja",
      "våning": 4,
      "hiss": "ja",
      "byggnadsÅr": "1998",
      "förråd": "ja",
      "parkering": "ja",
      "innerGård": "ja"
    })
  })

  response = await response.json()
  console.log(response);
}

export async function getOneHouse(Id) {
  const res = await fetch('/data/' + Id)
  const data = await res.json()
  return data;
}
addHouse()

//getAllHouses()