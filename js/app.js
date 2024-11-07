
console.log(axios)

const cardRow = document.querySelector('.row')



const BASE_URL = 'https://jsonplaceholder.typicode.com/'

let url_body = 'photos'

const endpoint = BASE_URL + url_body

console.log(endpoint)

axios

	.get(endpoint, {

		params: {

			_limit: 6,

		},

	})

	.then((res) => {

		const cards = res.data

        console.log(cards);

        appendCard(cards,cardRow)

        const cardElements= document.querySelectorAll('.card')

        cardElements.forEach((cardElement) => {
            
            cardElement.addEventListener('click', function (event) {

              console.log('click');

            })
            
          })

	})

	.catch((err) => {
        
		console.log(err)
	})


    function appendCard(cards, root) {


        console.log(cards, root)

        cards.forEach((card) => {

            console.log(card)

            const { title , url } = card

            const imgCardHTML = `
                <div class="col">
                    <div class="card">
                        <img src="${ url }" class="card-img" alt="">
                        <img src="./img/pin.svg" class="pin" alt="">
                        <div class="card-body">
                            <p class="card-text">${ title }</p>
                        </div>
                    </div>
                </div>
            `
            root.innerHTML += imgCardHTML

        })

    }

   