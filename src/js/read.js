console.log("read.js is loaded")
import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import{vacationRental} from './templates/vacationRental'

async function pageInit(){
    console.log("pageInit() loaded")
    const rentalRef = dataRef(db, 'rentals/');
    const rentalSnapShot = await get(rentalRef);
    const data = rentalSnapShot.val();
    // ES Modules For The Render Function
    console.log(data)
    // data you need to know it's structure
    //obj.keys obj.values object.entries
    // console.log(object)

    //document.body.append(Object.keys(data));
    //console.log(Object.values(data));
     const cards = Object.values(data).map(rental=>{
         const card = vacationRental(rental);
         document.querySelector('main').append(card);
        return vacationRental(rental)
    })
}

pageInit()
