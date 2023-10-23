const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/frequency', (req, res) => {
  res.redirect('/bpviteration2/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/bankdetails', (req, res) => {
  res.redirect('/bpviteration2/reissue-payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/workphone', (req, res) => {
  res.redirect('/bpviteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/mobilephone', (req, res) => {
  res.redirect('/bpviteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/email', (req, res) => {
  res.redirect('/bpviteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/homephone', (req, res) => {
  res.redirect('/bpviteration2/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/find', (req, res) => {
  res.redirect('/bpviteration2/find-1')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration2/address', (req, res) => {
  res.redirect('/bpviteration2/address-1')
})

router.post('/bpviteration2/address-1', (req, res) => {
  res.redirect('/bpviteration2/homephone-address')
})

// Change of address and home phone number
router.post('/bpviteration2/homephone-address', function (req, res) {
  if (req.body['homephone-address'] === 'Yes') {
    res.redirect('homephone')
  } else {
    res.redirect('contact')
  }
})

// Home phone number removal
router.post('/bpviteration2/homephone-remove', function (req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('homephone')
  }
})

// Change a payment status
router.post('/bpviteration2/change-status', function (req, res) {
  if (req.body['status-change'] === 'bank-details') {
    res.redirect('payment-dlo')
  } else {
    res.redirect('payment')
  }
})

// Change a payment status option two
router.post('/bpviteration2/change-status-2', function (req, res) {
  if (req.body['status-change'] === 'not-paid') {
    res.redirect('payment-returned-2')
  } else {
    res.redirect('payment')
  }
})

// Mobile phone number removal
router.post('/bpviteration2/mobilephone-remove', function (req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('mobilephone')
  }
})

// Work phone number removal & change
router.post('/bpviteration2/workphone-remove', function (req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('workphone')
  }
})

router.post('/bpviteration2/workphone', (req, res) => {
  res.redirect('/bpviteration2/overview')
})

// Email removal
router.post('/bpviteration2/email-remove', function (req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('email')
  }
})

// Marital status change
router.post('/bpviteration2/marital-status', (req, res) => {
  res.redirect('/bpviteration2/marriage-details')
})

router.post('/bpviteration2/marriage-details', (req, res) => {
  res.redirect('/bpviteration2/marriage-certificate')
})

// Contact preferences
router.post('/bpviteration2/contact-preferences', (req, res) => {
  res.redirect('/bpviteration2/contact')
})

// Stopping payments
router.post('/bpviteration2/prevent-payments', function (req, res) {
  if (req.body['stopped-reason'] === 'dead') {
    res.redirect('death-date')
  } else {
    res.redirect('imprisioned-date')
  }
})

module.exports = router
