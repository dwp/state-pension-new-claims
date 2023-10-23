const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/frequency', (req, res) => {
  res.redirect('/iteration5/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/bankdetails', (req, res) => {
  res.redirect('/iteration5/reissue-payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/workphone', (req, res) => {
  res.redirect('/iteration5/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/mobilephone', (req, res) => {
  res.redirect('/iteration5/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/email', (req, res) => {
  res.redirect('/iteration5/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/homephone', (req, res) => {
  res.redirect('/iteration5/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/find', (req, res) => {
  res.redirect('/iteration5/find-1')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration5/address', (req, res) => {
  res.redirect('/iteration5/address-1')
})

router.post('/iteration5/address-1', (req, res) => {
  res.redirect('/iteration5/homephone-address')
})

// Change of address and home phone number
router.post('/iteration5/homephone-address', function (req, res) {
  if (req.body['homephone-address'] === 'Yes') {
    res.redirect('homephone')
  } else {
    res.redirect('contact')
  }
})

// Home phone number removal
router.post('/iteration5/homephone-remove', function (req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('homephone')
  }
})

// Mobile phone number removal
router.post('/iteration5/mobilephone-remove', function (req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('mobilephone')
  }
})

// Work phone number removal & change
router.post('/iteration5/workphone-remove', function (req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('workphone')
  }
})

router.post('/iteration5/workphone', (req, res) => {
  res.redirect('/iteration5/overview')
})

// Email removal
router.post('/iteration5/email-remove', function (req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('email')
  }
})

// Marital status change
router.post('/iteration5/marital-status', (req, res) => {
  res.redirect('/iteration5/marriage-details')
})

router.post('/iteration5/marriage-details', (req, res) => {
  res.redirect('/iteration5/marriage-certificate')
})

// Contact preferences
router.post('/iteration5/contact-preferences', (req, res) => {
  res.redirect('/iteration5/contact')
})

// Stopping payments
router.post('/iteration5/prevent-payments', function (req, res) {
  if (req.body['stopped-reason'] === 'dead') {
    res.redirect('death-date')
  } else {
    res.redirect('imprisioned-date')
  }
})

// Do we have death arrears payee details?
router.post('/iteration5/payee', function (req, res) {
  if (req.body['payee-details'] === 'yes') {
    res.redirect('payee-letter')
  } else {
    res.redirect('overview-dead-nopayee')
  }
})

// Death date and contact information
router.post('/iteration5/death-date', (req, res) => {
  res.redirect('/iteration5/death-contact')
})

router.post('/iteration5/death-contact', (req, res) => {
  res.redirect('/iteration5/death-contact-address')
})

router.post('/iteration5/death-contact-address', (req, res) => {
  res.redirect('/iteration5/overview-dead-notverified')
})

// Verifying a death
router.post('/iteration5/death-verification', function (req, res) {
  if (req.body.deathdate === 'yes') {
    res.redirect('overview-dead-moneyowed')
  } else {
    res.redirect('new-deathdate')
  }
})

router.post('/iteration5/new-deathdate', (req, res) => {
  res.redirect('/iteration5/overview-dead-moneyowed')
})

module.exports = router
