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

// Run this code when a form is submitted to 'change-award'
router.post('/change-award', function (req, res) {

  // Make a variable and give it the value from 'mixedyearscroatia-hint'
  var mixedyearscroatiahint = req.session.data['how-mixedyearscroatia-hint']

  // Check whether the variable matches a condition
  if (mixedyearscroatia == "Yes"){
    // Send user to next page
    res.redirect('/review-award')
  } else {
    // Send user to ineligible page
    res.redirect('/get-a-task-2')
  }


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

router.post('/international-task/eea-fir-iteration-1/change-award', function (req, res) {
  if (req.body['change-award'] === 'Yes') {
    res.redirect('review-award')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/eea-fir-iteration-2/change-award', function (req, res) {
  if (req.body['change-award'] === 'Yes') {
    res.redirect('calculate')
  } else {
    res.redirect('no-increase-letter-2')
  }
})

router.post('/international-task/eea-fir-iteration-2/increase-in-payment', function (req, res) {
  if (req.body['changeAward'] === 'yes') {
    res.redirect('review-award')
  } else {
    res.redirect('no-change')
  }
})

router.post('/international-task/eea-fir-iteration-2/fir-task', function (req, res) {
 
  let norwayRecords = req.session.data.norwayRecords;
  let spainRecords = req.session.data.spainRecords;

  if (norwayRecords == 'no' && spainRecords == 'no'){
      res.redirect('no-increase-letter-1');
     } else {
      res.redirect('change-award');
  }   
});

router.post('/international-task/eea-fir-iteration-2/task-details-2-routing', function (req, res) {
  res.redirect('fir-task')
})
module.exports = router

router.post('/international-task/eea-fir-iteration-2/calculate-routing', function (req, res) {
  res.redirect('review-award')
})

router.post('/international-task/eea-fir-iteration-2/change-nsp-routing', function (req, res) {
  res.redirect('review-award')
})

router.post('/international-task/eea-fir-iteration-2/br403-routing', function (req, res) {
  res.redirect('get-a-task-2')
})
module.exports = router

// EEA FIR mixed

router.post('/international-task/eea-fir-mixed/change-award-1', function (req, res) {
  if (req.body['checkInsurance'] === 'yes') {
    res.redirect('calculate')
  } else {
    res.redirect('no-increase-letter-2')
  }
})

router.post('/international-task/eea-fir-mixed/increase-in-payment', function (req, res) {
  if (req.body['changeAward'] === 'yes') {
    res.redirect('review-award')
  } else {
    res.redirect('no-change')
  }
})

router.post('/international-task/eea-fir-mixed/fir-task', function (req, res) {
 
  let norwayRecords = req.session.data.norwayRecords;
  let spainRecords = req.session.data.spainRecords;

  if (norwayRecords == 'no' && spainRecords == 'no'){
      res.redirect('no-increase-letter-1');
     } else {
      res.redirect('change-award-1');
  }   
});

router.post('/international-task/eea-fir-mixed/task-details-2-routing', function (req, res) {
  res.redirect('fir-task')
})
module.exports = router

router.post('/international-task/eea-fir-mixed/calculate-routing', function (req, res) {
  res.redirect('check-award')
})

router.post('/international-task/eea-fir-mixed/change-nsp-1-routing', function (req, res) {
  res.redirect('check-award')
})

router.post('/international-task/eea-fir-mixed/br403-routing', function (req, res) {
  res.redirect('get-a-task-2')
})
module.exports = router