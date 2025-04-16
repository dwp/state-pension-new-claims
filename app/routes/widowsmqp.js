const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/widows/mqp-not-met/task-details', (req, res) => {
  res.redirect('check-details-info-missing')
})

router.post('/widows/mqp-not-met/nino', (req, res) => {
  res.redirect('check-details-info-missing')
})

router.post('/widows/mqp-not-met/dom', (req, res) => {
  res.redirect('check-details-info-missing-2')
})

router.post('/widows/mqp-not-met/dob', (req, res) => {
  res.redirect('check-details-info-missing')
})

router.post('/widows/mqp-not-met/gender', (req, res) => {
  res.redirect('check-details-info-missing')
})

router.post('/widows/mqp-not-met/dod', (req, res) => {
  res.redirect('check-details-info-missing')
})

router.post('/widows/mqp-not-met/check-details-info-missing', function (req, res) {
  if (req.body.decision === 'more-info') {
    res.redirect('more-info-letter')
  } else if (req.body.decision === 'save-return') {
    res.redirect('save-and-return')
  } else if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('claim-unsuccessful')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('inheritable-amounts')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/widows/mqp-not-met/check-details-info-missing-2', function (req, res) {
  if (req.body.decision === 'more-info') {
    res.redirect('more-info-letter')
  } else if (req.body.decision === 'save-return') {
    res.redirect('save-and-return')
  } else if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('claim-unsuccessful')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('inheritable-amounts')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/widows/mqp-not-met/check-details-info-missing-3', function (req, res) {
  if (req.body.decision === 'more-info') {
    res.redirect('more-info-letter')
  } else if (req.body.decision === 'save-return') {
    res.redirect('save-and-return')
  } else if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('claim-unsuccessful')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('inheritable-amounts')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/widows/mqp-not-met/more-info-letter', (req, res) => {
  res.redirect('get-a-task-2')
})

router.post('/widows/mqp-not-met/nothing-to-inherit', (req, res) => {
  res.redirect('get-a-task-2')
})

router.post('/widows/mqp-not-met/award-without-inheritance', (req, res) => {
  res.redirect('get-a-task-2')
})

router.post('/widows/mqp-not-met/spouse-spa', function (req, res) {
  if (req.body['receiving-sp'] === 'yes') {
    res.redirect('check-details')
  } else {
    res.redirect('end-task-pscs')
  }
})

module.exports = router
