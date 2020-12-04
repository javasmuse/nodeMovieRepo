require('dotenv').config();
const axios = require("axios");

const OMDB_API_BASE_URL = "http://www.omdbapi.com";
const SEARCH_KEYWORD = "dog";

axios.get(`${OMDB_API_BASE_URL}/?i=tt3896198&apikey=${process.env.OMDB_KEY}&s=${SEARCH_KEYWORD}`).then((res) => {
    const movies = res.data;
    console.log(movies);

});

// axios.get(``).then(function (res) {