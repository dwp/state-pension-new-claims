const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/frequency', (req, res) => {
  res.redirect('/iteration6/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/bankdetails', (req, res) => {
  res.redirect('/iteration6/reissue-payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/workphone', (req, res) => {
  res.redirect('/iteration6/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/mobilephone', (req, res) => {
  res.redirect('/iteration6/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/email', (req, res) => {
  res.redirect('/iteration6/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/homephone', (req, res) => {
  res.redirect('/iteration6/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/find', (req, res) => {
  res.redirect('/iteration6/find-1')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration6/address', (req, res) => {
  res.redirect('/iteration6/address-1')
})

router.post('/iteration6/address-1', (req, res) => {
  res.redirect('/iteration6/homephone-address')
})

// Change of address and home phone number
router.post('/iteration6/homephone-address', function (req, res) {
  if (req.body['homephone-address'] === 'Yes') {
    res.redirect('homephone')
  } else {
    res.redirect('contact')
  }
})

// Home phone number removal
router.post('/iteration6/homephone-remove', function (req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('homephone')
  }
})

// Mobile phone number removal
router.post('/iteration6/mobilephone-remove', function (req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('mobilephone')
  }
})

// Work phone number removal & change
router.post('/iteration6/workphone-remove', function (req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('workphone')
  }
})

router.post('/iteration6/workphone', (req, res) => {
  res.redirect('/iteration6/overview')
})

// Email removal
router.post('/iteration6/email-remove', function (req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('email')
  }
})

// Marital status change
router.post('/iteration6/marital-status', (req, res) => {
  res.redirect('/iteration6/marriage-details')
})

router.post('/iteration6/marriage-details', (req, res) => {
  res.redirect('/iteration6/marriage-certificate')
})

// Contact preferences
router.post('/iteration6/contact-preferences', (req, res) => {
  res.redirect('/iteration6/contact')
})

// Stopping payments
router.post('/iteration6/prevent-payments', function (req, res) {
  if (req.body['stopped-reason'] === 'dead') {
    res.redirect('death-date')
  } else {
    res.redirect('imprisioned-date')
  }
})

// Do we have death arrears payee details?
router.post('/iteration6/payee', function (req, res) {
  if (req.body['payee-details'] === 'yes') {
    res.redirect('payee-letter')
  } else {
    res.redirect('overview-dead-nopayee')
  }
})

// Death date and contact information

router.post('/iteration6/death-date', (req, res) => {
  res.redirect('/iteration6/death-contact-address')
})

router.post('/iteration6/death-contact-address', (req, res) => {
  res.redirect('/iteration6/arrears')
})

router.post('/iteration6/arrears', (req, res) => {
  res.redirect('/iteration6/overview-dead-moneyowed')
})

router.post('/iteration6/dap', (req, res) => {
  res.redirect('/iteration6/overview-dead')
})

router.post('/iteration6/dap-payment', (req, res) => {
  res.redirect('/iteration6/overview-dead')
})

// Verifying a death
router.post('/iteration6/death-verification', function (req, res) {
  if (req.body.deathdate === 'yes') {
    res.redirect('overview-dead-moneyowed')
  } else {
    res.redirect('new-deathdate')
  }
})

router.post('/iteration6/new-deathdate', (req, res) => {
  res.redirect('/iteration6/overview-dead-moneyowed')
})

module.exports = router
