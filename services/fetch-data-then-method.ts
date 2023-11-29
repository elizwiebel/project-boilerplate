export default function fetchDataThenMethod(url: string): Promise<any> {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                const message = `${response.status}`;
                throw new Error(message);
            }

            return response.json();
        })
        .catch((error) => {
            console.error(error);
        });
}

// TEST CONFIG
// const LOCAL_SERVER_DATA_PATH = "http://127.0.0.1:5500/data/pokemon.json";
// fetchDataThenMethod(LOCAL_SERVER_DATA_PATH).then((data) => console.log("data", data));
