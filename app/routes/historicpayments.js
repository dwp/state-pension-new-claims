const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.path !== '/historic-payments/admin-payments') {
    req.session.data['showBanner'] = 'no'
    // req.session.data['historicPaymentAdded'] = ''
  }
  next()
})

router.post('/historic-payments/admin-add-historic-payment', (req, res) => {
  const changeWeeklyDetails = req.session.data['changeWeeklyDetails']

  if (changeWeeklyDetails === 'yes') {
    res.redirect('admin-change-weekly-details')
  } else {
    res.redirect('admin-historic-payment-cya')
  }
})

router.post('/historic-payments/admin-change-weekly-details', (req, res) => {
  res.redirect('admin-historic-payment-cya')
})

router.post('/historic-payments/admin-historic-payment-cya', (req, res) => {
  req.session.data['historicPaymentAdded'] = 'yes'
  req.session.data['showBanner'] = 'yes'

  res.redirect('record-payment')
})

module.exports = router
