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

    fetchAvalabilityMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.availabilityArr = json;
      metricsApp.metricsArr = metricsApp.availabilityArr; } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })

      this.formatDate();
      this.buildAvailabilityChart();
    },

    fetchReliabilityMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.reliabilityArr = json;
      metricsApp.metricsArr = metricsApp.reliabilityArr; } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })

      this.formatDate();
      this.buildReliabilityChart();
    },

    fetchFiredHoursMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.firedHoursArr = json;
      metricsApp.metricsArr = metricsApp.firedHoursArr; } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })

      this.formatDate();
      this.buildFiredHoursChart();
    },

    fetchTripsMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.tripsArr = json;
      metricsApp.metricsArr = metricsApp.tripsArr; } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })

      this.formatDate();
      this.buildTripsChart();
    },

    fetchStartsMetrics(){
      fetch('api/kpi.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
      .then( json => {
      metricsApp.startsArr = json;
      metricsApp.metricsArr = metricsApp.startsArr; } )
    .catch( err => {
      console.log('METRIC LIST FETCH ERROR:');
      console.log(err);
    })

      this.formatDate();
      this.buildStartsChart();
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

    buildAvailabilityAndReliabilityChart() {
    Highcharts.chart('availabilityAndReliabilityChart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Availability And Reliability'
        },

        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
            text: 'Availability and reliability'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Availability',
            data: this.availabilityArr.map( item => [item.dataCollectedDate, item.availability] )
        }, {
            name: 'Reliability',
            data: this.reliabilityArr.map( item => [item.dataCollectedDate, item.reliability] )
        }]
    });
}

// buildAvailabilityChart() {
// Highcharts.chart('availabilityChart', {
//           title: {
//               text: 'KPI availability Chart'
//           },
//           xAxis: {
//               type: 'datetime'
//           },
//           yAxis: {
//               title: {
//                   text: 'Availability'
//               }
//           },
//           legend: {
//               enabled: false
//           },
//           plotOptions: {
//               area: {
//                   fillColor: {
//                       linearGradient: {
//                           x1: 0,
//                           y1: 0,
//                           x2: 0,
//                           y2: 1
//                       },
//                       stops: [
//                           [0, Highcharts.getOptions().colors[0]],
//                           [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//                       ]
//                   },
//                   marker: {
//                       radius: 2
//                   },
//                   lineWidth: 1,
//                   states: {
//                       hover: {
//                           lineWidth: 1
//                       }
//                   },
//                   threshold: null
//               }
//           },
//
//           series: [{
//               type: 'area',
//               name: 'Sensor Availability',
//               // Data needs [ [date, num], [date2, num2 ], ... ]
//               data: this.availabilityArr.map( item => [item.dataCollectedDate, item.availability] )
//           }]
//       });
//     },
//
// buildReliabilityChart() {
// Highcharts.chart('reliabilityChart', {
//         title: {
//             text: 'KPI reliability Chart'
//         },
//         xAxis: {
//             type: 'datetime'
//         },
//         yAxis: {
//             title: {
//                 text: 'Reliability'
//             }
//         },
//         legend: {
//             enabled: false
//         },
//         plotOptions: {
//             area: {
//                 fillColor: {
//                     linearGradient: {
//                         x1: 0,
//                         y1: 0,
//                         x2: 0,
//                         y2: 1
//                     },
//                     stops: [
//                         [0, Highcharts.getOptions().colors[0]],
//                         [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//                     ]
//                 },
//                 marker: {
//                     radius: 2
//                 },
//                 lineWidth: 1,
//                 states: {
//                     hover: {
//                         lineWidth: 1
//                     }
//                 },
//                 threshold: null
//             }
//         },
//
//           series: [{
//               type: 'area',
//               name: 'Sensor Reliability',
//               // Data needs [ [date, num], [date2, num2 ], ... ]
//               data: this.reliabilityArr.map( item => [item.dataCollectedDate, item.reliability] )
//           }]
//       });
//     },

buildFiredHoursChart() {
Highcharts.chart('firedHoursChart', {
        title: {
            text: 'KPI fired hours Chart'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'FiredHours'
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
              name: 'Sensor Fired Hours',
              // Data needs [ [date, num], [date2, num2 ], ... ]
              data: this.firedHoursArr.map( item => [item.dataCollectedDate, item.firedHours] )
          }]
      });
    },

    buildTripsChart() {
    Highcharts.chart('tripsChart', {
            title: {
                text: 'KPI trips Chart'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Trips'
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
                  name: 'Sensor Trips',
                  // Data needs [ [date, num], [date2, num2 ], ... ]
                  data: this.tripsArr.map( item => [item.dataCollectedDate, item.trips] )
              }]
          });
        },

buildStartsChart() {
Highcharts.chart('startsChart', {
        title: {
            text: 'KPI starts Chart'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Starts'
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
              name: 'Sensor Starts',
              // Data needs [ [date, num], [date2, num2 ], ... ]
              data: this.startsArr.map( item => [item.dataCollectedDate, item.starts] )
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
