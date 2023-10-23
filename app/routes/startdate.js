const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/startdate/find', function (req, res) {
  if (req.body.nino === 'XX 12 34 56') {
    res.redirect('/startdate/not-found')
  } else {
    res.redirect('/startdate/find-1')
  }
})

router.post('/startdate/find', (req, res) => {
  res.redirect('/startdate/find-1')
})

router.post('/startdate/dob-request', (req, res) => {
  res.redirect('/startdate/find')
})

router.post('/startdate/dob-evidence', (req, res) => {
  res.redirect('/startdate/address')
})

router.post('/startdate/complete', (req, res) => {
  res.redirect('/startdate/find')
})

router.post('/startdate/address', (req, res) => {
  res.redirect('/startdate/address-result')
})

router.post('/startdate/address-result', function (req, res) {
  if (req.body['address-results'] === 'address-not-found') {
    res.redirect('/startdate/manual-address')
  } else {
    res.redirect('/startdate/bank')
  }
})

router.post('/startdate/manual-address', (req, res) => {
  res.redirect('/startdate/bank')
})

router.post('/startdate/bank', (req, res) => {
  res.redirect('/startdate/sp-date')
})

// Do you want your State Pension from the earliest possible date? YES/NO
router.post('/startdate/sp-date', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/startdate/contact')
  } else {
    res.redirect('/startdate/claim-date')
  }
})

router.post('/startdate/claim-date', (req, res) => {
  res.redirect('/startdate/contact')
})

router.post('/startdate/contact', (req, res) => {
  res.redirect('/startdate/alternative')
})

router.post('/startdate/alternative', function (req, res) {
  if (req.body.alternative === 'yes') {
    res.redirect('/startdate/alternative2')
  } else {
    res.redirect('/startdate/marital-status')
  }
})

router.post('/startdate/alternative2', (req, res) => {
  res.redirect('/startdate/marital-status')
})

router.post('/startdate/marital-details', (req, res) => {
  res.redirect('/startdate/lived-worked')
})

router.post('/startdate/civilpartnership-details', (req, res) => {
  res.redirect('/startdate/lived-worked')
})

router.post('/startdate/widowed-details', (req, res) => {
  res.redirect('/startdate/lived-worked')
})

router.post('/startdate/divorced-details', (req, res) => {
  res.redirect('/startdate/lived-worked')
})

router.post('/startdate/dissolvedcp-details', (req, res) => {
  res.redirect('/startdate/lived-worked')
})

router.post('/startdate/lived-worked', function (req, res) {
  if (req.body['lived-worked'] === 'yes') {
    res.redirect('/startdate/country-1')
  } else {
    res.redirect('/startdate/check-answers')
  }
})

router.post('/startdate/country-1', function (req, res) {
  if (req.body['another-country-1'] === 'yes') {
    res.redirect('/startdate/country-2')
  } else {
    res.redirect('/startdate/check-answers')
  }
})

router.post('/startdate/country-2', function (req, res) {
  if (req.body['another-country-2'] === 'yes') {
    res.redirect('/startdate/country-3')
  } else {
    res.redirect('/startdate/check-answers')
  }
})

router.post('/startdate/country-3', function (req, res) {
  if (req.body['another-country-3'] === 'yes') {
    res.redirect('/startdate/country-4')
  } else {
    res.redirect('/startdate/check-answers')
  }
})

router.post('/startdate/country-4', (req, res) => {
  res.redirect('/startdate/check-answers')
})

router.post('/startdate/worked', function (req, res) {
  if (req.body['worked-outside'] === 'yes') {
    res.redirect('/startdate/worked-countries')
  } else {
    res.redirect('/startdate/check-answers')
  }
})

router.post('/startdate/marital-status', function (req, res) {
  if (req.body['marital-status'] === 'married') {
    res.redirect('marital-details')
  } else if (req.body['marital-status'] === 'never') {
    res.redirect('lived-worked')
  } else if (req.body['marital-status'] === 'civil-partnership') {
    res.redirect('civilpartnership-details')
  } else if (req.body['marital-status'] === 'widowed') {
    res.redirect('widowed-details')
  } else if (req.body['marital-status'] === 'divorced') {
    res.redirect('divorced-details')
  } else if (req.body['marital-status'] === 'dissolved') {
    res.redirect('dissolvedcp-details')
  }
})

router.post('/startdate/dob', function (req, res) {
  if (req.session.data.nino === 'xx347612a') {
    res.redirect('dob-request')
  } else if (req.session.data.nino === 'XX347612A') {
    res.redirect('dob-request')
  } else {
    res.redirect('address')
  }
})

router.post('/startdate/check-answers', (req, res) => {
  res.redirect('/startdate/declaration')
})

router.post('/startdate/declaration', (req, res) => {
  res.redirect('/startdate/complete')
})

router.post('/startdate/dob-evidence', (req, res) => {
  res.redirect('/startdate/find')
})

module.exports = router
