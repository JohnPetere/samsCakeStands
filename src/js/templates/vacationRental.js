
/**
 * templating
 * template literals settup
 * 
 *  <figure>
        <img src="static/images//jimbits-vacations-19.jpg" width="160" alt="rental property">
            <figcaption> <h2>City</h2></figcaption>
        </figure>

        <footer>
            <button>edit</button>
            <button>delete</button>
        </footer>
 */
function vacationRental(rental=null){
    const template = `
    <aside class="vacation-rental">

        <figure>
        <img src="static/images//jimbits-vacations-19.jpg" width="160" alt="rental property">
            <figcaption> <h2>City</h2></figcaption>
        </figure>

        <footer>
            <button id="edit">edit</button>
            <button id="delete">delete</button>
        </footer>

    </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0];
    addVacationControls(element)
    return element;
}
function addVacationControls(rental){
    rental.querySelector('#edit').addEventListener('click', onEditRental)
}
function onEditRental(e){
    const key = e.target.dataset.key;
    console.log(e.target.dataset.key)
    window.location.assign('update.html');
}
export{vacationRental}