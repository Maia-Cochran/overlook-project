const fetchData = (url) => {
    return fetch(url)
    .then(data => data.json())
}
const fetchAll = () => {
    return Promise.all([fetchData('http://localhost:3001/api/v1/bookings'), 
    fetchData('http://localhost:3001/api/v1/rooms'), 
    fetchData('http://localhost:3001/api/v1/customers')])
}

export {fetchAll}