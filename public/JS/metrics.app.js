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
outputArr: [],
heartRateArr: [],
compressorEfficiencyArr: [],
availabilityArr: [],
reliabilityArr: [],
firedHoursArr: [],
tripsArr: [],
startsArr: []

},
computed: {

  },

  methods: {

    fetchMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.metricsArr = json  } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })
  },

    fetchOutputMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.outputArr = json;
    metricsApp.metricsArr = metricsApp.outputArr;  } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })

      this.formatDate();
      this.buildOutputChart();
  },

  fetchComressorEfficiencyMetrics(){
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.compressorEfficiencyArr = json  } )
  .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
  })

    this.formatDate();
    this.buildCompressorEfficiencyChart();
  },

  fetchHeartRateMetrics(){
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.heartRateArr = json  } )
  .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
  })

    this.formatDate();
    this.buildHeartRateChart();
  },

  formatDate() {
      this.metricsArr.forEach(
        function(entry) {
          entry.dataCollectedDate = Date.parse(entry.dataCollectedDate); // Convert to ms since Jan 1, 1970 UTC

      });
},

buildHeartRateChart() {
Highcharts.chart('heartRateChart', {
          title: {
              text: 'KPI HeartRate Chart'
          },
          xAxis: {
              type: 'datetime'
          },
          yAxis: {
              title: {
                  text: 'HeartRate'
              }
          },
          legend: {
              enabled: false
          },
          plotOptions: {
              area: {
                  fillColor: {
                      linearGradient: {
                          x1: 0,
                          y1: 0,
                          x2: 0,
                          y2: 1
                      },
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  },
                  marker: {
                      radius: 2
                  },
                  lineWidth: 1,
                  states: {
                      hover: {
                          lineWidth: 1
                      }
                  },
                  threshold: null
              }
          },

          series: [{
              type: 'area',
              name: 'Sensor HeartRate',
              // Data needs [ [date, num], [date2, num2 ], ... ]
              data: this.heartRateArr.map( item => [item.dataCollectedDate, item.heartRate] )
          }]
      });
    },

buildOutputChart() {
  Highcharts.chart('OutputChart', {
            title: {
                text: 'KPI Output Chart'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'output'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Sensor Output',
                // Data needs [ [date, num], [date2, num2 ], ... ]
                data: this.outputArr.map( item => [item.dataCollectedDate, item.output] )
            }]
        });
      },
buildCompressorEfficiencyChart() {
 Highcharts.chart('CompressorEfficiencyChart', {
           title: {
               text: 'KPI Compressor Efficiency Chart'
           },
           xAxis: {
               type: 'datetime'
           },
           yAxis: {
               title: {
                   text: 'Compressor Efficiency'
               }
           },
           legend: {
               enabled: false
           },
           plotOptions: {
               area: {
                   fillColor: {
                       linearGradient: {
                           x1: 0,
                           y1: 0,
                           x2: 0,
                           y2: 1
                       },
                       stops: [
                           [0, Highcharts.getOptions().colors[0]],
                           [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                       ]
                   },
                   marker: {
                       radius: 2
                   },
                   lineWidth: 1,
                   states: {
                       hover: {
                           lineWidth: 1
                       }
                   },
                   threshold: null
               }
           },

           series: [{
               type: 'area',
               name: 'Compressor Efficiency',
               // Data needs [ [date, num], [date2, num2 ], ... ]
               data: this.compressorEfficiencyArr.map( item => [item.dataCollectedDate, item.compressorEfficiency] )
           }]
       });
     }
   },
  created () {

    // Do data fetch
    fetch('api/kpi.php')
    .then( response => response.json() )
    .then( json => {metricsApp.metricsArr = json} )
    .catch( err => {
      console.error('METRIC FETCH ERROR:');
      console.error(err);
    }),
    // this.buildMetricChart();
  fetchMetrics();
  fetchOutputMetrics();
  fetchHeartRateMetrics();
  fetchComressorEfficiencyMetrics();
}
});
