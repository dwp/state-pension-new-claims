const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Claim from iteration 4

router.post('/telephone-new-claim/start-date/iteration-4/find', function (req, res) {
  if (req.body.nino === 'XX 12 34 56') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/not-found')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/find-1')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/find', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-7/find-1')
})

router.post('/telephone-new-claim/start-date/iteration-4/dob-request', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-7/find')
})

router.post('/telephone-new-claim/start-date/iteration-4/dob-evidence', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/address')
})

router.post('/telephone-new-claim/start-date/iteration-4/complete', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/find')
})

router.post('/telephone-new-claim/start-date/iteration-4/address', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/address-result')
})

router.post('/telephone-new-claim/start-date/iteration-4/address-result', function (req, res) {
  if (req.body['address-results'] === 'address-not-found') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/manual-address')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/bank')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/manual-address', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/bank')
})

router.post('/telephone-new-claim/start-date/iteration-4/bank', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/sp-date')
})

// Do you want your State Pension from the earliest possible date? YES/NO
router.post('/telephone-new-claim/start-date/iteration-4/sp-date', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/contact')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/claim-date')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/claim-date', function (req, res) {
  if (req.body['claim-date-month'] === '01') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/are-you-sure')
  } else if (req.body['claim-date-month'] === '1') {
    res.redirect('are-you-sure')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/contact')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/are-you-sure', function (req, res) {
  if (req.body['confirm-claim-from'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/contact')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/claim-date')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/contact', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/alternative')
})

router.post('/telephone-new-claim/start-date/iteration-4/alternative', function (req, res) {
  if (req.body.alternative === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/alternative2')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/marital-status')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/alternative2', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/marital-status')
})

router.post('/telephone-new-claim/start-date/iteration-4/marital-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/lived-worked')
})

router.post('/telephone-new-claim/start-date/iteration-4/civilpartnership-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/lived-worked')
})

router.post('/telephone-new-claim/start-date/iteration-4/widowed-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/lived-worked')
})

router.post('/telephone-new-claim/start-date/iteration-4/divorced-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/lived-worked')
})

router.post('/telephone-new-claim/start-date/iteration-4/dissolvedcp-details', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/lived-worked')
})

router.post('/telephone-new-claim/start-date/iteration-4/lived-worked', function (req, res) {
  if (req.body['lived-worked'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/country-1')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/country-1', function (req, res) {
  if (req.body['another-country-1'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/country-2')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/country-2', function (req, res) {
  if (req.body['another-country-2'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/country-3')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/country-3', function (req, res) {
  if (req.body['another-country-3'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/country-4')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/country-4', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/check-answers')
})

router.post('/telephone-new-claim/start-date/iteration-4/worked', function (req, res) {
  if (req.body['worked-outside'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/iteration-4/worked-countries')
  } else {
    res.redirect('/telephone-new-claim/start-date/iteration-4/check-answers')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/marital-status', function (req, res) {
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

router.post('/telephone-new-claim/start-date/iteration-4/dob', function (req, res) {
  if (req.session.data.nino === 'xx347612a') {
    res.redirect('dob-request')
  } else if (req.session.data.nino === 'XX347612A') {
    res.redirect('dob-request')
  } else {
    res.redirect('address')
  }
})

router.post('/telephone-new-claim/start-date/iteration-4/check-answers', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/declaration')
})

router.post('/telephone-new-claim/start-date/iteration-4/declaration', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/complete')
})

router.post('/telephone-new-claim/start-date/iteration-4/dob-evidence', (req, res) => {
  res.redirect('/telephone-new-claim/start-date/iteration-4/find')
})

// Iteration 7

router.post('/telephone-new-claim/iteration-7/find', function (req, res) {
  if (req.body.nino === 'XX 12 34 56') {
    res.redirect('/telephone-new-claim/iteration-7/not-found')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/find-1')
  }
})

router.post('/telephone-new-claim/iteration-7/find', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/find-1')
})

router.post('/telephone-new-claim/iteration-7/dob-request', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/find')
})

router.post('/telephone-new-claim/iteration-7/dob-evidence', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/address')
})

router.post('/telephone-new-claim/iteration-7/complete', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/find')
})

router.post('/telephone-new-claim/iteration-7/address', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/address-result')
})

router.post('/telephone-new-claim/iteration-7/address-result', function (req, res) {
  if (req.body['address-results'] === 'address-not-found') {
    res.redirect('/telephone-new-claim/iteration-7/manual-address')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/bank')
  }
})

router.post('/telephone-new-claim/iteration-7/manual-address', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/bank')
})

router.post('/telephone-new-claim/iteration-7/bank', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/sp-date')
})

// Do you want your State Pension from the earliest possible date? YES/NO
router.post('/telephone-new-claim/iteration-7/sp-date', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/contact')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/claim-date')
  }
})

router.post('/telephone-new-claim/iteration-7/claim-date', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/contact')
})

router.post('/telephone-new-claim/iteration-7/contact', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/alternative')
})

router.post('/telephone-new-claim/iteration-7/alternative', function (req, res) {
  if (req.body.alternative === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/alternative2')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/marital-status')
  }
})

router.post('/telephone-new-claim/iteration-7/alternative2', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/marital-status')
})

router.post('/telephone-new-claim/iteration-7/marital-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/lived-worked')
})

router.post('/telephone-new-claim/iteration-7/civilpartnership-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/lived-worked')
})

router.post('/telephone-new-claim/iteration-7/widowed-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/lived-worked')
})

router.post('/telephone-new-claim/iteration-7/divorced-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/lived-worked')
})

router.post('/telephone-new-claim/iteration-7/dissolvedcp-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/lived-worked')
})

router.post('/telephone-new-claim/iteration-7/lived-worked', function (req, res) {
  if (req.body['lived-worked'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/country-1')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/check-answers')
  }
})

router.post('/telephone-new-claim/iteration-7/country-1', function (req, res) {
  if (req.body['another-country-1'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/country-2')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/eea-question-single')
  } 
})

router.post('/telephone-new-claim/iteration-7/country-2', function (req, res) {
  if (req.body['another-country-2'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/country-3')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/eea-routes')
  }
})

router.post('/telephone-new-claim/iteration-7/country-3', function (req, res) {
  if (req.body['another-country-3'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/country-4')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/eea-routes')
  }
})

router.post('/telephone-new-claim/iteration-7/country-4', function (req, res) {
  if (req.body['another-country-4'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/country-5')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/eea-routes')
  }
})

router.post('/telephone-new-claim/iteration-7/country-5', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/eea-routes')
})

router.post('/telephone-new-claim/iteration-7/eea-question-single', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/check-answers')
})

router.post('/telephone-new-claim/iteration-7/eea-routes', function (req, res) {
  if (req.body['options'] === 'optionA') {
    res.redirect('eea-question-multi')
  } else if (req.body['options'] === 'optionB') {
    res.redirect('eea-question-multi-2')
  } else if (req.body['options'] === 'optionC') {
    res.redirect('eea-question-multi-3')
  }
})

router.post('/telephone-new-claim/iteration-7/eea-question-multi', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/eea-question-multi-check')
})

router.post('/telephone-new-claim/iteration-7/eea-question-multi-check', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/check-answers')
})

router.post('/telephone-new-claim/iteration-7/eea-question-multi-2', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/check-answers')
})

router.post('/telephone-new-claim/iteration-7/eea-question-multi', function (req, res) {
  if (req.body['EUpensions'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/eea-question-multi-check')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/check-answers')
  }
})

router.post('/telephone-new-claim/iteration-7/eea-question-multi-3', function (req, res) {
  if (req.body['EUpensions'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/eea-question-multi-check-2')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/check-answers')
  }
})

router.post('/telephone-new-claim/iteration-7/eea-question-multi-check-2', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/check-answers')
})

router.post('/telephone-new-claim/iteration-7/worked', function (req, res) {
  if (req.body['worked-outside'] === 'yes') {
    res.redirect('/telephone-new-claim/iteration-7/worked-countries')
  } else {
    res.redirect('/telephone-new-claim/iteration-7/check-answers')
  }
})

router.post('/telephone-new-claim/iteration-7/marital-status', function (req, res) {
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

router.post('/telephone-new-claim/iteration-7/dob', function (req, res) {
  if (req.session.data.nino === 'xx347612a') {
    res.redirect('dob-request')
  } else if (req.session.data.nino === 'XX347612A') {
    res.redirect('dob-request')
  } else {
    res.redirect('address')
  }
})

router.post('/telephone-new-claim/iteration-7/check-answers', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/declaration')
})

router.post('/telephone-new-claim/iteration-7/declaration', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/complete')
})

router.post('/telephone-new-claim/iteration-7/dob-evidence', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-7/find')
})

// Iteration 4

router.post('/iteration31d/change-status', function (req, res) {
  if (req.body.maritalstatus === 'married') {
    res.redirect('marital-details')
  } if (req.body.maritalstatus === 'civil-partnership') {
    res.redirect('CP-details')
  }
})

router.post('/iteration31d/verify', function (req, res) {
  if (req.body['verified-or-notverified'] === 'verified') {
    res.redirect('CP-detailsV')
  } else {
    res.redirect('new-date')
  }
})

// iteration 3

router.post('/telephone-new-claim/iteration-3/find', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/find-1')
})

router.post('/telephone-new-claim/iteration-3/sp-date', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/lived-outside')
})

router.post('/telephone-new-claim/iteration-3/security1', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/security2')
})

router.post('/telephone-new-claim/iteration-3/security2', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/sp-date')
})

router.post('/telephone-new-claim/iteration-3/lived-outside', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/worked-outside')
})

router.post('/telephone-new-claim/iteration-3/worked-outside', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/marital')
})

router.post('/telephone-new-claim/iteration-3/marital', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/spouse')
})

router.post('/telephone-new-claim/iteration-3/spouse', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/contact-details')
})

router.post('/telephone-new-claim/iteration-3/contact-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/bank')
})

router.post('/telephone-new-claim/iteration-3/declaration', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/payments')
})

router.post('/telephone-new-claim/iteration-3/payments', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-3/find')
})

router.post('/telephone-new-claim/iteration-3/frequency', function (req, res) {
  if (req.body.frequency === 'yes') {
    res.redirect('/telephone-new-claim/iteration-3/declaration')
  } else {
    res.redirect('/telephone-new-claim/iteration-3/change-frequency')
  }
})

// Iteration 2

router.post('/telephone-new-claim/iteration-2/find', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/find-1')
})

router.post('/telephone-new-claim/iteration-2/sp-date', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/lived-outside')
})

router.post('/telephone-new-claim/iteration-2/security1', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/security2')
})

router.post('/telephone-new-claim/iteration-2/security2', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/sp-date')
})

router.post('/telephone-new-claim/iteration-2/lived-outside', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/worked-outside')
})

router.post('/telephone-new-claim/iteration-2/worked-outside', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/marital')
})

router.post('/telephone-new-claim/iteration-2/marital', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/spouse')
})

router.post('/telephone-new-claim/iteration-2/spouse', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/contact-details')
})

router.post('/telephone-new-claim/iteration-2/contact-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/bank')
})

router.post('/telephone-new-claim/iteration-2/declaration', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/payments')
})

router.post('/telephone-new-claim/iteration-2/payments', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-2/find')
})

router.post('/telephone-new-claim/iteration-2/frequency', function (req, res) {
  if (req.body.frequency === 'yes') {
    res.redirect('/telephone-new-claim/iteration-2/declaration')
  } else {
    res.redirect('/telephone-new-claim/iteration-2/change-frequency')
  }
})

// Iteration 1

router.post('/telephone-new-claim/iteration-/find', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/find-1')
})

router.post('/telephone-new-claim/iteration-/sp-date', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/lived-outside')
})

router.post('/telephone-new-claim/iteration-/security1', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/security2')
})

router.post('/telephone-new-claim/iteration-/security2', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/sp-date')
})

router.post('/telephone-new-claim/iteration-/lived-outside', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/worked-outside')
})

router.post('/telephone-new-claim/iteration-/worked-outside', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/marital')
})

router.post('/telephone-new-claim/iteration-/marital', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/spouse')
})

router.post('/telephone-new-claim/iteration-/spouse', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/contact-details')
})

router.post('/telephone-new-claim/iteration-/contact-details', (req, res) => {
  res.redirect('/telephone-new-claim/iteration-/bank')
})

module.exports = router
