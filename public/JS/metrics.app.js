var metricsApp = new Vue({
  el: '#metricscontainer',
data: {
  metrics: {
    sensorDeployedId: '',
    turbineDeployedId: '',
    dataCollectedDate: '',
    output: '',
    heartRate: '',
    compressorEfficiency: '',
    availability: '',
    reliability: '',
    firedHours: '',
    trips: '',
    starts: '',
}

},
computed: {

  },

  methods: {
    fetchMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
      metricsApp.metrics = json;
      //  TODO: Build out client chart

    } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })
  },
  },

  created () {

    // Do data fetch
    fetch('api/kpi.php')
    .then( response => response.json() )
    .then( json => {metricsApp.metrics = json} )
    .catch( err => {
      console.error('METRIC FETCH ERROR:');
      console.error(err);
    })
  }
})
