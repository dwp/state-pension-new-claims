var countries = {
  type: function(country) {
    var countryType = { 'resident': false, 'insurance': false };
    var resident = countries.resident();
    var insurance = countries.insurance();

    if ( resident.indexOf(country) > -1 ) {
      countryType.resident = true;
    } else if ( insurance.indexOf(country) > -1 ){
      countryType.insurance = true;
    }

    return countryType;
  },

  resident: function() {
    var resident = [
      'australia',
      'canada',
      'new zealand'
    ];
    return resident;
  },

  insurance: function() {
    var insurance = [
      'barbados',
      'bermuda',
      'guernsey',
      'israel',
      'jamaica',
      'jersey',
      'mauritius',
      'philippines',
      'turkey',
      'united states of america',
      'austria',
      'belgium',
      'bosnia and herzegovina',
      'croatia',
      'cyprus',
      'czech republic',
      'denmark',
      'estonia',
      'finland',
      'france',
      'germany',
      'gibraltar',
      'greece',
      'hungary',
      'iceland',
      'ireland',
      'isle of man',
      'italy',
      'latvia',
      'liechtenstein',
      'lithuania',
      'luxembourg',
      'macedonia',
      'malta',
      'montenegro',
      'netherlands',
      'norway',
      'poland',
      'portugal',
      'serbia',
      'slovakia',
      'slovenia',
      'spain',
      'sweden',
      'switzerland'
    ];

    return insurance;
  }
};
module.exports = countries;
