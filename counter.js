console.log("Counter loaded");

const kvstorKey = "65a6c923bcb72d5a2e733044b1180e426df7e297fd2ec6af80b1326768072663"
const kvstorUrl = "https://api.kvstore.io/collections/not-reliable/items/counter"

window.onload = async function() {
    counter = 3;
    const response = await fetch(kvstorUrl, {
        method: 'GET',
        headers: {
            'kvstoreio_api_key': kvstorKey
        }
    });
    console.log("kvstor:", response);
    counterDisplay = document.getElementById("counterDisplay");
    counterDisplay.innerHTML = counter;
}