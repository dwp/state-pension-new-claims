const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/paperclaims/iteration-4/find-1', function (req, res) {
  if (req.body.process === 'yes') {
    res.redirect('/paperclaims/iteration-4/ni')
  } else {
    res.redirect('/paperclaims/iteration-4/drop-out')
  }
})

router.post('/paperclaims/iteration-5c/marital-status', function (req, res) {
  if (req.body['marital-status'] === 'divorced') {
    res.redirect('/paperclaims/iteration-5c/marital-details')
  } else {
    res.redirect('/paperclaims/iteration-5c/marital-details-civil')
  }
})

// Iteration 9 (POST SPA)

router.post('/paperclaims/iteration-9/find', function (req, res) {
  if (req.body.nino === 'QQ 12 34 56 X') {
    res.redirect('/paperclaims/iteration-9/deferred')
  } else {
    res.redirect('/paperclaims/iteration-9/dob')
  }
})

router.post('/paperclaims/iteration-9/deferred', (req, res) => {
  res.redirect('/paperclaims/iteration-9/dob')
})

router.post('/paperclaims/iteration-9/dob', (req, res) => {
  res.redirect('/paperclaims/iteration-9/sp-date')
})

router.post('/paperclaims/iteration-9/sp-date', (req, res) => {
  res.redirect('/paperclaims/iteration-9/prison')
})

router.post('/paperclaims/iteration-9/prison', function (req, res) {
  if (req.body.prison === 'yes') {
    res.redirect('/paperclaims/iteration-9/prison-details')
  } else {
    res.redirect('/paperclaims/iteration-9/contacted')
  }
})

module.exports = router
