const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0eec35f7a4msh39b6471babbf2d8p119ec2jsn905a80563eba',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};




//https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright





const getMeaning = (word)=> {
    // city.innerHTML = response.city
    wordName.innerHTML = word
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)


        meaning.innerHTML = response.definition
        




        

    })
    .catch(err => console.error(err));

}

submit.addEventListener('click', (e) => {
    e.preventDefault()
   getMeaning(word.value)
})



getMeaning('curious')