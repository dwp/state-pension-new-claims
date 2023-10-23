const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Iteration one

router.post('/international-task/eea-iteration-2/mixed-years-spain', function (req, res) {
  if (req.body.mixedyearsspain === 'Yes') {
    res.redirect('foreign-insurance-request-spain')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/eea-iteration-2/mixed-years-austria', function (req, res) {
  if (req.body.mixedyearsaustria === 'Yes') {
    res.redirect('foreign-insurance-request-austria')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/eea-iteration-2/foreign-insurance-request-spain', function (req, res) {
  if (req.body.spaininsurance === 'Sent') {
    res.redirect('mixed-years')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/eea-iteration-2/mixed-years-austria', function (req, res) {
  if (req.body.mixedyearsaustria === 'Yes') {
    res.redirect('foreign-insurance-request-austria')
  } else {
    res.redirect('mixed-years')
  }
})

// Scenario one

router.post('/international-task/testing/scenario-1/task-details', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/cfn-task')
})

router.post('/international-task/testing/scenario-1/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/mixed-years-ireland')
})

router.post('/international-task/testing/scenario-1/mixed-years-ireland', function (req, res) {
  if (req.body.mixedyearsireland === 'Yes') {
    res.redirect('foreign-insurance-request-ireland')
  } else {
    res.redirect('confirmation')
  }
})

router.post('/international-task/testing/scenario-1/foreign-insurance-request-ireland', function (req, res) {
  if (req.body.spaininsurance === 'Requested') {
    res.redirect('confirmation')
  } else {
    res.redirect('confirmation')
  }
})

router.post('/international-task/testing/scenario-1/confirmation', (req, res) => {
  res.redirect('/international-task/testing/scenario-2/get-a-task')
})

// Scenario two

router.post('/international-task/testing/scenario-2/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-2/mixed-years')
})

router.post('/international-task/testing/scenario-2/task-details', (req, res) => {
  res.redirect('/international-task/testing/scenario-2/cfn-task')
})

router.post('/international-task/testing/scenario-2/mixed-years-norway', function (req, res) {
  if (req.body.mixedyearsnorway === 'Yes') {
    res.redirect('foreign-insurance-request-norway')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/testing/scenario-2/mixed-years-croatia', function (req, res) {
  if (req.body.mixedyearscroatia === 'Yes') {
    res.redirect('foreign-insurance-request-croatia')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/testing/scenario-2/mixed-years-switzerland', function (req, res) {
  if (req.body.mixedyearsswitzerland === 'Yes') {
    res.redirect('foreign-insurance-request-switzerland')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/testing/scenario-2/foreign-insurance-request-norway', function (req, res) {
  if (req.body.norwayinsurance === 'Requested') {
    res.redirect('mixed-years')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/testing/scenario-2/foreign-insurance-request-switzerland', function (req, res) {
  if (req.body.switzerlandinsurance === 'Requested') {
    res.redirect('mixed-years')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/testing/scenario-2/foreign-insurance-request-croatia', function (req, res) {
  if (req.body.croatiainsurance === 'Requested') {
    res.redirect('mixed-years')
  } else {
    res.redirect('mixed-years')
  }
})

router.post('/international-task/testing/scenario-2/mixed-years', (req, res) => {
  res.redirect('/international-task/testing/scenario-3/get-a-task')
})

// Scenario three

router.post('/international-task/testing/scenario-3/task-details', (req, res) => {
  res.redirect('/international-task/testing/scenario-3/cfn-task')
})

router.post('/international-task/testing/scenario-3/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-3/mixed-years-spain')
})

router.post('/international-task/testing/scenario-3/mixed-years-spain', function (req, res) {
  if (req.body.mixedyearsspain === 'Yes') {
    res.redirect('foreign-insurance-request-spain')
  } else {
    res.redirect('mixed-years-france')
  }
})

router.post('/international-task/testing/scenario-3/foreign-insurance-request-spain', function (req, res) {
  if (req.body.spaininsurance === 'Requested') {
    res.redirect('mixed-years-france')
  } else {
    res.redirect('mixed-years-france')
  }
})

router.post('/international-task/testing/scenario-3/mixed-years-france', function (req, res) {
  if (req.body.mixedyearsfrance === 'Yes') {
    res.redirect('foreign-insurance-request-france')
  } else {
    res.redirect('confirmation')
  }
})

router.post('/international-task/testing/scenario-3/foreign-insurance-request-france', function (req, res) {
  if (req.body.franceinsurance === 'Requested') {
    res.redirect('confirmation')
  } else {
    res.redirect('confirmation')
  }
})

router.post('/international-task/testing/scenario-3/confirmation', (req, res) => {
  res.redirect('/international-task/testing/scenario-3/get-a-task-2')
})

// ITERATION 3

router.post('/international-task/eea-iteration-3/cfn-task', (req, res) => {
  res.redirect('/international-task/eea-iteration-3/award-improvement')
})

router.post('/international-task/eea-iteration-3/award-improvement', (req, res) => {
  res.redirect('/international-task/eea-iteration-3/mixed-years')
})

router.post('/international-task/eea-iteration-3/task-details', (req, res) => {
  res.redirect('/international-task/eea-iteration-3/cfn-task')
})

router.post('/international-task/eea-iteration-3/mixed-years', (req, res) => {
  res.redirect('/international-task/eea-iteration-3/request-records')
})

router.post('/international-task/eea-iteration-3/request-records', (req, res) => {
  res.redirect('/international-task/eea-iteration-3/get-a-task-2')
})

// ITERATION 3

router.post('/international-task/eea-iteration-4/cfn-task', (req, res) => {
  res.redirect('/international-task/eea-iteration-4/award-improvement')
})

router.post('/international-task/eea-iteration-4/award-improvement', (req, res) => {
  res.redirect('/international-task/eea-iteration-4/mixed-years')
})

router.post('/international-task/eea-iteration-4/task-details', (req, res) => {
  res.redirect('/international-task/eea-iteration-4/cfn-required')
})

router.post('/international-task/eea-iteration-4/mixed-years', (req, res) => {
  res.redirect('/international-task/eea-iteration-4/request-records')
})

router.post('/international-task/eea-iteration-4/request-records', (req, res) => {
  res.redirect('/international-task/eea-iteration-4/get-a-task-2')
})

// CFN901 RETURNED ITERATION 1

router.post('/international-task/eea-cfn901-iteration-1/task-details-cfn901', (req, res) => {
  res.redirect('/international-task/eea-cfn901-iteration-1/cfn-task')
})

router.post('/international-task/eea-cfn901-iteration-1/cfn-task', function (req, res) {
  if (req.body['cfn901-returned'] === 'yes') {
    res.redirect('date-of-entry')
  } else {
    res.redirect('request-records')
  }
})

router.post('/international-task/eea-cfn901-iteration-1/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('liason-forms')
  } else {
    res.redirect('rf1-hmrc')
  }
})

router.post('/international-task/eea-cfn901-iteration-1/liason-forms', (req, res) => {
  res.redirect('/international-task/eea-cfn901-iteration-1/request-records')
})

router.post('/international-task/eea-cfn901-iteration-1/task-details-rf1', (req, res) => {
  res.redirect('/international-task/eea-cfn901-iteration-1/rf1-task')
})

router.post('/international-task/eea-cfn901-iteration-1/rf1-task', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('liason-forms')
  } else {
    res.redirect('rf1-reminder')
  }
})

router.post('/international-task/eea-cfn901-iteration-1/mixed-years', (req, res) => {
  res.redirect('/international-task/eea-cfn901-iteration-1/request-records')
})

router.post('/international-task/eea-cfn901-iteration-1/request-records', (req, res) => {
  res.redirect('/international-task/eea-cfn901-iteration-1/get-a-task-2')
})

// FIR RETURNED ITERATION 1

router.post('/international-task/eea-fir-iteration-1/cfn-task', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/mixed-years')
})

router.post('/international-task/eea-fir-iteration-1/task-details', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/fir-task')
})

router.post('/international-task/eea-fir-iteration-1/mixed-years', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/request-records')
})

router.post('/international-task/eea-fir-iteration-1/request-records', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/get-a-task-2')
})

// FIR RETURNED ITERATION 1 - Scenario 1

router.post('/international-task/eea-fir-iteration-1/scenario-1/cfn-task', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-1/mixed-years')
})

router.post('/international-task/eea-fir-iteration-1/scenario-1/task-details', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-1/fir-task')
})

router.post('/international-task/eea-fir-iteration-1/scenario-1/fir-task', function (req, res) {
  if (req.body['ireland-record'] === 'yes') {
    res.redirect('change-award')
  } else {
    res.redirect('record-request-reminder')
  }
})

router.post('/international-task/eea-fir-iteration-1/scenario-1/change-award', function (req, res) {
  if (req.body['change-award'] === 'yes') {
    res.redirect('review-award')
  } else {
    res.redirect('get-a-task-2')
  }
})

// FIR RETURNED ITERATION 1 - Scenario 2

router.post('/international-task/eea-fir-iteration-1/scenario-2/cfn-task', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-2/mixed-years')
})

router.post('/international-task/eea-fir-iteration-1/scenario-2/task-details', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-2/fir-task')
})

router.post('/international-task/eea-fir-iteration-1/scenario-2/fir-task', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-2/record-request-reminder')
})

router.post('/international-task/eea-fir-iteration-1/scenario-2/record-request-reminder', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-2/get-a-task-2')
})

// FIR RETURNED ITERATION 1 - Scenario 2

router.post('/international-task/eea-fir-iteration-1/scenario-3/cfn-task', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-3/mixed-years')
})

router.post('/international-task/eea-fir-iteration-1/scenario-3/task-details', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-3/fir-task')
})

router.post('/international-task/eea-fir-iteration-1/scenario-3/fir-task', (req, res) => {
  res.redirect('/international-task/eea-fir-iteration-1/scenario-3/get-a-task-2')
})

module.exports = router
