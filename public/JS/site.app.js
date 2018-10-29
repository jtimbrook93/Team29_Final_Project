var siteApp = new Vue ({
  el: '#siteMain',
  data: {
    site: {


      siteId: '',
      clientId: '',
      siteName: '',
      siteDescription: '',  //'YYYY-MM-DD'
      primaryContact: '',   //'YYYY-MM-DD', needs to be calculated
      capacity: '',
      addrLine1: '',
      addrLine2: '',
      addrCity: '',
      addrState: '',
      addrZip: '',
      addrCountry: ''

    }
  },

  computed: {},

  methods: {
    fetchSites (){
      fetch('api/site.php')
      .then( response => response.json() ) // "a => expression" is shorthand function declaration
      .then( json => {
        siteApp.site = json;
        // TODO: Build out client chart

      })
  .catch( err => {
    console.log('SITE LIST FETCH ERROR:');
    console.log(err);
  })
  },

  },
  created () {

  // Do data fetch
  fetch('api/site.php')
  .then( response => response.json() )
  .then( json => {siteApp.site = json} )
  .catch( err => {
  console.error('SITE FETCH ERROR:');
  console.error(err);
  })
  }

})
