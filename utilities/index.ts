export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'aedc3faee5msh1cc255bbe1c3e15p16c9bfjsn5cebfd25d23a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
    });
    
    const result  = await response.json();

    return result;
    
}

