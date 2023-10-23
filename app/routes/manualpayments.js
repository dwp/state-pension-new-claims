const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/manual-payments/returned-payment', function (req, res) {
  if (req.body.returned === 'yes') {
    res.redirect('payment-returned')
  } if (req.body.returned === 'no') {
    res.redirect('payment-details-2')
  }
})

router.post('/manual-payments/manual-payment', (req, res) => {
  res.redirect('/manual-payments/reissue-details')
})

router.post('/manual-payments/reissue-details', function (req, res) {
  if (req.body.reissue === 'yes') {
    res.redirect('reissue-payment')
  } if (req.body.reissue === 'no') {
    res.redirect('manual-payment')
  }
})

module.exports = router
