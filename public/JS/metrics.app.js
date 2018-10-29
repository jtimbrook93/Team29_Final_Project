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


    fetchOutputMetrics(){
      fetch('api/kpi1.php')
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

  fetchOutputMetrics2(){
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.outputArr2 = json;
    metricsApp.metricsArr2 = metricsApp.outputArr2;  } )
  .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
  })

    this.formatDate();
    this.buildOutputChart2();
},

  fetchComressorEfficiencyMetrics(){
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.compressorEfficiencyArr = json;
    metricsApp.metricsArr = metricsApp.compressorEfficiencyArr;  } )
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
    metricsApp.heartRateArr = json;
    metricsApp.metricsArr = metricsApp.heartRateArr; } )
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

      buildOutputChart2() {
        Highcharts.chart('OutputChart2', {
                  title: {
                      text: 'KPI Output Chart 2'
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
                      data: this.outputArr2.map( item => [item.dataCollectedDate, item.output] )
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
    fetch('api/kpi1.php')
    .then( response => response.json() )
    .then( json => {metricsApp.metricsArr = json} )
    .catch( err => {
      console.error('METRIC FETCH ERROR:');
      console.error(err);
    }),
    fetch('api/kpi2.php')
    .then( response => response.json() )
    .then( json => {metricsApp.metricsArr2 = json} )
    .catch( err => {
      console.error('METRIC FETCH ERROR:');
      console.error(err);
    }),
    // this.buildMetricChart();
  fetchMetrics();
  fetchOutputMetrics();
  fetchHeartRateMetrics();
  fetchComressorEfficiencyMetrics();
  fetchbuildOutputChart2();
}
});
