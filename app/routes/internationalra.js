const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Iteration 1

router.post('/international-record/ra-iteration-1/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-hmrc')
  } else {
    res.redirect('liason-forms')
  }
})

router.post('/international-record/ra-iteration-1/rf1-returned', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('liason-forms-rf1')
  } else {
    res.redirect('lived-worked-details-rf1')
  }
})

// Iteration 2

router.post('/international-record/ra-iteration-2/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-hmrc')
  } else {
    res.redirect('liason-forms')
  }
})

router.post('/international-record/ra-iteration-2/enquiry-letter-returned', function (req, res) {
  if (req.body['enquiry-letter-returned'] === 'yes') {
    res.redirect('date-of-entry')
  } else {
    res.redirect('lived-worked-details')
  }
})

router.post('/international-record/ra-iteration-2/rf1-returned', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('liason-forms-rf1')
  } else {
    res.redirect('lived-worked-details-rf1')
  }
})

module.exports = router
