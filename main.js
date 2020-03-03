const getCompanies = () => {
    const URL = 'https://recruitment.hal.skygate.io/companies';
    fetch(URL)
        .then(response => {
            // console.log(response);
            if (response.status !== 200) {
                throw Error("To nie jest odpowiedź 200 ")
            } else {
                return response.json()
            }
        })
        .then(json => console.log(json))
        .catch(error => console.log(error))
};

document.querySelector('button').addEventListener('click', getCompanies);

