export default class NewsApiService {
    constructor(){

    };

    fetchArticles(){
        const options = {
            headers: {
                Authorization: '1165fa6bad834f1c94ea989cebfb1d30',
            },
        }

        const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`
    
        fetch(url, options)
        .then(r=>r.json())
        .then(console.log);
    };

};

