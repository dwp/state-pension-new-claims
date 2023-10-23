const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/widows/conversion-task/task-details', (req, res) => {
  res.redirect('/widows/conversion-task/check-details-info-missing')
})

router.post('/widows/conversion-task/check-details-info-missing', function (req, res) {
  if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('/widows/conversion-task/nothing-to-inherit')
  } else if (req.body.decision === 'save') {
    res.redirect('/widows/conversion-task/get-a-task-return')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('/widows/conversion-task/inheritable-amounts')
  } else {
    res.redirect('/widows/conversion-task/more-info-letter')
  }
})

router.post('/widows/conversion-task/dom', (req, res) => {
  res.redirect('/widows/conversion-task/check-details-info-missing')
})

router.post('/widows/conversion-task/award-calculated', (req, res) => {
  res.redirect('/widows/conversion-task/get')
})

// Conversion record

router.post('/widows/conversion/dom', (req, res) => {
  res.redirect('/widows/conversion/check-details-info-missing')
})

router.post('/widows/conversion/inheritable-amounts', (req, res) => {
  res.redirect('/widows/conversion/award-calculated')
})

router.post('/widows/conversion/award-calculcated', (req, res) => {
  res.redirect('/widows/conversion/personal-widowed')
})

router.post('/widows/conversion/change-marital-status', function (req, res) {
  if (req.body.maritalstatus === 'divorced') {
    res.redirect('/widows/conversion/divorced')
  } else {
    res.redirect('/widows/conversion/late-spouse-dod')
  }
})

router.post('/widows/conversion/late-spouse-dod', (req, res) => {
  res.redirect('/widows/conversion/check-details-info-missing')
})

router.post('/widows/conversion/check-details-info-missing', function (req, res) {
  if (req.body['conversion-decision'] === 'nothing-to-inherit') {
    res.redirect('/widows/conversion/nothing-to-inherit')
  } else if (req.body['conversion-decision'] === 'save') {
    res.redirect('/widows/conversion/get-a-task-return')
  } else if (req.body['conversion-decision'] === 'inheritable-amounts') {
    res.redirect('/widows/conversion/inheritable-amounts')
  } else {
    res.redirect('/widows/conversion/more-info-letter')
  }
})

router.post('/widows/conversion/inheritable-amounts', (req, res) => {
  res.redirect('/widows/conversion/')
})

// PENSION CREDIT ADJUSTMENT
router.post('/widows/conversion-task-pc/pension-credit', function (req, res) {
  if (req.body['pension-credit'] === 'yes') {
    res.redirect('pension-credit-form')
  } else {
    res.redirect('award-calculated')
  }
})

module.exports = router
