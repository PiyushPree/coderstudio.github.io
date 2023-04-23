let url = "https://kontests.net/api/v1/all"

let response = fetch(url)

response.then((v) => {
    return v.json()
}).then((Contest) => {
    console.log(Contest)
    ihtml = ""
    for (item in Contest) {
        console.log(Contest[item])

        ihtml += `
        <div class="card" style="width: 22rem;">
                                <img src="https://media.istockphoto.com/vectors/programming-and-coding-concept-vector-id869105902?k=6&m=869105902&s=612x612&w=0&h=F5_yOapylnLS1tAr-KrS-fK1iFSlVx44tEH0t7bNu8g=" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${Contest[item].name}</h5>
                                        <p class="card-text" >"Status is " ${Contest[item].status} and site is ${Contest[item].site} </a>.</p>
                                        <p class="card-text"> In 24 hr ? - ${Contest[item].in_24_hours}.</p>
                                        <p class="card-text">Start At ${Contest[item].start_time}.</p>
                                        <p class="card-text">End At ${Contest[item].end_time} .</p>
                                        <a href="${Contest[item].url}" target = "_blank"" class="btn btn-primary">Visit here</a>
                                </div>
                        </div>
                        
        `
        cardContainer.innerHTML = ihtml
    }
})
