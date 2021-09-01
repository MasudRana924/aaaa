const searchBook = () => {
    const input = document.getElementById('search-input')
    const inputText = input.value
    input.value = ''

    const noResultFound = document.getElementById('no-result')
    noResultFound.innerHTML = ''
    if (inputText === '') {
        // console.log(alert('enter a valid input'))


        const div = document.createElement('div')
        div.innerHTML = `<h3 class="mt-5 text-center text-danger"> Sorry No Result Found!!!</h3>`
        noResultFound.appendChild(div)
    }
    else{

    
    const url = `http://openlibrary.org/search.json?q=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let totalSearch = data.numFound
            document.getElementById('total-search').innerText = `Total Search Result Found : ${totalSearch}`

            displaySearch(data.docs)
        })
    }

}
const displaySearch = books => {
    const displayResult = document.getElementById('display-search')
    displayResult.textContent = ''
    books.forEach(book => {

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card h-100 ">
                         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                            <div class="card-body bg-info text-white">
                             <h3  class="card-title"><span class="text-dark">Title : </span> ${book.title}</h3>
                             <h5> <span class="text-dark">Author : </span> ${book.author_name}</h5>
                             <h6>  <span class="text-dark">Publisher : </span> ${book.publisher}</h6>
                             <p><span class="text-dark">First Publish : </span>${book.first_publish_year}</p>
                       
              </div>
      </div>`
        displayResult.appendChild(div)
    })
}