const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/srb-pre-award/srb-question', function (req, res) {
  if (req.body['srbQuestion'] === 'yes') {
    res.redirect('payment-date')
  } else {
    res.redirect('dashboard')
  }
})

router.post('/srb-pre-award/payment-date', function (req, res) {
  if (req.body['paymentDate'] === 'yes') {
    res.redirect('enter-date')
  } else if (req.body['paymentDate'] === 'no') {
    res.redirect('send-email')
  } else {
    res.redirect('calculate-award')
  }
})

router.post('/srb-pre-award/send-email', (req, res) => {
  res.redirect('dashboard')
})

router.post('/srb-pre-award/enter-date', (req, res) => {
  res.redirect('calculate-award')
})

router.post('/srb-pre-award/calculate-award', function (req, res) {
  if (req.body['enterSP'] === '230.25') {
    res.redirect('enter-pp')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/srb-pre-award/enter-pp', (req, res) => {
  res.redirect('check-answers')
})

router.post('/srb-pre-award/payment-date-2', function (req, res) {
  if (req.body['paymentDate2'] === 'yes') {
    res.redirect('enter-date-2')
  } else if (req.body['paymentDate2'] === 'no') {
    res.redirect('send-email')
  } else {
    res.redirect('calculate-award-2')
  }
})

router.post('/srb-pre-award/enter-date-2', (req, res) => {
  res.redirect('calculate-award-2')
})

router.post('/srb-pre-award/calculate-award-2', function (req, res) {
  if (req.body['enterSP2'] === '230.25') {
    res.redirect('enter-pp-2')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/srb-pre-award/enter-pp-2', (req, res) => {
  res.redirect('check-answers')
})

router.post('/srb-pre-award/check-answers', (req, res) => {
  res.redirect('confirm-award')
})

router.post('/srb-pre-award/confirm-award', (req, res) => {
  res.redirect('dashboard')
})

module.exports = router
