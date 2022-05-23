document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        const amount = e.target["jokesAmountInput"].value
        fetch (`https://v2.jokeapi.dev/joke/Any?amount= ${amount}`)
    .then(resp => resp.json())
    .then((data) => renderjokes(data.jokes))
    }) 
    // <input type="number" id="jokesAmountInput" value="1" min="1" step="1" />
})  
const renderjokes = function(jokes){
    const jokesContainer = document.querySelector(".jokes-container")
    jokes.forEach(joke => {
        const jokeContainer = document.createElement("div")
        const del = document.createElement("button")
        del.textContent = "delete"
        del.addEventListener("click", (e) => {
        e.target.parentElement.remove()
        })
        if (joke.type === "single"){
            const p = document.createElement('p')
            p.textContent = joke.joke
            jokeContainer.append(p, del)
            jokesContainer.appendChild(jokeContainer)
        }
        else {
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            p1.textContent = joke.setup
            p2.textContent = joke.delivery
            jokeContainer.append(p1, p2, del)
            jokesContainer.appendChild(jokeContainer)
        }
    });
}
 



