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

// Prison task

router.post('/paperclaims/prison-task-final/paper-prison-task-details', (req, res) => {
  res.redirect('paper-prison-task')
})

router.post('/paperclaims/prison-task-final/paper-prison-task', function (req, res) {
  if (req.body.needDates === 'yes') {
    res.redirect('prison-dates')
  } else if (req.body.needDates === 'no') {
    res.redirect('award-calculated')
  } else if (req.body.needDates === 'cannot') {
    res.redirect('could-not-get')
  }
})

router.post('/paperclaims/prison-task-final/need-dates', function (req, res) {
  if (req.body.foundGuilty === 'yes') {
    res.redirect('prison-dates')
  } else if (req.body.foundGuilty === 'no') {
    res.redirect('award-calculated')
  } else if (req.body.foundGuilty === 'cannot') {
    res.redirect('could-not-get')
  }
})

router.post('/paperclaims/prison-task-final/prison-dates', (req, res) => {
  res.redirect('award-calculated')
})

module.exports = router
