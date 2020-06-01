let technologyApi = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=838255f6c9794054b78c48edea16531b";

window.fetch(technologyApi)
.then((techData) => {
     techData.json()
     .then((tech) => {
         //console.log(tech.articles);
          let techFeed = tech.articles;
          let firstTechBlock = tech.articles;
          let techNewsBlockOne = firstTechBlock[0];
          document.getElementById("techFirstTemplate").innerHTML = `
             <ul>
                 <img src="${techNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let techOf of techFeed) {
                output += `
                <ul>
                    <a href="${techOf.url}" target="_blank">
                    <li>${techOf.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("techAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));