let sportsApi = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=838255f6c9794054b78c48edea16531b";

window
  .fetch(sportsApi)
  .then((sportsData) => {
    sportsData
      .json()
      .then((sports) => {
        console.log(sports.articles);
        let sportsFeed = sports.articles;
        let firstSportsBlock = sports.articles;

        let sportsnewsBlockOne = firstSportsBlock[0];
        document.getElementById("sportsFirstTemplate").innerHTML = `<ul>
             <img src="${sportsnewsBlockOne.urlToImage}" />
             <a href="${sportsnewsBlockOne.url}" target="_blank">
            
             </a>
          </ul>
          `;

        let output = [];
        for (let sport of sportsFeed) {
          output += `
            <ul class="list-group">
             <a href="${sport.url}" target="_blank">
               <li class="text-dark">
              ${sport.title}</li></a>
            </ul>
          `;
          document.getElementById("sportsAllTemplate").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*==========================Sports Section ends here===========================*/