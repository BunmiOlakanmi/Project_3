// Retrieve
//var MongoClient = require('mongodb').MongoClient;
// db = client.covid_db;
// // Connect to the db
// MongoClient.connect("mongodb://dbUser:dbUser@cluster0-shard-00-00.lfpww.mongodb.net:27017,cluster0-shard-00-01.lfpww.mongodb.net:27017,cluster0-shard-00-02.lfpww.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-za5qq0-shard-0&authSource=admin&retryWrites=true&w=majority", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });

d3.json('/api').then(function(response){
  console.log(response)
})


// client= MongoClient("mongodb://dbUser:dbUser@cluster0-shard-00-00.lfpww.mongodb.net:27017,cluster0-shard-00-01.lfpww.mongodb.net:27017,cluster0-shard-00-02.lfpww.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-za5qq0-shard-0&authSource=admin&retryWrites=true&w=majority");
// var url = 'mongodb://dbUser:dbUser@cluster0-shard-00-00.lfpww.mongodb.net:27017';

// client= MongoClient("mongodb://dbUser:dbUser@cluster0-shard-00-00.lfpww.mongodb.net:27017,cluster0-shard-00-01.lfpww.mongodb.net:27017,cluster0-shard-00-02.lfpww.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-za5qq0-shard-0&authSource=admin&retryWrites=true&w=majority")
// db = client.covid_db;

// client.connect(url, function (err, db) {
//     assert.equal(null, err);
//     console.log("Connected successfully to covid db!");
//         findDocuments(db, function () {
//             db.close();
//         });
// });

var DataObj = d3.csv("static/assets/data/world_data_4_df.csv")

console.log(DataObj)
  // DataObj.forEach(function(d){
  //   d.country = +d.Country;
  //   d.totalCases = +d.Total_Cases;
  //   d.totalDeaths = +d.Total_Deaths;
  //   d.totalRecovered = +d.Total_Recovered;
  //   d.totalTests = +d.Total_Tests;
  //   d.activeCases = +d.Active_Cases;
  //   d.population = +d.Population;
  //   console.log(population);
  // })

d3.csv("static/assets/data/world_data_4_df.csv", function(data) {
  //console.log(data);
        var samples = world_data_4_df;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sampleId);
        var result = resultArray[0];
        console.log(resultArray);
        var country = data.Country;
        var totalCases = result.Total_Cases;
        var totalDeaths = result.Total_Deaths;
        var totalRecovered = result.Total_Recovered;
        var activeCases = result.Active_Cases;
        var totalTests = result.Total_Tests;
        var population = result.Population;
        //console.log(country);
    });
        //Get the above data to populate left hand side html div (to provide textual data besides the chart)
        // var panel = d3.select("#country-data");
        // panel.html("");
        // panel.append("p").text(`country: ${country}`);
        // panel.append("p").text(`Total Cases: ${totalCases}`);
        // panel.append("p").text(`Total Deaths: ${totalDeaths}`);
        // panel.append("p").text(`Total Recovered: ${totalRecovered}`);
        // panel.append("p").text(`Active Cases: ${activeCases}`);
        // panel.append("p").text(`Total Tests: ${totalTests}`);
        // panel.append("p").text(`Population: ${population}`);

        // Data for the bar chart
        // var barData = [
        //     {
        //       x: ,
        //       text: ,
        //       type: "bar",
        //     }
        //   ];
        
         // Layout for the bar chart
//         var barLayout = {
//             title: "COVID-19 Data by Country",
//             margin: { t: 30, l: 150 }
//         };

//         // Plot the three charts: bar, bubble and guage
//         Plotly.newPlot("bar", barData, barLayout);
//     })
    
// };

// Function to select the country that the bar / bubble chart will be built
function optionChanged(selectedCountry){
    buildCharts(selectedCountry);
  }

// Function to initiate the program. 
function init() {
    //Read the json file and retrieve the data from samples 
    d3.csv("/assets/data/world_data_4_df.csv").then((data) => {
      var samples = data.samples;
      var firstSampleId  = samples[0].id;
      buildCharts(firstSampleId);  
      var metaData = data.metadata;
      console.log(metaData);
      var firstCountry = samples[0].country;
      console.log(samples[0]);
      // Assign the value of the dropdown menu option to a variable
      var dropdownMenu = d3.select("#selDataset");
      // Initialize an empty array for the sample data
      var ids = [];
      ids = data.country;
      console.log(ids);
      for(i = 0; i<=ids.length; i++){
        var sampleName = dropdownMenu.append("option").text(ids[i]);
      }
    });
  };
  init();

  