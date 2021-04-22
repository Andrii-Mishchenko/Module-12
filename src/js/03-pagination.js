import '../css/common.css';
// import articlesTpl from './templates/articles.hbs';
import NewsApiService from './news-sevice';
// import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

let serchQuery = '';

function onSearch(e) {
    e.preventDefault();
    const searchQuery =e.currentTarget.elements.query.value;

    newsApiService.fetchArticles(searchQuery);
}


  function onLoadMore() {
    newsApiService.fetchArticles(searchQuery);
      
  }

