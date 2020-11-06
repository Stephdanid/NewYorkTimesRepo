function searchNyTimesArticles() {

    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    // api-key: hKauiyFtFuXV18MsKZqs8HM1pOcwpbAD
    var queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=hKauiyFtFuXV18MsKZqs8HM1pOcwpbAD;"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);


        // let $container = $(`<div>
        //   <p>artil Name: ${response.name}</p>
        //   <img src="${response.thumb_url}">
        //   <p># of Fans Tracking: ${response.tracker_count}</p>
        //   <p>Upcoming Events: ${response.upcoming_event_count}</p>
        //   <a href="${response.facebook_page_url}">${response.facebook_page_url}</a>
        //   <br>
        //   <a href="https://www.bandsintown.com/a/944">https://www.bandsintown.com/a/944</a>
        //   </div>
        //   `);

        // $("#artist-div").append($container);
    })
}

// Event handler for user clicking the select-artist button
$("#search").on("submit", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var article = $("#artist-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(artist);
});