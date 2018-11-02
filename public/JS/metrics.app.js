var metricsApp = new Vue ({
  el: '#metricscontainer',
  data: {
    metrics: {
      turbineDeployedId: '',
      dataCollectedDate: '',
      output: null,
      heartRate: null,
      compressorEfficiency: null,
      availability: null,
      reliability: null,
      firedHours: null,
      trips: null,
      starts: null
    },

    metricsArr: [],
    metricsArr2: [],
    outputArr: [],
    outputArr2: [],
    heartRateArr: [],
    heartRateArr2: [],
    compressorEfficiencyArr: [],
    compressorEfficiencyArr2: [],
    availabilityArr: [],
    availabilityArr2: [],
    reliabilityArr: [],
    reliabilityArr2: [],
    firedHoursArr: [],
    firedHoursArr2: [],
    tripsArr: [],
    tripsArr2: [],
    startsArr: [],
    startsArr2: []

  },
  computed: {


      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
        metricsApp.outputArr = json;
        metricsApp.metricsArr = metricsApp.outputArr;  } )
        .catch( err => {
          console.log('METRIC LIST FETCH ERROR:');
          console.log(err);
        })


            },

            fetchHeartRateMetrics(){
              fetch('api/kpi.php')
              .then( response => response.json() )  // "a => expression" is shorthand function declaration
              .then( json => {
                metricsApp.heartRateArr = json;
                metricsApp.metricsArr = metricsApp.heartRateArr; } )
                .catch( err => {
                  console.log('METRIC LIST FETCH ERROR:');
                  console.log(err);
                })

                this.formatDate();
                this.buildHeartRateChart();
              },

              fetchHeartRateMetrics2(){
                fetch('api/kpi2.php')
                .then( response => response.json() )  // "a => expression" is shorthand function declaration
                .then( json => {
                  metricsApp.heartRateArr2 = json;
                  metricsApp.metricsArr2 = metricsApp.heartRateArr2;  } )
                  .catch( err => {
                    console.log('METRIC LIST FETCH ERROR:');
                    console.log(err);
                  })

                  this.formatDate2();
                  this.buildHeartRateChart2();
                },

                fetchavailabilityMetrics(){
                  fetch('api/kpi.php')
                  .then( response => response.json() )  // "a => expression" is shorthand function declaration
                  .then( json => {
                    metricsApp.availabilityArr = json;
                    metricsApp.metricsArr = metricsApp.availabilityArr;  } )
                    .catch( err => {
                      console.log('METRIC LIST FETCH ERROR:');
                      console.log(err);
                    })
                    this.formatDate();
                    this.buildavailabilityChart();
                  },

                  fetchavailabilityMetrics2(){
                    fetch('api/kpi2.php')
                    .then( response => response.json() )  // "a => expression" is shorthand function declaration
                    .then( json => {
                      metricsApp.availabilityArr2 = json;
                      metricsApp.metricsArr2 = metricsApp.availabilityArr2;  } )
                      .catch( err => {
                        console.log('METRIC LIST FETCH ERROR:');
                        console.log(err);
                      })

                      this.formatDate2();
                      this.buildavailabilityChart2();
                    },


