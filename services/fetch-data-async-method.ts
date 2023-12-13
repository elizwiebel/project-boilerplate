export async function fetchDataAsyncMethod(url: string): Promise<any> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const message = `${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
 
// TEST CONFIG
// const LOCAL_SERVER_DATA_PATH = "http://127.0.0.1:5500/data/pokemon.json";
// fetchDataAsyncMethod(LOCAL_SERVER_DATA_PATH).then((data) => console.log("data", data));
