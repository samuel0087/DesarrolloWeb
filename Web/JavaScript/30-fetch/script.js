//FETCH (ajax)

 fetch("https://reqres.in/api/users/2",{
    method: "GET",
    headers: {
        "Content-type": "application/json",
        "x-api-key" : "reqres-free-v1"}
 })
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
        })
        .catch(error => {
            console.log("error al pedir los datos al servidor", error);
        })