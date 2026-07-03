const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.path !== '/historic-payments/admin-payments') {
    req.session.data['showBanner'] = 'no'
    req.session.data['historicPaymentAdded'] = ''
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

  req.session.data['startDate-day'] = ''
  req.session.data['startDate-month'] = ''
  req.session.data['startDate-year'] = ''

  req.session.data['endDate-day'] = ''
  req.session.data['endDate-month'] = ''
  req.session.data['endDate-year'] = ''

  req.session.data['sentDate-day'] = ''
  req.session.data['sentDate-month'] = ''
  req.session.data['sentDate-year'] = ''

  req.session.data['paidDate-day'] = ''
  req.session.data['paidDate-month'] = ''
  req.session.data['paidDate-year'] = ''

  req.session.data['paymentAmount'] = ''

  req.session.data['changeWeeklyDetails'] = ''
  req.session.data['statePensionAmount'] = ''
  req.session.data['protectedPaymentAmount'] = ''
  req.session.data['extraStatePensionAmount'] = ''
  req.session.data['inheritedStatePensionAmount'] = ''

  res.redirect('record-payment')
})

module.exports = router
