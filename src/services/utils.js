const http = {
  get: (url) => fetch(url).then(resp => resp.json()),
};

export default http;
export const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=cd0882cb`;


