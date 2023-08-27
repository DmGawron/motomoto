
import {cars} from '../js/carsbackend.js'


const brandInput = document.querySelector('#brand--input')
const carBodyTypeInput = document.querySelector('#type--input')
const priceFromInput = document.querySelector('#price-from--input')
const priceToInput = document.querySelector('#price-to--input')
const fuelTypeInput = document.querySelector('#fuel--input')
const carYearFromInput = document.querySelector('#year-from--input')
const carYearToInput = document.querySelector('#year-to--input')
const mileageFromInput = document.querySelector('#mileage-from--input')
const mileageToInput = document.querySelector('#mileage-to--input')
const modelInput = document.querySelector('#model--input')
const generationInput = document.querySelector('#generation--input')

// const resultsBtn = document.querySelector('#btn--show-results')
const resultsBtn = document.querySelector('.show-offers')

const generatedOffersSide = document.querySelector('.generated-offers')
const carsCounterSpan = document.querySelector('.announcements__number')

//////////zmienne css
let modelInputCss = document.querySelector('.model .input-btn-container .long')
let modelBtnCss = document.querySelector('.model .input-btn-container .btn-arrow')
const generationInputCss = document.querySelector('.generation .input-btn-container .long')
let generationBtnCss = document.querySelector('.generation .input-btn-container .btn-arrow')
let body = document.querySelector('body')
const brandUlList = document.querySelector('.brand-ul')
const brandListLi = document.querySelectorAll('.brand-ul li')
const carBodyTypeUlList = document.querySelector('.car-body-ul')
const carBodyTypeLi = document.querySelectorAll('.car-body-ul li')
const fuelTypeUlList = document.querySelector('.fuel-type-ul')
const fuelTypeLi = document.querySelectorAll('.fuel-type-ul li')
//zmienna globalna przechowujaca obiekty z markami samochodow ktore pasuja z inputem
const priceToUlList = document.querySelector('.price-to-ul')
const priceToLi = document.querySelectorAll('.price-to-ul li')
const priceFromUlList = document.querySelector('.price-from-ul')
const priceFromLi = document.querySelectorAll('.price-from-ul li')

const mileageFromUlList=document.querySelector('.mileage-from-ul')
const mileageFromLi = document.querySelectorAll('.mileage-from-ul li')
const mileageToUlList = document.querySelector('.mileage-to-ul')
const mileageToLi = document.querySelectorAll('.mileage-to-ul li')
const yearFromUlList = document.querySelector('.year-from-ul')
const yearFromLi = document.querySelectorAll('.year-from-ul li')
const yearToUlList = document.querySelector('.year-to-ul')
const yearToLi = document.querySelectorAll('.year-to-ul li')
// //zmienna z usunietymi duplikatami
// let removeDuplicatesArr 

//zmienna dynamiczna ze wszystkimi danymi
let currentCars = cars
let offersHTML = ''

//tworzenie ogłoszeń w html
const generateOffersHTML = function(car) {

   

    offersHTML +=  `
    
    <div class="offer">
    <div class="offer-img">
        <img src= ${car.img} alt="">
    </div>

    <div class="card-details-container">

        
        <div class="offer-car-details">
        <h3>${car.brand} ${car.model}</h3>
        <div class="offer-car-parameters">
            <span class="car-year">${car.year}</span>
            <span class="car-mileage">${car.mileage} km</span>
            <span class="car-capacity">${car.capacity} cm3</span>
            <span class="car-fuel">${car.fuel}</span>
        </div>
        <div class="car-location"><i class="fa-solid fa-location-dot"></i> ${car.city}</div>
        </div>
        
        <div class="car-price-and-financing">
            <span class="car-price">${car.price} PLN</span>
            <p class="car-price-rating">Powyżej średniej <i class="fa-regular fa-chart-bar"></i> </p>
            <p class="financing">Już od <span class="financing-installment">777 PLN</span></p>
            <p class="check-financing">Sprawdź możliwość finansowania</p>
            <div class="follow">
                <i class="fa-regular fa-heart"></i>
                Obserwuj
                <span class="animated-line"></span>
            </div>
        </div>
    </div>
</div> `

// generateOffersHTML.append(offersHTML)
generatedOffersSide.insertAdjacentHTML('beforeend',offersHTML)
}

function saveToStorage () {
    localStorage.setItem('offer', JSON.stringify(currentCars));
}

// generatedOffersSide.innerHTML = offersHTML

resultsBtn.addEventListener('click', function() {
    console.log(currentCars);
    currentCars.forEach(car => generateOffersHTML(car))
    // console.log(car);
    // currentCars = JSON.parse(localStorage.getItem('offer'))
})


// licznik ogłoszen na przycisku 
const countCars = function () {
    return carsCounterSpan.textContent = currentCars.length
}
countCars()

////////FUNKCJE FILTRUJACE I POBIERAJACE DANE Z INPUTA

 // pokazanie wybranych modeli pojazdu
 const showSelectedModels = () => {
    const typedModels = modelInput.value.toLowerCase()

    if(brandInput.value === '') return
    currentCars = currentCars.filter(m => m.model.toLowerCase() == typedModels)

    generationInputCss.classList.remove('not-active')
     generationInputCss.classList.add('active')
     generationBtnCss.classList.remove('not-active')
     generationBtnCss.classList.add('active')
    console.log(currentCars);
    countCars()
    return currentCars
 }
 
  //cena od 
  const showPriceFrom = () => {
     const typedPriceFrom = parseFloat(priceFromInput.value) * 1000
 
     currentCars = currentCars.filter(p => p.price >= typedPriceFrom)
     countCars()
     
     console.log(currentCars);
    //  saveToStorage()
     return currentCars
 }

 ///cena do
 const showPriceTo = () => {
     const typedPriceTo = parseFloat(priceToInput.value) * 1000
     
     currentCars = currentCars.filter(p => p.price <= typedPriceTo)
     countCars()
     
     console.log(currentCars);
     return currentCars
    }
    
 //rok produkcji od
 const showYearFrom = () => {
     const typedYearFrom = +carYearFromInput.value.toLowerCase()
 
    currentCars = currentCars.filter(y => y.year >= typedYearFrom)
    countCars()
    console.log(currentCars.filter(y => y.year >= typedYearFrom));

     return currentCars
    
 }

 //rok produkcji do
 const showYearTo = () => {
     const typedYearTo = +carYearToInput.value.toLowerCase()
 
     currentCars = currentCars.filter(y => y.year <= typedYearTo)
     countCars()
     console.log(currentCars.filter(y => y.year <= typedYearTo));
     return currentCars
    
 }
 
 //przebied od 
 const showMileageFrom = () => {
     const typedMileageFrom = parseFloat(mileageFromInput.value) * 1000
     currentCars =currentCars.filter(y => y.mileage >= typedMileageFrom)

     countCars()
     console.log(currentCars.filter(y => y.mileage >= typedMileageFrom));
     console.log(typedMileageFrom);
     return currentCars
 }

 //przebied do
 const showMileageTo = () => {
     const typedMileageTo = parseFloat(mileageToInput.value) * 1000
     currentCars = currentCars.filter(y => y.mileage <= typedMileageTo)
     countCars()
     
     console.log(currentCars.filter(y => y.mileage <= typedMileageTo));
     console.log(typedMileageTo);
     return currentCars
    }
    
    // pokazanie wybranych marek samochodow
    const showSelectedBrands = function(e) {
        
        const clickedBrand = e.target.textContent
        if(clickedBrand == 'Wybierz') return currentCars
        
        currentCars = currentCars.filter(b => clickedBrand.toLowerCase() == b.brand.toLowerCase())
    
       
        if(!currentCars) return
        console.log(currentCars);
    
        modelInputCss.classList.remove('not-active')
        modelInputCss.classList.add('active')
        modelBtnCss.classList.remove('not-active')
        modelBtnCss.classList.add('active')
       
        countCars()
     }
    
    //typ nadwozia
    const showBodyType = (e) => {
        const clickedBodyType = e.target.textContent.toLowerCase()
        
        currentCars = currentCars.filter(b => b.bodyType.toLowerCase() == clickedBodyType)
        
        countCars() 
        
        console.log(currentCars);
        return currentCars
    }

    // pokazanie wybranego rodzaju paliwa
    const showSelectedFuelType = function(e) {
        const clickedFuelType = e.target.textContent.toLowerCase()
 
    currentCars = currentCars.filter(f => clickedFuelType == f.fuel.toLowerCase())
   
    if(!currentCars) return
    console.log(currentCars);
    countCars()

    return  currentCars
 }


/////////////////////////////////////////////////////////

//wyszukiwarka
const searchEngine = (e,list) => {
    const inputText = e.target.value.toLowerCase()

    list.forEach(li => {
        const liContent = li.textContent.toLowerCase()
        
        if(liContent.indexOf(inputText) !== -1) {
            li.style.display = 'block'
        } else {
            li.style.display = 'none'
        }
    }) 
    
    console.log(e.target.value);
}

// //wyszukiwarka dla roku auta od i do
// const searchEngineForCarYear = (e,list) => {
//     const inputText = e.target.value

//     list.forEach(li => {
//         const liContent = li.textContent
        
//         if(liContent.indexOf(inputText) !== -1) {
//             li.style.display = 'block'
//         } else {
//             li.style.display = 'none'
//         }
//     }) 
    
//     console.log(e.target.value);
// }

//odpalenie wyszukiwarki na inpucie
fuelTypeInput.addEventListener('keyup',(e) =>{ 
    searchEngine (e, fuelTypeLi)
})

//odpalenie wyszukiwarki na inpucie
brandInput.addEventListener('keyup',(e) =>{ 
    searchEngine (e, brandListLi)
})
//odpalenie wyszukiwarki na inpucie
carBodyTypeInput.addEventListener('keyup',(e)=> {
    searchEngine(e, carBodyTypeLi)
}) 
//odpalenie wyszukiwarki na inpucie
priceToInput.addEventListener('keyup',(e)=> {
    searchEngine(e, priceToLi)
 }) 

 //odpalenie wyszukiwarki na inpucie
priceFromInput.addEventListener('keyup',(e)=> {
    searchEngine(e, priceFromLi)
 })

//odpalenie wyszukiwarki na inpucie
 carYearFromInput.addEventListener('keyup',(e)=> {
    searchEngine(e, yearFromLi)
 })

 //odpalenie wyszukiwarki na inpucie
 carYearToInput.addEventListener('keyup',(e)=> {
    searchEngine(e, yearToLi)
 })

//odpalenie wyszukiwarki na inpucie
 mileageFromInput.addEventListener('keyup',(e)=> {
    searchEngine(e,mileageFromLi)
 })

 //odpalenie wyszukiwarki na inpucie
 mileageToInput.addEventListener('keyup',(e)=> {
    searchEngine(e,mileageToLi)
 })



 /////////LISTENERY ZAMIENIANIE TEKSTU Z LI DO INPUTA I WYSZUKUJACE SAMOCHODY WYBRANE
 
//rodzaj paliwa pobrany z ul listy po kliknieciu na wybrany li
fuelTypeUlList.addEventListener('click', (e) => {
    fuelTypeInput.value = e.target.textContent
    showSelectedFuelType(e)
})


// cena od pobrana z ul listy po kliknieciu na li
priceFromUlList.addEventListener('click', (e) => {
    priceFromInput.value = e.target.textContent
    // showSelectedPriceFrom(e,priceFromUlList)
    showPriceFrom()
    // currentCars = cars
})

// cena do pobrana z ul listy po kliknieciu na li
priceToUlList.addEventListener('click', (e) => {
priceToInput.value = e.target.textContent
showPriceTo()
// currentCars = cars
})

// rok produkcji od pobrana z ul listy po kliknieciu na li
yearFromUlList.addEventListener('click', (e) => {
carYearFromInput.value = e.target.textContent
showYearFrom()
// currentCars = cars
})
// rok produkcji do pobrana z ul listy po kliknieciu na li
yearToUlList.addEventListener('click', (e) => {
carYearToInput.value = e.target.textContent
showYearTo()
// currentCars = cars
})

// przebieg od pobrana z ul listy po kliknieciu na li
mileageFromUlList.addEventListener('click', (e) => {
    mileageFromInput.value = e.target.textContent
    showMileageFrom()
    // currentCars = cars
})

// przebieg do pobrana z ul listy po kliknieciu na li
mileageToUlList.addEventListener('click', (e) => {
    mileageToInput.value = e.target.textContent
    showMileageTo()
    // currentCars = cars
})

//rodzaj nadwozia  pobrany z ul listy po kliknieciu na li
carBodyTypeUlList.addEventListener('click', (e) => {
    carBodyTypeInput.value = e.target.textContent
    showBodyType(e)
    currentCars = cars
})

 // marka pojazdu pobrana z ul listy po kliknieciu na li
brandUlList.addEventListener('click', (e) => {
    brandInput.value = e.target.textContent
    showSelectedBrands(e)
    currentCars = cars ///////////////////////eksperyment

})


///FUNKCJE I LISTENERY POKAZUJACE LISTE PO KLIKNIECIU NA INPUT

//ogólna funkcja wyświetlająca liste po kliknięciu na input 
const showList = function(e,input, list) {
    
   let uls = document.querySelectorAll('.details ul') 
    if(e.target === input) {
        uls.forEach(el => el.classList.add('list-hidden'))
        list.classList.remove('list-hidden')
        list.classList.add('list-onclick')
    } 
}

//pokazanie listy rodzaju paliw
fuelTypeInput.addEventListener('click', function(e) {
    showList(e, fuelTypeInput, fuelTypeUlList)
})


//pokazanie listy z z typem nadwozia
carBodyTypeInput.addEventListener('click', function(e) {
    showList(e, carBodyTypeInput, carBodyTypeUlList)
})

//pokazanie listy z markami aut 
brandInput.addEventListener('click', function(e) {
    showList(e, brandInput, brandUlList)
})

//pokazanie listy z cena od
priceFromInput.addEventListener('click',(e) => {
     showList(e, priceFromInput, priceFromUlList)
})

//pokazanie listy z cena do   
priceToInput.addEventListener('click',(e) => {
    showList(e, priceToInput, priceToUlList)
    })
    
    //pokazanie listy z przebiegiem od
mileageFromInput.addEventListener('click',(e) => {
    showList(e, mileageFromInput, mileageFromUlList)
    })

    //pokazanie listy z przebiegiem do
   mileageToInput.addEventListener('click',(e) => {
       showList(e, mileageToInput, mileageToUlList)
   })

 //pokazanie listy z rocznikiem aura od
carYearFromInput.addEventListener('click',(e) => {
     showList(e, carYearFromInput, yearFromUlList)
})

//pokazanie listy z rocznikiem aura do
carYearToInput.addEventListener('click',(e) => {
    showList(e, carYearToInput, yearToUlList)
})



 //ogolna funkcja chowajaca ul liste////////////////
 const hideList = function(e, list) {
    // if(!e.target.classList.contains('list-hidden'))
        if(!e.target.closest('input'))  
        {
        list.classList.add('list-hidden')
        list.classList.remove('list-onclick')
        }
    }

////chowanie listy po kliknieciu na window
document.addEventListener('click', function(e) {
    hideList(e, carBodyTypeUlList)
    hideList(e, brandUlList)
    hideList(e, priceFromUlList)
    hideList(e, priceToUlList)
    hideList(e, yearFromUlList)
    hideList(e, yearToUlList)
    hideList(e, mileageToUlList)
    hideList(e, mileageFromUlList)
    hideList(e, fuelTypeUlList)
})




mileageFromInput.addEventListener('change', showMileageFrom)
mileageToInput.addEventListener('change', showMileageTo)
carYearFromInput.addEventListener('change', showYearFrom)
carYearToInput.addEventListener('change', showYearTo)
priceFromInput.addEventListener('change', showPriceFrom)
priceToInput.addEventListener('change', showPriceTo)
fuelTypeInput.addEventListener('change', showSelectedFuelType)
modelInput.addEventListener('change', showSelectedModels)





 //sprawdzenie i usuniecie duplikatow
//  const checkDuplicates = function() {
//      let flating = foundCarsArr.flat(1)
//      console.log(flating);
//     removeDuplicatesArr = flating.filter((item, index) => flating.indexOf(item) !== index)
//     console.log(removeDuplicatesArr);
//     return removeDuplicatesArr 
//  }


// // pokazanie wybranych marek samochodow
// const showSelectedBrands = function() {
//    const typedBrand = brandInput.value.toLowerCase()

//     foundCars = currentCars.filter(b => typedBrand == b.brand.toLowerCase())
//     //dodanie zfiltrowanych elementów
//     if(foundCars.length > 0)  foundCarsArr.push(foundCars)
//    console.log(foundCars);

//     if(!foundCars) return
//     console.log(foundCarsArr);
//    return  foundCars
// }

// // pokazanie wybranych rodzaju paliwa
// const showSelectedFuelType = function() {
//     const typedFuelType = fuelTypeInput.value.toLowerCase()
 
//     const matchFuelType = currentCars.filter(f => typedFuelType == f.fuel.toLowerCase())
//     console.log(matchFuelType);
 
//     //dodanie zfiltrowanych elementów
//     if(matchFuelType.length > 0) foundCarsArr.push(matchFuelType)

//      if(!matchFuelType) return
 
//     return  matchFuelType
//  }

//  // pokazanie wybranych modeli pojazdu
//  const showSelectedModels = () => {
//     const typedModels = modelInput.value.toLowerCase()

//     const matchModels = foundCars.filter(m => m.model.toLowerCase() == typedModels)

//     //dodanie zfiltrowanych elementów
//     if(matchModels.length > 0) foundCarsArr.push(matchModels)
//     console.log(matchModels);
//     return matchModels
//  }

//  //cena od 
//  const showPriceFrom = () => {
//     const typedPriceFrom = +priceFromInput.value.toLowerCase()

//     const matchPriceFrom = currentCars.filter(p => p.price >= typedPriceFrom)

//     //dodanie zfiltrowanych elementów
//     if(matchPriceFrom.length > 0) foundCarsArr.push(matchPriceFrom)
//     console.log(matchPriceFrom);
//     return matchPriceFrom
// }
// ///cena do
// const showPriceTo = () => {
//     const typedPriceTo = +priceToInput.value.toLowerCase()

//     const matchPriceTo = currentCars.filter(p => p.price <= typedPriceTo)

//     //dodanie zfiltrowanych elementów
//     if(matchPriceTo.length > 0) foundCarsArr.push(matchPriceTo)
//     console.log(matchPriceTo);
//     return matchPriceTo
// }
// //rok produkcji od
// const showYearFrom = () => {
//     const typedYearFrom = +carYearFromInput.value.toLowerCase()

//    const matchYearFrom = currentCars.filter(y => y.year >= typedYearFrom)
//     //dodanie zfiltrowanych elementów
//     if(matchYearFrom.length > 0) foundCarsArr.push(matchYearFrom)
// console.log(currentCars.filter(y => y.year >= typedYearFrom));
//     return matchYearFrom
   
// }

// //rok produkcji do
// const showYearTo = () => {
//     const typedYearTo = +carYearToInput.value.toLowerCase()

//     const matchYearTo = currentCars.filter(y => y.year <= typedYearTo)
//     //dodanie zfiltrowanych elementów
//     if(matchYearTo.length > 0) foundCarsArr.push(matchYearTo)

//     console.log(currentCars.filter(y => y.year <= typedYearTo));
//     return matchYearTo 
   
// }

// //przebied od 
// const showMileageFrom = () => {
//     const typedMileageFrom = +mileageFromInput.value.toLowerCase()
//     const matchMileageFrom = currentCars.filter(y => y.mileage >= typedMileageFrom)
//     //dodanie zfiltrowanych elementów
//     if(matchMileageFrom.length > 0) foundCarsArr.push(matchMileageFrom)

//     console.log(currentCars.filter(y => y.mileage >= typedMileageFrom));
//     return matchMileageFrom
// }

// //przebied do
// const showMileageTo = () => {
//     const typedMileageTo = +mileageToInput.value.toLowerCase()
//     const matchMileageTo = currentCars.filter(y => y.mileage <= typedMileageTo)
//     //dodanie zfiltrowanych elementów
//     if(matchMileageTo.length > 0) foundCarsArr.push(matchMileageTo)
//     console.log(currentCars.filter(y => y.mileage <= typedMileageTo));
//     return matchMileageTo
// }
// //sprawdzenie i usuniecie duplikatow
// const checkDuplicates = function() {
//     let flating = foundCarsArr.flat(1)
//     console.log(flating);
//    removeDuplicatesArr = flating.filter((item, index) => flating.indexOf(item) !== index)
//    console.log(removeDuplicatesArr);
//    return removeDuplicatesArr 
// }
