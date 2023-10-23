const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/frequency', (req, res) => {
  res.redirect('/bpviteration/cps')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/bankdetails', (req, res) => {
  res.redirect('/bpviteration/cps')
})

router.post('/bpviteration/cps', (req, res) => {
  res.redirect('/bpviteration/payment')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/workphone', (req, res) => {
  res.redirect('/bpviteration/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/mobilephone', (req, res) => {
  res.redirect('/bpviteration/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/email', (req, res) => {
  res.redirect('/bpviteration/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/homephone', (req, res) => {
  res.redirect('/bpviteration/overview')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/find', (req, res) => {
  res.redirect('/bpviteration/find-1')
})

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpviteration/address', (req, res) => {
  res.redirect('/bpviteration/address-1')
})

router.post('/bpviteration/address-1', (req, res) => {
  res.redirect('/bpviteration/overview')
})

// Change of address and home phone number
router.post('/bpviteration/homephone-address', function (req, res) {
  if (req.body['homephone-address'] === 'Yes') {
    res.redirect('homephone')
  } else {
    res.redirect('overview')
  }
})

// Home phone number removal
router.post('/bpviteration/homephone-remove', function (req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('overview')
  } else {
    res.redirect('homephone')
  }
})

// Mobile phone number removal
router.post('/bpviteration/mobilephone-remove', function (req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('mobilephone')
  }
})

// Work phone number removal
router.post('/bpviteration/workphone-remove', function (req, res) {
  if (req.body['workphone-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('workphone')
  }
})

// Email removal
router.post('/bpviteration/email-remove', function (req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('overview')
  } else {
    res.redirect('email')
  }
})

module.exports = router
