const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/frequency', (req, res) => {
  res.redirect('/iteration2/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/bankdetails', (req, res) => {
  res.redirect('/iteration2/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/workphone', (req, res) => {
  res.redirect('/iteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/mobilephone', (req, res) => {
  res.redirect('/iteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/email', (req, res) => {
  res.redirect('/iteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/homephone', (req, res) => {
  res.redirect('/iteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/find', (req, res) => {
  res.redirect('/iteration2/find-1')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/address', (req, res) => {
  res.redirect('/iteration2/address-1')
})

router.post('/iteration2/address-1', (req, res) => {
  res.redirect('/iteration2/homephone-address')
})

// Change of address and home phone number
router.post('/iteration2/homephone-address', function (req, res) {
  if (req.body['homephone-address'] === 'Yes') {
    res.redirect('homephone')
  } else {
    res.redirect('contact')
  }
})

// Home phone number removal
router.post('/iteration2/homephone-remove', function (req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('homephone')
  }
})

// Mobile phone number removal
router.post('/iteration2/mobilephone-remove', function (req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('mobilephone')
  }
})

// Work phone number removal & change
router.post('/iteration2/workphone-remove', function (req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('workphone')
  }
})

router.post('/iteration2/workphone', (req, res) => {
  res.redirect('/iteration2/overview')
})

// Email removal
router.post('/iteration2/email-remove', function (req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('email')
  }
})

// Marital status change
router.post('/iteration2/marital-status', (req, res) => {
  res.redirect('/iteration2/marriage-details')
})

router.post('/iteration2/marriage-details', (req, res) => {
  res.redirect('/iteration2/marriage-certificate')
})

// Contact preferences
router.post('/iteration2/contact-preferences', (req, res) => {
  res.redirect('/iteration2/overview')
})

// Stopping payments
router.post('/iteration2/prevent-payments', function (req, res) {
  if (req.body['stopped-reason'] === 'dead') {
    res.redirect('death-date')
  } else {
    res.redirect('imprisioned-date')
  }
})

module.exports = router
