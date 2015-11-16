const LOADING = 'redditPost/LOADING';
const LOAD_SUCCESS = 'redditPost/LOAD_SUCCESS';
const LOADED = 'redditPost/LOADED';

export let loadRedditPost = function(type) {
    return {
        types: [LOADING, LOAD_SUCCESS, LOADED]
    };
};
