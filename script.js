let article = "pizza";

searchNyTimesArticles(article);

function searchNyTimesArticles(search) {

    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    // api-key: hKauiyFtFuXV18MsKZqs8HM1pOcwpbAD
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=hKauiyFtFuXV18MsKZqs8HM1pOcwpbAD"

    // "https:api.nytimes.com/svc/search/v2/articlesearch/" + article + "&api-key=hKauiyFtFuXV18MsKZqs8HM1pOcwpbAD;"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

    })
}

// Event handler for user submitting search button
$("#search").on("submit", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the article input
    var article = $("#article-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchNyTimesArticles(article);
});