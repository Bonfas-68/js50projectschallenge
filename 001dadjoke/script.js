const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1"
const apikey = "8QoP5VE2Wnb7dtMipptOeg==05HzEH4xlIPh8UXT";
const options= {
    method:"GET",
    headers:{
        "X-Api-Key":apikey
    },
};
async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."

        btnEl.disabled =true;
        btnEl.innerText = "Loading..."

        const response = await fetch(apiURL,options);
        const data = await response.json();
        btnEl.disabled =false;
        btnEl.innerText = "TELL ME A JOKE"
        jokeEl.innerText = data[0].joke

    // console.log(data[0].joke);
    } catch (error) {
        jokeEl.innerText = `An Error happened, try again later :-) ${error.message}`;
        btnEl.disabled =false;
        btnEl.innerText = "TELL ME A JOKE";
    }
    
}


btnEl.addEventListener('click', getJoke)