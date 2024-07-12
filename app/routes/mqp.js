const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Disallowance Option 1

router.post('/mqp-answer', function(request, response) {

  var mqp = request.session.data['mqp']
  if (mqp.includes("none")){
      response.redirect("/mqp-disallowed//option-1/claim-disallowed")
  } else {
      response.redirect("/mqp-disallowed//option-1/remove-claim")
  }
})

router.post('/mqp-disallowed/option-2/check-qualifying-years', function (req, res) {
  if (req.body['howToContinue'] === 'postpone') {
    res.redirect('claim-postponed')
  } else if (req.body['howToContinue'] === 'pscs') {
    res.redirect('claim-removed')
  } else if (req.body['howToContinue'] === 'disallow') {
    res.redirect('claim-disallowed')
  }
})


router.post('/mqp-disallowed/option-2/start-routing', function (req, res) {
  res.redirect('check-qualifying-years')
})

// EEA boost - part 1

router.post('/mqp-disallowed/eea-boost/part-1/start-routing', function (req, res) {
  res.redirect('check-cfn901')
})

router.post('/mqp-disallowed/eea-boost/part-1/start-2-routing', function (req, res) {
  res.redirect('returned-cfn901')
})

router.post('/mqp-disallowed/eea-boost/part-1/start-3-routing', function (req, res) {
  res.redirect('returned-rf1')
})

router.post('/mqp-disallowed/eea-boost/part-1/check-cfn901', function (req, res) {
  if (req.body['sendCfn901'] === 'yes') {
    res.redirect('print-and-send-form')
  } else {
    res.redirect('check-mqp-met')
  }
})

router.post('/mqp-disallowed/eea-boost/part-1/check-mqp-met', function (req, res) {
  if (req.body['mqpMet'] === 'yes') {
    res.redirect('request-records')
  } else {
    res.redirect('do-not-request-records')
  }
})

router.post('/mqp-disallowed/eea-boost/part-1/returned-rf1', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('send-claim')
  } else {
    res.redirect('request-rf1-again')
  }
})

router.post('/mqp-disallowed/eea-boost/part-1/returned-cfn901', function (req, res) {
  if (req.body['cfn901-returned'] === 'no') {
    res.redirect('dashboard-3')
  } else {
    res.redirect('date-of-entry')
  }
})

router.post('/mqp-disallowed/eea-boost/part-1/date-of-entry', function (req, res) {
  if (req.body['dateOfEntry'] === 'after') {
    res.redirect('send-claim')
  } else {
    res.redirect('need-request-rf1')
  }
})

router.post('/mqp-disallowed/eea-boost/part-1/need-request-rf1', function (req, res) {
  if (req.body['requestRf1'] === 'request-rf1') {
    res.redirect('request-rf1')
  } else if (req.body['requestRf1'] === 'rf1-already-received') {
    res.redirect('send-claim')
  } else {
    res.redirect('dashboard-3')
  }
})

// EEA boost - part 2

router.post('/mqp-disallowed/eea-boost/part-2/start-4-routing', function (req, res) {
  res.redirect('check-insurance')
})

router.post('/mqp-disallowed/eea-boost/part-2/srb', function (req, res) {
  if (req.body['srbQuestion'] === 'yes') {
    res.redirect('dashboard-3')
  } else {
    res.redirect('check-insurance')
  }
})

router.post('/mqp-disallowed/eea-boost/part-2/check-insurance', function (req, res) {
 
  let norwayRecords = req.session.data.norwayRecords;
  let croatiaRecords = req.session.data.croatiaRecords;
  let swissRecords = req.session.data.swissRecords;

  if (norwayRecords == 'no' && croatiaRecords == 'no' && swissRecords == 'no'){
      res.redirect('send-reminder');
     } else if (norwayRecords == 'yes' && croatiaRecords == 'yes' && swissRecords == 'yes'){
      res.redirect('can-claimant-qualify');
     } else {
      res.redirect('can-claimant-qualify-2');
  }   
});

router.post('/mqp-disallowed/eea-boost/part-2/can-claimant-qualify', function (req, res) {
  if (req.body['qualifyingYears'] === 'yes') {
    res.redirect('calculate-award')
  } else {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/mqp-disallowed/eea-boost/part-2/can-claimant-qualify-2', function (req, res) {
  if (req.body['qualifyingYears-2'] === 'yes') {
    res.redirect('calculate-award')
  } else if (req.body['qualifyingYears-2'] === 'no') {
    res.redirect('claim-unsuccessful')
  } else {
    res.redirect('send-reminder')
  }
})

router.post('/mqp-disallowed/eea-boost/part-2/calculate-award', function (req, res) {

  if (req.body['addsp1'] === '185.15') {
    res.redirect('enter-protected-payment')
  } else {
    res.redirect('check-award')
  }
})

module.exports = router