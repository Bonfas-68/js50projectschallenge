
const btnEl = document.getElementById('btn')
const galleryEl = document.getElementById('gallery')
const errorMessage = document.getElementById('errormessage')


async function fetchImage(){
    const inputValue = document.getElementById('input').value;
    if(inputValue > 10 || inputValue < 1){
        errorMessage.style.display ="block"
        errorMessage.innerText = 'Number should be between 0 and 11'
        return
    }

    urls = ""
    try {
        btnEl.style.display = 'none'
        const loading = `<img src="spinner4.svg"/>`;
        galleryEl.innerHTML = loading;
        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.floor(Math.random() * 1000)}&client_id=WtNxRlKsjJaLCnfA9CPQpIr9EAr30Lp_OHRkRpdYkpg`)
        .then(res => res.json())
        .then(data => {
            if(data){
                data.forEach((pic)=>{
                    console.log(pic.urls.small);
                    urls += `
                    <img src=${pic.urls.small} alt="image"/>
                    `
                    galleryEl.style.display = 'block'
                    galleryEl.innerHTML = urls;
                    btnEl.style.display = 'block'
                    errorMessage.style.display = "none"
                })
            }
        })
        // console.log("clicked");
        
    } catch (error) {
        errorMessage.innerText = "An error occured, try again later"
        errorMessage.style.display = "block"
        btnEl.style.display = 'block'
        galleryEl.style.display = 'none'
    }
    
}


btnEl.addEventListener('click', fetchImage);