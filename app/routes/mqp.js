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

router.post('/mqp-disallowed/option-2/confirm-disallowance', function (req, res) {
  if (req.body['disallowClaim'] === 'yes') {
    res.redirect('claim-disallowed')
  } else {
    res.redirect('record-reason')
  }
})

router.post('/mqp-disallowed/option-2/start-routing', function (req, res) {
  res.redirect('confirm-disallowance')
})

module.exports = router