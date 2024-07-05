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

router.post('/mqp-disallowed/eea-boost/part-1/check-cfn901', function (req, res) {
  if (req.body['send-cfn901'] === 'yes') {
    res.redirect('print-and-send-form')
  } else {
    res.redirect('check-mqp-met')
  }
})

module.exports = router