const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Divorced conversion task or new claims task

router.post('/marital-status/widowed/change-marital-status', function (req, res) {
if (req.body['maritalstatus'] === 'widowed') {
    res.redirect('late-spouse-dod')
  } else {
    res.redirect('divorced')
  }
})

router.post('/marital-status/widowed/late-spouse-dod', function (req, res) {
  res.redirect('spouse-sp-in-payment')
})

router.post('/marital-status/widowed/spouse-sp-in-payment', function (req, res) {
  if (req.body['spousesp'] === 'spinpayment') {
    res.redirect('check-details-info-missing-new')
  } else {
    res.redirect('check-details-info-missing-conversion')
  }
})

module.exports = router
