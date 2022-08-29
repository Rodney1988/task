import axios from "axios";

export const getPeople = async () => {
    const response = await axios.get("https://swapi.dev/api/people/");
    return response.data;
};

export const getPeopleDetails = async detail => {
    const response = await axios.get(`https://swapi.dev/api/people/${detail}`);
    return response.data;
};

export const getPlanets = async () => {
    const response = await axios.get("https://swapi.dev/api/planets/");
    return response.data;
};

export const getPlanetDetails = async detail => {
    const response = await axios.get(`https://swapi.dev/api/planets/${detail}`);
    return response.data;
};

export const getStarships = async () => {
    const response = await axios.get("https://swapi.dev/api/starships/");
    return response.data;
};

export const getStarshipDetails = async detail => {
    const response = await axios.get(
        `https://swapi.dev/api/starships/${detail}`
    );
    return response.data;
};

export const getVehicles = async () => {
    const response = await axios.get("https://swapi.dev/api/vehicles/");
    return response.data;
};

export const getFilms = async () => {
    const response = await axios.get("https://swapi.dev/api/films/");
    return response.data;
};

export const getFilmDetails = async detail => {
    const response = await axios.get(`https://swapi.dev/api/films/${detail}`);
    return response.data;
};

export const getSpecies = async () => {
    const response = await axios.get("https://swapi.dev/api/species/");
    return response.data;
};

export const getSpeciesDetails = async detail => {
    const response = await axios.get(`https://swapi.dev/api/species/${detail}`);
    return response.data;
};
