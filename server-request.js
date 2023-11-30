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
      "typ": "lägenhet",
      "addres": "Solnagatan 1, Solna ",
      "kvm": 67,
      "rum": 2,
      "pris": 2700000,
      "features": []
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

//getAllHouses()