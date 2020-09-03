
document.onload = fetchItems
document.getElementById('savedata').addEventListener('submit',createItem)
let selectedID
const NeWID = incrementId()
function createItem(e){ 
	var nameOFLamp = document.getElementById('name').value 
	var numberLampOn = Number(document.getElementById('numOn').value)
	var numberLampeOff = Number(document.getElementById('numOff').value)
	var wifi = document.getElementById('wifi')
	var camera = document.getElementById('camera')
	var newElement = { 
		id: NeWID,
		name: nameOFLamp,
		numberLampOn: numberLampOn,
		numberLampeOff: numOffLamp,
		LampTotal: numOnLamp + numOffLamp,
		hasWifi: wifi.checked ? 'Yes' : 'No', 
		hasCamera: camera.checked ? 'Yes' : 'No', 
		createAt: Date.now()
	}
	if (localStorage.getItem('lamps') === null){ 
		let lamps = []
		lamps = [...lamps, newElement]
		localStorage.setItem('lamps', JSON.stringify(lamps))
	} else { 
		let elements = getData()
		if (selectedID){ // Case we want to update a existing element
			let indexOfItem = elements.findIndex(lamp =>  lamp.id === selectedID)
			elements[indexOfItem] = newElement
			localStorage.setItem('lamps', JSON.stringify(elements))
			selectedID = ''
		}else {
			elements = [...elements, newElement]
			localStorage.setItem('lamps', JSON.stringify(elements))
		}
	}
	fetchItems()
	document.getElementById('savedata').reset()
	e.preventDefault();
}

function incrementId(){ 
	let newId
	if (selectedID){ 
		newId = selectedID
	}else{ 
		if ((localStorage.getItem('lamps') === null)){ 
			newId = 1
		}else{ 
			let data = getData()
			if (data.length < 1){ 
				newId = 1
			}else{ 
				let items = getData()
				let sortItems = items.sort((item1, item2) => item2.id - item1.id)
				let maxId  = sortItems[0].id + 1
				newId = maxId
			}
		} 
	}
	return newId
}

function fetchItems(){ 
	let elements = getData()
	if (localStorage.getItem('lamps') !== null){
		let divContainer = document.getElementById('showInformation_Container')
		divContainer.innerHTML = ''
		for (var i = 0; i < elements.length; i++){ 
			divContainer.innerHTML += `<div class=element id=${elements[i].id}> 
									  <h2> ${elements[i].name} </h2>
									  <p><i class= "fas fa-power-off on"></i> : ${elements[i].numberLampOn}  </p>
									  <p><i class= "fas fa-power-off off"></i> : ${elements[i].numberLampeOff} </p>
									  <p> total: ${elements[i].LampTotal}  </p>
									  <p><i class="fas fa-wifi"></i>: ${elements[i].hasWifi} </p>
									  <p><i class="fas fa-camera"></i>: ${elements[i].hasCamera} </p>
									  <div class=changesBut>
									  <a class=update onClick=editItem(${elements[i].id})> Edit </a>
									  <a class=delete onClick=deleteItem(${elements[i].id})> Delete </a>
									  </div>
									  </div>`
									 
		}	
	}
}
fetchItems()
function editItem(id){ 
	selectedID = id
	let elements = getData()
	console.log(selectedID)
	let element = elements.find(element => element.id === selectedID)
	document.getElementById('name').value = element.name
	document.getElementById('numOn').value = element.numberLampOn
	document.getElementById('numOff').value = element.numberLampeOff
	document.getElementById('wifi').checked = element.hasWifi
	document.getElementById('camera').checked = element.hasCamera
}

function deleteItem(id){ 
	let items = getData()
	let newItems = items.filter(item => item.id !== Number(id))
	localStorage.setItem('lamps', JSON.stringify(newItems))
	fetchItems()
}
function getData(){ 
	let lampsData = JSON.parse(localStorage.getItem('lamps'))
	return lampsData
}
