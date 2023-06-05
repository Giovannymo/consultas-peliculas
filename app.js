const $table = document.getElementById("listMovies");
const $tableBody = document.getElementById("tableBody")
const $btnEnviar = document.getElementById("btnEnviar");

const $form = document.getElementById("formMovies");
const $title = document.getElementById("title")
const $gender = document.getElementById("gender")
const $duration = document.getElementById("duration")
const $director = document.getElementById("director")

const movies = new Map();
let count = 0;

$form.addEventListener('click', enviar);

function enviar(e){
    e.preventDefault();
    const btnSelect = e.target;

    if(btnSelect.id === 'btnEnviar'){
        addMovie();
    }

}

function addMovie(){
    count = count+1;
        movies.set('id', count)
        movies.set('title',$title.value);
        movies.set('gender',$gender.value);
        movies.set('duration',$duration.value);
        movies.set('director',$director.value);
        showTable();
}

function showTable(){
    const rowMovie = document.createElement('tr')
    const idMovie = document.createElement('th')
    idMovie.setAttribute('scope', 'row')
    idMovie.textContent = movies.get('id')
    rowMovie.appendChild(idMovie)

    for(const [key, value] of movies){
        if(key !== 'id'){
            const columnMovie = document.createElement('td')
            columnMovie.textContent = value
            columnMovie.setAttribute("class", "p-2" )
            rowMovie.appendChild(columnMovie)
        }
    }
    const btnRemove = document.createElement('button')
    btnRemove.textContent= "Eliminar"
    btnRemove.setAttribute("class", "btn btn-danger")
    btnRemove.setAttribute("id", movies.get('id'))
    rowMovie.appendChild(btnRemove)

    $tableBody.appendChild(rowMovie)    


}