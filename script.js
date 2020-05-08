let countries = []

document.querySelector('#date').textContent = moment().format('DD-MMM-YYYY')
document.querySelectorAll('input[name="sort-order"]').forEach( radio => radio.addEventListener( 'change', () => {
	
	switch (radio.value) {
		case 'country': 
			sortByCountry()
			displayCountries(true)
			break
		case 'cases': 
			sortByCases()
			displayCountries()
			break
		case 'deaths': 
			sortByDeaths()
			displayCountries()
			break
		case 'recovered': 
			sortByRecovered()
			displayCountries()
			break
		default:
			sortByCountry()
			displayCountries(true)
	}
	
}))


const createItem = data => {

const pais = data.country;
const casos = data.cases;
const mortes = data.deaths;
const recuperados = data.recovered;

const tabela = document.getElementById('content-tabela')
var linha = tabela.insertRow(0);

tabela.appendChild(linha)

var linha1 = linha.insertCell(0);
var linha2 = linha.insertCell(1);
var linha3 = linha.insertCell(2);
var linha4 = linha.insertCell(3);


linha4.innerHTML = pais;
linha3.innerHTML = mortes.toLocaleString();
linha2.innerHTML = casos.toLocaleString();
linha1.innerHTML = recuperados.toLocaleString();

linha1.className = "recuperados"
linha2.className = "casos"
linha3.className = "mortes"
linha4.className = "pais"

linha.appendChild(linha4)
linha.appendChild(linha2)
linha.appendChild(linha3)
linha.appendChild(linha1)


// lista casos como numero inteiro na div pra calcular
const casosdiv = document.getElementById('casosTotais')
	const divcasos = document.createElement('span')
		divcasos.className = 'casos hidden'
		const numcasos = document.createTextNode(data.cases)
	
		divcasos.appendChild(numcasos)
		casosdiv.appendChild(divcasos)

// lista mortes como numero inteiro na div pra calcular
const mortesdiv = document.getElementById('mortesTotais')
const divMortes = document.createElement('span')
	divMortes.className = 'mortes hidden'
	const numMortes = document.createTextNode(data.deaths)

	divMortes.appendChild(numMortes)
	mortesdiv.appendChild(divMortes)

// lista recuperados como numero inteiro na div pra calcular
const recuperadosdiv = document.getElementById('recuperadosTotais')
const divrecuperados = document.createElement('span')
	divrecuperados.className = 'recuperados hidden'
	const numrecuperados = document.createTextNode(data.recovered)

	divrecuperados.appendChild(numrecuperados)
	recuperadosdiv.appendChild(divrecuperados)


	

	// casosTotais
	// mortesTotais
	// recuperadosTotais
	// joga em totais


	// let tdsValores = document.querySelectorAll('.mortes')
	// let total = 0
	// // Itera sobre a lista de elementos tds (tdsValores)
	// 	for (let i = 0; i < tdsValores.length; i++) {
	// 			// Você acessa o texto dentro de um elemento
	// 			// por meio da propriedade textContent
	// 			// a função parseFloat converte um texto pra número de ponto flutuante
	// 			// caso contrário ao somar os valores na verdade você os concatenaria, 
	// 			// obtendo "39.9060.9039.90"
	// 			let valor = parseFloat(tdsValores[i].textContent)
	// 			// a cada iteração total vai receber o valor dela mesma
	// 			// mais o valor atual da iteração
	// 			total = total + valor // ou total += valor
	// 		}
	// console.log(total)
// mortes
// const totais = document.getElementById('totais')
// 	const divtotais = document.createElement('div')
// 	divtotais.className = 'hidden mortesT'
// 	 const totaisC = document.createTextNode(data.deaths)
// 	 divtotais.appendChild(totaisC)
// 	 totais.appendChild(divtotais)


	// let tdsValores = document.querySelectorAll('.mortesT')
	// let total = 0
	// // Itera sobre a lista de elementos tds (tdsValores)
	// 	for (let i = 0; i < tdsValores.length; i++) {
	// 			// Você acessa o texto dentro de um elemento
	// 			// por meio da propriedade textContent
	// 			// a função parseFloat converte um texto pra número de ponto flutuante
	// 			// caso contrário ao somar os valores na verdade você os concatenaria, 
	// 			// obtendo "39.9060.9039.90"
	// 			let valor = parseFloat(tdsValores[i].textContent)
	// 			// a cada iteração total vai receber o valor dela mesma
	// 			// mais o valor atual da iteração
	// 			total = total + valor // ou total += valor
	// 		}


	// console.log(total) // imprime no console o valor final de total
// var convert = parseInt(mortes_c)
// console.log(convert)
 // Atribui à tdsValores uma lista com os elementos tds    
// que possuem a classe info-valor
// const totais = document.getElementById('totais')
// totais.innerHTML = mortes
// let tMortes = document.querySelectorAll('.mortes')
	// 	let tMortes = data.deaths
	// let tdsValores = [tMortes]
	// 	console.log(tdsValores)
	// let total = 0
	// // Itera sobre a lista de elementos tds (tdsValores)
	// 	for (let i = 0; i < tdsValores.length; i++) {
	// 			// Você acessa o texto dentro de um elemento
	// 			// por meio da propriedade textContent
	// 			// a função parseFloat converte um texto pra número de ponto flutuante
	// 			// caso contrário ao somar os valores na verdade você os concatenaria, 
	// 			// obtendo "39.9060.9039.90"
	// 			let valor = parseFloat(tdsValores[i].textContent)
	// 			// a cada iteração total vai receber o valor dela mesma
	// 			// mais o valor atual da iteração
	// 			total = total + valor // ou total += valor
	// 		}

	// console.log(total) // imprime no console o valor final de total
	
// const totais = document.getElementById('totais')
// 	let total_mortes = ''

// 	total_mortes += mortes
// 	totais.innerHTML = total_mortes

// 	let cases_change = mortes 
// 	if (cases_change > 0) {
// 		cases_change = `+${cases_change}`
// 	} else {
// 		cases_change = 'No change'
// 	}
	
	// console.log (total_mortes)

	// const el = document.createElement('div')
	// el.className = 'country'
	
	// const header = document.createElement('div')
	// header.className = 'header'
	// const headerContent = document.createTextNode(data.country)
	// header.appendChild(headerContent)

	// const content = document.createElement('div')
	// content.className = 'content'

	// const cases = document.createElement("div")
	// cases.className = "data-item"
	// let cases_change = data.cases - data.yd_cases
	// if (cases_change > 0) {
	// 	cases_change = `+${cases_change}`
	// } else {
	// 	cases_change = 'No change'
	// }
	// cases.innerHTML = `Cases: ${data.cases}`
	// cases.innerHTML += `<span class="yd">(${data.yd_cases})</span>`
	// cases.innerHTML += `<span class="change">${cases_change}</span>`

	// const deaths = document.createElement('div')
	// deaths.className = 'data-item'
	// let deaths_change = data.deaths - data.yd_deaths
	// if (deaths_change > 0) {
	// 	deaths_change = `+${deaths_change}`
	// } else {
	// 	deaths_change = 'No change'
	// }
	// deaths.innerHTML = `Deaths: ${data.deaths}`
	// deaths.innerHTML += `<span class="yd">(${data.yd_deaths})</span>`
	// deaths.innerHTML += `<span class="change">${deaths_change}</span>`
	
	// const recovered = document.createElement('div')
	// recovered.className = 'data-item'
	// let recovered_change = data.recovered - data.yd_recovered
	// if (recovered_change > 0) {
	// 	recovered_change = `+${recovered_change}`
	// } else {
	// 	recovered_change = 'No change'
	// }
	// recovered.innerHTML = `Recovered: ${data.recovered}`
	// recovered.innerHTML += `<span class="yd">(${data.yd_recovered})</span>`
	// recovered.innerHTML += `<span class="change">${recovered_change}</span>`

	// el.appendChild(header)
	// content.appendChild(cases)
	// content.appendChild(deaths)
	// content.appendChild(recovered)
	// el.appendChild(content)

	return linha
	
}

const showTotals = () =>{
		// um foreach pra calcular o total de casos
		let nCasos = document.querySelectorAll('.casos')
		let totalCasos = 0
			for (let i = 0; i < nCasos.length; i++) {
					let valor = parseFloat(nCasos[i].textContent)
					totalCasos += valor // ou totalCasos += valor
				}
		// console.log(totalCasos)
	
		// um foreach pra calcular o total de mortes
		let nMortes = document.querySelectorAll('.mortes')
		let totalMortes = 0
			for (let i = 0; i < nMortes.length; i++) {
					let valor = parseFloat(nMortes[i].textContent)
					totalMortes += valor // ou totalMortes += valor
				}
		// console.log(totalMortes)
	
		// um foreach pra calcular o total de mortes
		let nRecuperados = document.querySelectorAll('.recuperados')
		let totalRecuperados = 0
			for (let i = 0; i < nRecuperados.length; i++) {
					let valor = parseFloat(nRecuperados[i].textContent)
					totalRecuperados += valor // ou totalRecuperados += valor
				}
		// console.log(totalRecuperados)
		const cards = document.querySelector('#cards')
	
		cards.innerHTML += '<div class="card card-status card-casos"> <h1>'
		+ totalCasos.toLocaleString() +
		'</h1> <h5>Total Cases </h5> </div>'
	
		cards.innerHTML += '<div class="card card-status card-mortes"> <h1>'
		+ totalMortes.toLocaleString() +
		'</h1> <h5>Total Deaths </h5> </div>'
	
		cards.innerHTML += '<div class="card card-status card-recuperados"> <h1>'
		+ totalRecuperados.toLocaleString() +
		'</h1> <h5>Total Recovered </h5> </div>'

}

const sortByCountry = () => {
	
	countries.sort((a, b) => {
		if (a.country < b.country)
			return -1;
		if (a.country > b.country)
			return 1;
		return 0;
	})
	
}
const sortByCases = () => {
	
	countries.sort((a, b) => {
		if (a.cases > b.cases)
			return -1;
		if (a.cases < b.cases)
			return 1;
		return 0;
	})
	
}
const sortByDeaths = () => {
	
	countries.sort((a, b) => {
		if (a.deaths > b.deaths)
			return -1;
		if (a.deaths < b.deaths)
			return 1;
		return 0;
	})
	
}
const sortByRecovered = () => {
	
	countries.sort((a, b) => {
		if (a.recovered > b.recovered)
			return -1;
		if (a.recovered < b.recovered)
			return 1;
		return 0;
	})
	
}

const displayCountries = (sortByCountry = false) => {
	
	if (window.scrollY > 130) {
		scroll({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		})
	}
	
	const container = document.querySelector('.body-tabela')
	const alphabet = document.querySelector('.alphabet')
	
	container.innerHTML = ''
	if (sortByCountry) {
		alphabet.style.display = 'block'
	} else {
		alphabet.style.display = 'none'
	}
	let letter = ''
	countries.forEach( country => {
		if (sortByCountry && country.country.charAt(0) != letter) {
			letter = country.country.charAt(0)
			bookmark = document.createElement('span')
			bookmark.id = letter
			container.appendChild(bookmark)
		}
		const item = createItem(country)
		// container.appendChild(item)

	}) 

		

}

fetch( 'https://pomber.github.io/covid19/timeseries.json' )
	.then( response => response.json() )
	.then( data => {
	
		const countryData = Object.keys(data)
		let letter = ''
		countryData.forEach( country => {
			
			const latestData = data[country][data[country].length - 1]
			const yesterdaysData = data[country][data[country].length - 2]
			
			const thisCountry = {
				country: country,
				cases: latestData.confirmed,
				deaths: latestData.deaths,
				recovered: latestData.recovered,
				yd_cases: yesterdaysData.confirmed,
				yd_deaths: yesterdaysData.deaths,
				yd_recovered: yesterdaysData.recovered
			}
			
			countries.push(thisCountry)
			
		})
	
		sortByCountry()
		
		const alphabet = document.querySelector('.alphabet-inner')
		countries.forEach( country => {
			if (country.country.charAt(0) != letter) {
				letter = country.country.charAt(0)
				const bookmarkEl = document.createElement('div')
				const bookmark = document.createElement('a')
				bookmark.href = `#${letter}`
				bookmark.innerHTML = letter
				bookmarkEl.appendChild(bookmark)
				alphabet.appendChild(bookmarkEl)
			}
		})	
	
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(e.target.getAttribute('href')).scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				})
			})
		})
	
		displayCountries(true)

		showTotals()
	
	})