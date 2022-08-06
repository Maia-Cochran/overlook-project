const fetchData = (url) => {
    return fetch(url)
    .then(data => data.json())
}
const fetchAll = () => {
    return Promise.all([fetchData('http://localhost:3001/api/v1/bookings'), 
    fetchData('http://localhost:3001/api/v1/rooms'), 
    fetchData('http://localhost:3001/api/v1/customers')])
}

// const postData = (data) => {
//     return fetch( 'http://localhost:3001/api/v1/bookings', {
//         method: 'POST',
//         body: JSON.stringify( data ),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then( response => response.json( ) )
//     .catch( error => console.log( error ) ); // Need to add error handling
// }

export {fetchAll}