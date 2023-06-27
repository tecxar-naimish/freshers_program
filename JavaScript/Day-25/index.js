let tenMostPopulatedCountries = () => {
    let populationData = Object.keys(countries_data).map((key) => {
        let country = countries_data[key];
        return {
            name: country.name,
            population: country.population,
        }
    }).sort((a, b) => b.population - a.population).slice(0, 10);
    return populationData;
}

console.log('Most Populated Countries.....', tenMostPopulatedCountries());

let tenMostSpokenLanguages = () => {
    let filteredLang = new Set();

    Object.keys(countries_data).forEach((key) => {
        countries_data[key].languages.forEach((lang) => filteredLang.add(lang));
    })

    let languageData = Array.from(filteredLang).reduce((acc, cur) => {
        acc[cur] = {
            language: cur,
            count: 0
        }
        return acc;
    }, {})

    Object.keys(countries_data).map((key) => {
        countries_data[key].languages.map((lang) => {
            if (languageData[lang].language === lang) {
                languageData[lang].count++
            }
        })
    })

    let tenMostSpokenLang = Object.keys(languageData)
        .map((key) => languageData[key]).sort((a, b) => b.count - a.count)
        .slice(0, 10);
    return tenMostSpokenLang;
}

console.log('Most Spoken Languages.....', tenMostSpokenLanguages());

let updateDom = (optionToProcess) => {
    let wrapperElement = document.querySelector('.wrapper');
    wrapperElement.innerHTML = '';

    if (optionToProcess == 'languages') {
        let returnedObject = tenMostSpokenLanguages();

        let briefText = document.querySelector('.brief');
        briefText.innerHTML = '10 Most Spoken Languages in the World';

        // let maxValue = Object.keys(returnedObject).map((key) => {
        //     return returnedObject[key].count;
        // })[0];

        Object.keys(returnedObject).forEach((key) => {
            let componentElement = document.createElement('div');
            componentElement.classList.add('component');

            console.log("Component >>>", componentElement); 
            let language = returnedObject[key].language;
            let countOfLang = returnedObject[key].count;

            componentElement.innerHTML = `
                <p class='description'>${language}</p>
                <progress min='0' max="100" value="${countOfLang}"></progress>
                <p class='count'>${countOfLang}</p>
            `
            wrapperElement.appendChild(componentElement);
        })
    }
    else {
        let returnedObject = tenMostPopulatedCountries();

        let briefText = document.querySelector('.brief');
        briefText.innerHTML = '10 Most Populated Countries in the World';

        let maxValue = Object.keys(returnedObject).map((key) => {
            return returnedObject[key].population
        })[0]

        Object.keys(returnedObject).forEach((key) => {
            let componentElement = document.createElement('div')
            componentElement.classList.add('component')

            let country = returnedObject[key].name;
            let populationOfCountry = returnedObject[key].population;

            componentElement.innerHTML = `
                <p class="description">${country}</p>
                <progress min="0" max="${maxValue}" value="${populationOfCountry}"></progress>
                <p class="count">${populationOfCountry}</p>
            `
            wrapperElement.appendChild(componentElement)
        })
    }
}

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => updateDom(e.target.value))
})


