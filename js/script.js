



// 1)
document.querySelector('.promo__adv')
    .querySelectorAll("img")
    .forEach((item) => item.remove());

// 3)

document.querySelector('.promo__bg')
    .style.background = 'url("img/bg.jpg")';

// 4)

const movieDB = {
    movies: [
        "Константин",
        "Жизнь других",
        "Список Шиндлера",
        "Джанго",
        "Достать ножи",

    ],
};

let sortFunc = (arr) => arr.sort();

let arrMovies = movieDB.movies;
let menuFilm = document.querySelector('.promo__interactive-list');

let addForm = document.querySelector('.add');
let inputText = document.querySelector('.adding__input');
let checkBox = document.querySelector('[type = checkBox]');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newFilm = inputText.value;
    let favorite = checkBox.checked;
    if (favorite) {
        alert('Добавлен любимый фильм');
    }
    if (newFilm) {
        arrMovies.push(newFilm)
    }
    sortFunc(arrMovies);
    reMovies();
});


let reMovies = () => {
menuFilm.innerHTML = '';
    sortFunc(arrMovies);
    arrMovies.forEach((item, idx) => {
    if (item.length > 14){
        item = `${item.slice(0, 14)}...`
    }
    menuFilm.innerHTML +=
        `<li class="promo__interactive-item">
${++idx} ${item}
         <div class="delete"></div>
         </li>`;
    });
    document.querySelectorAll('.delete').forEach((el, idx) => {
        el.addEventListener('click', () => {
            el.parentElement.remove();
            arrMovies.splice(idx, 1);
            reMovies();
            addForm.reset()
        })
    } )
};
reMovies();