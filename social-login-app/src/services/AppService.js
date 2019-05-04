export function AppService(type, userData) {
    let BaseURL = 'http://localhost:8090/api/';
    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((response) =>  response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}