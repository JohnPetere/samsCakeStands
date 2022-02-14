 console.log("index.js has loaded");
 import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfid-old';
// import{vacationRental} from './templates/vacationRental'



async function pageStart(){
     
    const cakeStandTemplate = document.querySelector("#shop-item-card").cloneNode(true)
    cakeStandTemplate.classList.remove('hidden');

    const shopItemslist = document.querySelector('#shop-items');

    const shopItemsRef = dataRef(db, 'cake-stands/');
    const cakeStandsSnapShot = await get(shopItemsRef);
    const data = cakeStandsSnapShot.val();
    console.log(data)
    document.querySelector('#delete');
    const addCakeStands = function(){
        const cards = Object.values(data).map(cakeStand=>{
    
           
            console.log(cakeStand.title)
            let cakeStandHtml = cakeStandTemplate.cloneNode(true);
    
            let title = document.createElement('p')
            title.textContent = cakeStand.title
            const titleTag= cakeStandHtml.querySelector('#title')
            titleTag.appendChild(title)
            
            let price = document.createElement('p')
            price.textContent ="$"+cakeStand.price+ ".00"
            const priceTag= cakeStandHtml.querySelector('#price')
            priceTag.appendChild(price)
            // cakeStandHtml.append(cakeStandHtml)
            // shopItemslist.appendChild(cakeStandHtml.cloneNode(true)) // THIs works to add..
    
            let radius = document.createElement('p')
            radius.textContent = "Radius: " + cakeStand.radius +" in"
            const radiusTag= cakeStandHtml.querySelector('#radius')
            radiusTag.appendChild(radius)
            // cakeStandHtml.append(cakeStandHtml)
            
            const cakeStandImage = cakeStandHtml.querySelector('#cakeStandImgID')
            cakeStandImage.src = cakeStand.urlPath;
            shopItemslist.appendChild(cakeStandHtml.cloneNode(true))
        });
       
        
    }
    const deleteCake = function(e){
        console.log("delete CAKE STAND")
    }
    document.querySelector('#delete-button').addEventListener('click',deleteCake)
    deleteCake();
    addCakeStands();
    
    // shopItemslist.append(cards)
    // data.toList()
 
// TO DO 

// Select cakeStand Template
// select shopItemsList

// FOR EACH cake-stand, Copy Data into template
        // Append Cake-stand to shopItems-List




    // console.log(data)

}

pageStart()