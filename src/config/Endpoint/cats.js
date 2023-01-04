import axios from "config/Axios";


export default {
    // https://api.thecatapi.com/v1/breeds?limit=6&page=1
    // https://api.thecatapi.com/v1/images/:image_id(reference_image_id dari api diatas)
    // https://api.thecatapi.com/v1/breeds/search?q=japan
    // https://api.thecatapi.com/v1/breeds/amau
    // https://api.thecatapi.com/v1/images/search?format=json&limit=10&breed_ids=amau
    search: (data) =>
        axios
            .get(`/breeds/search?q=${data}`)
            .then((res) => res.data),
    limit: (limit, page) =>
        axios
            .get(`/breeds?limit=${limit}&page=${page}`)
            .then((res) => res.data),
    detail: (id) =>
        axios
            .get(`/breeds/${id}`)
            .then((res) => res.data),
}