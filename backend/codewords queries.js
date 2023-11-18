import axios from "axios";

const AGEMO_API_KEY = '0mlVgL9m1Z7QfUhhMt8ZX2csUau6NEa981twzqoa';


function getFlightResults(query) {
    // console.log('getFlightResults');
    return axios.post('https://api.agemo.ai/execute-sync', {
        app_id: 'clp40i4d30017l508rmhsm8ia',
        inputs: {
            departure_date: "2023-12-25",
            return_date: "2024-12-30",
            departure_location: "Paris",
            destination_location: "London"
        }
    }, {
        headers: {
            'x-api-key': AGEMO_API_KEY
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log("Error Status:", error.response.status);
                console.log("Error Headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log("Error Request:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error Message:", error.message);
            }
            console.log("Error Config:", error.config);
        });
}

export { getFlightResults };
