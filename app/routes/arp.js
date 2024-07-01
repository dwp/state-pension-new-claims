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

router.post('/arp/iteration-1/maxwell-question', function (req, res) {
  if (req.body['maxwellQuestion'] === 'yes') {
    res.redirect('ca1741-requested')
  } else {
    res.redirect('upload-documents')
}
})

router.post('/arp/iteration-1/srb-question', function (req, res) {
  if (req.body['srbQuestion'] === 'yes') {
    res.redirect('dashboard')
  } else {
    res.redirect('maxwell-question')
}
})

router.post('/arp/iteration-1/gmp-question', function (req, res) {
  if (req.body['gmpQuestion'] === 'yes') {
    res.redirect('upload-documents')
  } else {
    res.redirect('ca1741-requested')
}
})

router.post('/arp/iteration-1/gmp-question-2', function (req, res) {
  if (req.body['gmpQuestion2'] === 'yes') {
    res.redirect('upload-documents')
  } else if (req.body['gmpQuestion2'] === 'no') {
    res.redirect('claim-removed')
  } else { res.redirect('citizen-record-3')
}
})


router.post('/arp/iteration-1/start-routing', function (req, res) {
  res.redirect('maxwell-question')
})

module.exports = router