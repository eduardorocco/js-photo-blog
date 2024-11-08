
//console.log(axios)

const cardRow = document.querySelector('.row')

const overlayContainer = document.querySelector('.overlay-container')

const overlayContent = document.querySelector('.overlay-content')



const BASE_URL = 'https://jsonplaceholder.typicode.com/'

let url_body = 'photos'

const endpoint = BASE_URL + url_body

//console.log(endpoint)


axios

    .get(endpoint, {

        params: {

            _limit: 6,

        },

    })

    .then((res) => {

        const cards = res.data

        //console.log(cards)

        appendCard(cards, cardRow)

        cardRow.addEventListener('click', function (event) {

            const cardElement = event.target.closest('.card')

            if (cardElement) {

                const imgElement = cardElement.querySelector('.card-img')

                overlayContainer.classList.toggle("d-none")


                if (imgElement) {

                    //console.log('click', imgElement.src)

                    overlayContent.innerHTML += `<button type="button" id="close-button" aria-label="Close overlay">Chiudi</button>`

                    overlayContent.innerHTML += `<img src="${imgElement.src}" alt="">`

                    const closeBtn = document.getElementById('close-button')

                    console.log(closeBtn);



                    closeBtn.addEventListener('click', function (event) {

                        overlayContainer.classList.add('d-none')

                        console.log('object');

                        overlayContent.innerHTML = ''

                    })


                }



            }




        });
    })
    .catch((err) => {

        console.log(err)
    })








function appendCard(cards, root) {


    // console.log(cards, root)

    cards.forEach((card) => {

        // console.log(card)

        const { title, url } = card

        const imgCardHTML = `
            <div class="col">
                <div class="card">
                    <img src="${url}" class="card-img" alt="">
                    <img src="./img/pin.svg" class="pin" alt="">
                    <div class="card-body">
                        <p class="card-text">${title}</p>
                    </div>
                </div>
            </div>
        `
        root.innerHTML += imgCardHTML

    })

}

