function fetchAll() {
    return Promise.all([fetchData('http://localhost:3001/api/v1/bookings'),
    fetchData('http://localhost:3001/api/v1/rooms'),
    fetchData('http://localhost:3001/api/v1/customers')])
}

function postData(formData) {
    return fetch('http://localhost:3001/api/v1/bookings',
        {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to Post Information")
            } else {
                return response.json()
            }
        })
        .catch(error => console.log(error))
}

export {fetchAll}
export {postData}