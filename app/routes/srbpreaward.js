const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/srb-pre-award/srb-question', function (req, res) {
  if (req.body['srbQuestion'] === 'yes') {
    res.redirect('reason-for-srb')
  } else {
    res.redirect('dashboard')
  }
})

router.post('/srb-pre-award/reason-for-srb', function (req, res) {
  if (req.body['srbReason'] === '3a' || req.body['srbReason'] === '2a') {
    res.redirect('payment-date')
  } else {
    res.redirect('calculate-award')
  }
})

router.post('/srb-pre-award/payment-date', function (req, res) {
  if (req.body['paymentDate'] === 'yes') {
    res.redirect('calculate-award')
  } else {
    res.redirect('send-email')
  }
})

router.post('/srb-pre-award/send-email', (req, res) => {
  res.redirect('dashboard')
})

router.post('/srb-pre-award/calculate-award', function (req, res) {
  if (req.body['enterSP'] === '230.25') {
    res.redirect('enter-pp')
  } else {
    res.redirect('enter-date')
  }
})

router.post('/srb-pre-award/enter-pp', (req, res) => {
  res.redirect('enter-date')
})

router.post('/srb-pre-award/enter-date', (req, res) => {
  res.redirect('check-answers')
})

module.exports = router
