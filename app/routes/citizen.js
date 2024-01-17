const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Invite code or GOV.UK Verify

router.post('/citizen/confirm-identity', function (req, res) {
  if (req.body['confirm-identity'] === 'code') {
    res.redirect('your-details')
  } else {
    res.redirect('https://get-state-pension.service.gov.uk/verify')
  }
})

router.post('/citizen/check-your-start-date', (req, res) => {
  res.redirect('/citizen/prison')
})

// Prison
router.post('/citizen/prison', (req, res) => {
  res.redirect('/citizen/prison-date')
})

router.post('/citizen/prison-date', (req, res) => {
  res.redirect('/citizen/prison-date-leave')
})

router.post('/citizen/prison-date-leave', (req, res) => {
  res.redirect('/citizen/lived-abroad')
})

// Alt formats yes/no
router.post('/citizen/alt-formats', function (req, res) {
  if (req.body['alt-formats'] === 'yes') {
    res.redirect('alt-formats-choice')
  } else {
    res.redirect('payment-bank')
  }
})

// Lived abroad yes/no
router.post('/citizen/lived-abroad', function (req, res) {
  if (req.body['lived-abroad'] === 'yes') {
    res.redirect('countries-lived')
  } else {
    res.redirect('worked-abroad')
  }
})

// Worked abroad yes/no
router.post('/citizen/worked-abroad', function (req, res) {
  if (req.body['worked-abroad'] === 'yes') {
    res.redirect('countries-worked-details')
  } else {
    res.redirect('marital-status')
  }
})

// EU pensions yes/no
router.post('/citizen/eea-intro-multi-1a', function (req, res) {
  if (req.body['yes'] === 'yes') {
    res.redirect('marital-status')
  } else {
    res.redirect('marital-status')
  }
})

// marital
router.post('/citizen/marital-status', function (req, res) {
  if (req.body.marital === 'married') {
    res.redirect('marital-details')
  } else if (req.body.marital === 'divorced') {
    res.redirect('marital-details-divorce')
  } else if (req.body.marital === 'civil') {
    res.redirect('marital-details-civil-partner')
  } else if (req.body.marital === 'dissolved') {
    res.redirect('marital-details-ex-civil-partner')
  } else if (req.body.marital === 'widowed') {
    res.redirect('marital-details-late-spouse')
  } else {
    res.redirect('/citizen/contact')
  }
})

router.post('/citizen/marital-details-divorce', (req, res) => {
  res.redirect('/citizen/ex-spouse-details')
})

router.post('/citizen/marital-details-late-spouse', (req, res) => {
  res.redirect('/citizen/late-spouse-details')
})

router.post('/citizen/marital-details', (req, res) => {
  res.redirect('/citizen/spouse-details')
})

router.post('/citizen/marital-details-ex-civil-partner', (req, res) => {
  res.redirect('/citizen/ex-civil-partner-details')
})

router.post('/citizen/marital-details-civil-partner', (req, res) => {
  res.redirect('/citizen/civil-partner-details')
})

router.post('/citizen/spouse-details', (req, res) => {
  res.redirect('/citizen/contact')
})

router.post('/citizen/late-spouse-details', (req, res) => {
  res.redirect('/citizen/contact')
})

router.post('/citizen/ex-spouse-details', (req, res) => {
  res.redirect('/citizen/contact')
})

router.post('/citizen/ex-civil-partner-details', (req, res) => {
  res.redirect('/citizen/contact')
})

router.post('/citizen/civil-partner-details', (req, res) => {
  res.redirect('/citizen/contact')
})

router.post('/citizen/contact', (req, res) => {
  res.redirect('/citizen/alt-formats')
})

// Alt formats yes/no
router.post('/citizen/alt-formats', function (req, res) {
  if (req.body['alt-formats'] === 'yes') {
    res.redirect('alt-formats-choice')
  } else {
    res.redirect('payment-bank')
  }
})

router.post('/citizen/alt-formats-choice', (req, res) => {
  res.redirect('/citizen/payment-bank')
})

router.post('/citizen/payment-bank', (req, res) => {
  res.redirect('/citizen/check-answers')
})

router.post('/citizen/check-successful', (req, res) => {
  res.redirect('/citizen/check-answers')
})

router.post('/citizen/check-failed', (req, res) => {
  res.redirect('/citizen/check-answers')
})

router.post('/citizen/check-answers', (req, res) => {
  res.redirect('/citizen/declaration')
})

router.post('/citizen/declaration', (req, res) => {
  res.redirect('/citizen/complete')
})

// Alt formats yes/no
router.post('/citizen/question-3', function (req, res) {
  if (req.body['security-question-three'] === '10000') {
    res.redirect('check-successful')
  } else {
    res.redirect('check-failed')
  }
})

module.exports = router
