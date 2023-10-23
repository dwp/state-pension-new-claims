const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/frequency', (req, res) => {
  res.redirect('/iteration5b/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/bankdetails', (req, res) => {
  res.redirect('/iteration5b/reissue-payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/workphone', (req, res) => {
  res.redirect('/iteration5b/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/mobilephone', (req, res) => {
  res.redirect('/iteration5b/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/email', (req, res) => {
  res.redirect('/iteration5b/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/homephone', (req, res) => {
  res.redirect('/iteration5b/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/find', (req, res) => {
  res.redirect('/iteration5b/find-1')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5b/address', (req, res) => {
  res.redirect('/iteration5b/address-1')
})

router.post('/iteration5b/address-1', (req, res) => {
  res.redirect('/iteration5b/homephone-address')
})

// Change of address and home phone number
router.post('/iteration5b/homephone-address', function (req, res) {
  if (req.body['homephone-address'] === 'Yes') {
    res.redirect('homephone')
  } else {
    res.redirect('contact')
  }
})

// Home phone number removal
router.post('/iteration5b/homephone-remove', function (req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('homephone')
  }
})

// Mobile phone number removal
router.post('/iteration5b/mobilephone-remove', function (req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('mobilephone')
  }
})

// Work phone number removal & change
router.post('/iteration5b/workphone-remove', function (req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('workphone')
  }
})

router.post('/iteration5b/workphone', (req, res) => {
  res.redirect('/iteration5b/overview')
})

// Email removal
router.post('/iteration5b/email-remove', function (req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('email')
  }
})

// Marital status change
router.post('/iteration5b/marital-status', (req, res) => {
  res.redirect('/iteration5b/marriage-details')
})

router.post('/iteration5b/marriage-details', (req, res) => {
  res.redirect('/iteration5b/marriage-certificate')
})

// Contact preferences
router.post('/iteration5b/contact-preferences', (req, res) => {
  res.redirect('/iteration5b/contact')
})

// Stopping payments
router.post('/iteration5b/prevent-payments', function (req, res) {
  if (req.body['stopped-reason'] === 'dead') {
    res.redirect('death-date')
  } else {
    res.redirect('imprisioned-date')
  }
})

// Do we have death arrears payee details?
router.post('/iteration5b/payee', function (req, res) {
  if (req.body['payee-details'] === 'yes') {
    res.redirect('payee-letter')
  } else {
    res.redirect('overview-dead-nopayee')
  }
})

// Death date and contact information

router.post('/iteration5b/death-date', (req, res) => {
  res.redirect('/iteration5b/death-contact-address')
})

router.post('/iteration5b/death-contact-address', (req, res) => {
  res.redirect('/iteration5b/arrears')
})

router.post('/iteration5b/arrears', (req, res) => {
  res.redirect('/iteration5b/overview-dead-moneyowed')
})

router.post('/iteration5b/dap', (req, res) => {
  res.redirect('/iteration5b/overview-dead')
})

router.post('/iteration5b/dap-payment', (req, res) => {
  res.redirect('/iteration5b/overview-dead')
})

// Verifying a death
router.post('/iteration5b/death-verification', function (req, res) {
  if (req.body.deathdate === 'yes') {
    res.redirect('overview-dead-moneyowed')
  } else {
    res.redirect('new-deathdate')
  }
})

router.post('/iteration5b/new-deathdate', (req, res) => {
  res.redirect('/iteration5b/overview-dead-moneyowed')
})

module.exports = router
