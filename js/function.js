function findFirstLastPosition_Of_SameElement(values, element){        
    let arr = [];
	let firstAndLastPosition = []
    for (var i = 0; i < values.length; i++){ 
        if(values[i] === element){ 
                 arr.push(i);
            }
    }
	if (arr.length >= 2){ 
        firstAndLastPosition = [arr[0], arr[arr.length - 1]]
	} if (!arr || arr.length < 2){ 
            throw new Error('there is not a first and last position for the element', element)
	}
	return firstAndLastPosition
}

function sortedSquaredArray(values){ 
	let itemsResult = [];
	if(values.length < 1){ 
		throw new Error('you must fill a array with elements')
	}else {
		for (var i = 0; i < values.length; i++){ 
			let valueItem = values[i]
			itemsResult.push(Math.pow(valueItem,2))
		} 
		itemsResult.sort(function(a,b){return a > b})
	}
	return itemsResult
}

function SumBy(values, er){ 
    let items = [];
    let sum = 0
    for (var i = 0; i < values.length; i++){ 
    	if(sum < er){
            sum += values[i];
            items.push(i)
        }
    }
 	return [items, sum]
}

function findDublicata(values){ 
    let iff;
    for (var i = 0; i < values.length; i++){ 
             for (var j = 0; j < values.length; j++){ 
                        if (values[i] === values[j]){ 
                                iff = values[i]
                                 break;
                        }
            }
    }
return iff
}

// function for checkboxs


let dd = document.getElementsByClassName('cheh')
let er = []
for (var i = 0; i < dd.length; i++){ 
  dd[i].addEventListener('click', dddd)
 }
  function dddd(){ 
  for (var j = 0; j < dd.length; j++){
  let dze = er.includes(dd[j].parentNode.parentNode.id)
    if (dd[j].checked && !dze){ 
          er.push(dd[j].parentNode.parentNode.id)
       }
  else  if (!dd[j].checked && dze){ 
       		let o = er.filter(et => et !== dd[j].parentNode.parentNode.id)
            er = o;
       }
     }
     console.log(er)
  }

let checkall = document.getElementById("checkall")
checkall.addEventListener('click', function(){ 
		if (this.checked){
          for (let check of dd){ 
              check.checked = true
          }
          dddd()
        } else{ 
        	for (let check of dd){ 
                check.checked = false
            }
        }
 })