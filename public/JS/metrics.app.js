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

  },

  methods: {


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

  fetchCompressorEfficiencyMetrics(){
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

  fetchCompressorEfficiencyMetrics2(){
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.compressorEfficiencyArr2 = json;
    metricsApp.metricsArr2 = metricsApp.compressorEfficiencyArr2;  } )
  .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
  })

    this.formatDate();
    this.buildCompressorEfficiencyChart2();
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

    this.formatDate();
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

    this.formatDate();
    this.buildavailabilityChart2();
  },

  fetchreliabilityMetrics(){
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.reliabilityArr = json;
    metricsApp.metricsArr = metricsApp.reliabilityArr;  } )
  .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
  })
  this.formatDate();
  this.buildreliabilityChart();
},

  fetchreliabilityMetrics2(){
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.reliabilityArr2 = json;
    metricsApp.metricsArr2 = metricsApp.reliabilityArr2;  } )
  .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
  })
  this.formatDate();
  this.buildreliabilityChart2();
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
  // fetchOutputMetrics();
  // fetchOutputMetrics2();
  // fetchComressorEfficiencyMetrics();
  // fetchHeartRateMetrics();
    // Do data fetch
    fetch('api/kpi.php')
    .then( response => response.json() )
    .then( json => {metricsApp.metricsArr = json} )
    .catch( err => {
      console.error('METRIC FETCH ERROR:');
      console.error(err);
    })

    fetch('api/kpi2.php')
    .then( response => response.json() )
    .then( json => {metricsApp.metricsArr2 = json} )
    .catch( err => {
      console.error('METRIC FETCH ERROR:');
      console.error(err);
    })

    fetchOutputMetrics()
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.outputArr = json;
      metricsApp.metricsArr = metricsApp.outputArr;  } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })



    fetchOutputMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.outputArr2 = json;
    metricsApp.metricsArr2 = metricsApp.outputArr2;  } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })



    fetchCompressorEfficiencyMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.compressorEfficiencyArr = json;
    metricsApp.metricsArr = metricsApp.compressorEfficiencyArr;  } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchCompressorEfficiencyMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.compressorEfficiencyArr2 = json;
    metricsApp.metricsArr2 = metricsApp.compressorEfficiencyArr2;  } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })



    fetchHeartRateMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.heartRateArr = json;
    metricsApp.metricsArr = metricsApp.heartRateArr; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchHeartRateMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.heartRateArr2 = json;
    metricsApp.metricsArr2 = metricsApp.heartRateArr2; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchavailabilityMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.availabilityArr = json;
    metricsApp.metricsArr = metricsApp.availabilityArr; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchavailabilityMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.availabilityArr2 = json;
    metricsApp.metricsArr2 = metricsApp.availabilityArr2; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })


    fetchreliabilityMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.reliabilityArr = json;
    metricsApp.metricsArr = metricsApp.reliabilityArr; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchreliabilityMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.reliabilityArr2 = json;
    metricsApp.metricsArr2 = metricsApp.reliabilityArr2; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchfiredHoursMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.firedHoursArr = json;
    metricsApp.metricsArr = metricsApp.firedHoursArr; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchfiredHoursMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.firedHoursArr2 = json;
    metricsApp.metricsArr2 = metricsApp.firedHoursArr2; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchtripsMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.tripsArr = json;
    metricsApp.metricsArr = metricsApp.tripsArr; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchtripsMetrics2()
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.tripsArr2 = json;
    metricsApp.metricsArr2 = metricsApp.tripsArr2; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchstartsMetrics()
    fetch('api/kpi.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.startsArr = json;
    metricsApp.metricsArr = metricsApp.startsArr; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })

    fetchstartsMetrics(2)
    fetch('api/kpi2.php')
    .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
    metricsApp.startsArr2 = json;
    metricsApp.metricsArr2 = metricsApp.startsArr2; } )
    .catch( err => {
    console.log('METRIC LIST FETCH ERROR:');
    console.log(err);
    })





    formatDate()
      this.metricsArr.forEach(
        function(entry) {
          entry.dataCollectedDate = Date.parse(entry.dataCollectedDate); // Convert to ms since Jan 1, 1970 UTC

      })
}
});
