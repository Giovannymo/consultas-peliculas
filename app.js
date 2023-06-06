const $table = document.getElementById("listMovies");
const $tableBody = document.getElementById("tableBody")
const $tableBodySearch = document.getElementById("tableBodySearch")

const $btnReset = document.getElementById("btnReset")
const $btnEnviar = document.getElementById("btnEnviar");
const $btnRemove = document.querySelector('.remove')
const $btnSearch = document.getElementById('btnSearch')
const $inputSearch = document.getElementById('searchInput')

const $form = document.getElementById("formMovies");

const $title = document.getElementById("title")
const $gender = document.getElementById("gender")
const $duration = document.getElementById("duration")
const $director = document.getElementById("director")
const listMovies = []

const movies = new Map();
let count = 0;

$form.addEventListener('click', save);
$table.addEventListener('click', remove);
$btnSearch.addEventListener('click', searcher);
$btnReset.addEventListener('click',reset)

function reset(){
    
    
    if($inputSearch.value){
        while($tableBodySearch.hasChildNodes()){
            $tableBodySearch.removeChild($tableBodySearch.firstChild)
        } 
        $inputSearch.value = ''
        $tableBody.classList.toggle("hidden")
        $tableBodySearch.classList.toggle("hidden")
        $btnSearch.disabled=false
    }

}


function save(e){
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
        listMovies.push(movies)
        showTable();
}

function searcher(){
        const fragment = new DocumentFragment();
        const titlesMovies = document.getElementsByClassName('titleMovie')
        
        for(const element of titlesMovies){
            if(element.textContent === $inputSearch.value){
                console.log("Los encontre hps");
                console.log(element.parentNode);
                fragment.appendChild(element.parentNode)

            }
            $tableBodySearch.appendChild(fragment)
        }
        // if($inputSearch.value){
        //     const hijos = $tableBody.childNodes;
        //     $tableBody.removeChild($tableBody.firstChild)
        //     hijos.forEach(elements =>{
        //         const columnas = elements.childNodes
        //         console.log(columnas);
        //     })
        // }
        $tableBody.classList.toggle("hidden")
        $tableBodySearch.classList.toggle("hidden")
        $btnSearch.disabled=true
                
}


function remove(e){
    e.preventDefault();
    const btnSelect = e.target.classList[2];
    if(btnSelect === 'remove'){
        $tableBody.removeChild(e.target.parentNode)
    }
}

function showTable(){
    const fragment = new DocumentFragment()

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
            if(key === 'title'){
                columnMovie.setAttribute('class', 'titleMovie')
            }
            rowMovie.appendChild(columnMovie)
        }
    }
    const btnRemove = document.createElement('button')
    btnRemove.textContent= "Eliminar"
    btnRemove.setAttribute("class", "btn btn-danger remove")
    rowMovie.appendChild(btnRemove)
    
    
    fragment.appendChild(rowMovie)
    $tableBody.appendChild(fragment)    


}