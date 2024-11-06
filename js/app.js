
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
                <div class="card">
                    <figure>
                        <img src="${url}" alt="">
                    </figure>
                </div>
            `
            root.innerHTML += imgCardHTML

        })

    }

