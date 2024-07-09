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

router.post('/mqp-disallowed/eea-boost/part-1/check-cfn901', function (req, res) {
  if (req.body['send-cfn901'] === 'yes') {
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
  if (req.body['cfn901-returned'] === 'yes') {
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

module.exports = router