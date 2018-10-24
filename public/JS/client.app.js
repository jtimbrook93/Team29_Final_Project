var clientApp = new Vue({
  el: '#clientcontainer',
data: {
  client: {
    clientId: '',
    clientName: '',
    clientDescription: '',
    gicsSector: '',
    gicsSubIndustry: '',
    headquarters: ''
}

},
computed: {

  },

  methods: {
    fetchClients(){
      fetch('api/client.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
      clientApp.client = json;
      //  TODO: Build out client chart

    } )
    .catch( err => {
      console.log('CLIENT LIST FETCH ERROR:');
      console.log(err);
    })
  },
  },

  created () {

    // Do data fetch
    fetch('api/client.php')
    .then( response => response.json() )
    .then( json => {clientApp.client = json} )
    .catch( err => {
      console.error('CLIENT FETCH ERROR:');
      console.error(err);
    })
  }
})
