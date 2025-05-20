const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

function renderCharacters(characters) {
    dataContainer.innerHTML = ''; 
    characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}" />
    `;
    dataContainer.appendChild(characterElement);
    });
}

// Evento para botón Fetch
fetchBtn.addEventListener('click', () => {
    dataContainer.textContent = 'Cargando personajes con Fetch...';
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if (!response.ok) {
        throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        renderCharacters(data.results);
    })
    .catch(error => {
        console.error('Error:', error);
        dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Evento para botón Axios
axiosBtn.addEventListener('click', () => {
    dataContainer.textContent = 'Cargando personajes con Axios...';
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // Axios ya parsea el JSON, sólo tomamos response.data
        renderCharacters(response.data.results);
    })
    .catch(error => {
        console.error('Error:', error);
        dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

