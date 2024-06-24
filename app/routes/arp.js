const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Maxwell iteration 1

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

module.exports = router