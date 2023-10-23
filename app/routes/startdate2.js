const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/telephone-new-claim/start-date/UR/find', function (req, res) {
  if (req.body.nino === 'XX 12 34 56') {
    res.redirect('/telephone-new-claim/start-date/UR/not-found')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/find-1')
  }
})

router.post('/telephone-new-claim/start-date/UR/find', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/find-1')
})

router.post('/telephone-new-claim/start-date/UR/dob-request', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/find')
})

router.post('/telephone-new-claim/start-date/UR/dob-evidence', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/address')
})

router.post('/telephone-new-claim/start-date/UR/complete', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/find')
})

router.post('/telephone-new-claim/start-date/UR/address', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/address-result')
})

router.post('/telephone-new-claim/start-date/UR/address-result', function (req, res) {
  if (req.body['address-results'] === 'address-not-found') {
    res.redirect('/telephone-new-claim/start-date/UR/manual-address')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/bank')
  }
})

router.post('/telephone-new-claim/start-date/UR/manual-address', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/bank')
})

router.post('/telephone-new-claim/start-date/UR/bank', function (req, res) {
  if (req.body['sort-code'] === '763098') {
    res.redirect('/telephone-new-claim/start-date/UR/sp-date')
  } else if (req.body['sort-code'] === '164392') {
    res.redirect('/telephone-new-claim/start-date/UR/sp-date-post-spa')
  } else if (req.body['sort-code'] === '823047') {
    res.redirect('/telephone-new-claim/start-date/iteration-3/claim-date')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/sp-date')
  }
})

router.post('/telephone-new-claim/start-date/UR/sp-date-post-spa', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/prison')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/claim-date-post-spa')
  }
})

router.post('/telephone-new-claim/start-date/iteration-3/claim-date', function (req, res) {
  if (req.body['claim-month'] === '10') {
    res.redirect('/telephone-new-claim/start-date/UR/are-you-sure')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/prison')
  }
})

router.post('/telephone-new-claim/start-date/UR/are-you-sure', function (req, res) {
  if (req.body['confirm-claim-from'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/prison')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-3/claim-date')
  }
})

router.post('/telephone-new-claim/start-date/iteration-3/claim-date', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/prison')
})

router.post('/telephone-new-claim/start-date/UR/claim-date-post-spa', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/prison')
})

router.post('/telephone-new-claim/start-date/UR/sp-date-post-spa2', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/prison')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/claim-date-post-spa2')
  }
})

router.post('/telephone-new-claim/start-date/UR/claim-date-post-spa2', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/prison')
})

router.post('/telephone-new-claim/start-date/UR/prison', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/contact')
})

// Do you want yoUR State Pension from the earliest possible date? YES/NO
router.post('/telephone-new-claim/start-date/UR/sp-date', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/contact')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/claim-date')
  }
})

router.post('/telephone-new-claim/start-date/UR/claim-date', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/contact')
})

router.post('/telephone-new-claim/start-date/UR/contact', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/alternative')
})

router.post('/telephone-new-claim/start-date/UR/alternative', function (req, res) {
  if (req.body.alternative === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/alternative2')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/marital-status')
  }
})

router.post('/telephone-new-claim/start-date/UR/alternative2', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/marital-status')
})

router.post('/telephone-new-claim/start-date/UR/marital-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/lived-worked')
})

router.post('/telephone-new-claim/start-date/UR/civilpartnership-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/lived-worked')
})

router.post('/telephone-new-claim/start-date/UR/widowed-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/lived-worked')
})

router.post('/telephone-new-claim/start-date/UR/divorced-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/lived-worked')
})

router.post('/telephone-new-claim/start-date/UR/dissolvedcp-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/lived-worked')
})

router.post('/telephone-new-claim/start-date/UR/lived-worked', function (req, res) {
  if (req.body['lived-worked'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/country-1')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/UR/country-1', function (req, res) {
  if (req.body['another-country-1'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/country-2')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/UR/country-2', function (req, res) {
  if (req.body['another-country-2'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/country-3')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/UR/country-3', function (req, res) {
  if (req.body['another-country-3'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/country-4')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/UR/country-4', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/check-answers')
})

router.post('/telephone-new-claim/start-date/UR/worked', function (req, res) {
  if (req.body['worked-outside'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/UR/worked-countries')
  } else {
    res.redirect('/telephone-new-claim/start-date/UR/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/UR/marital-status', function (req, res) {
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

router.post('/telephone-new-claim/start-date/UR/dob', (req, res) => {
  res.redirect('address')
})

router.post('/telephone-new-claim/start-date/UR/check-answers', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/declaration')
})

router.post('/telephone-new-claim/start-date/UR/declaration', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/complete')
})

router.post('/telephone-new-claim/start-date/UR/dob-evidence', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/UR/find')
})

module.exports = router
