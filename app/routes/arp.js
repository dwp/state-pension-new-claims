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
    res.redirect('upload-documents-2')
  } else {
    res.redirect('ca1741-requested')
}
})

router.post('/arp/iteration-1/gmp-question-2', function (req, res) {
  if (req.body['gmpQuestion2'] === 'yes') {
    res.redirect('upload-documents-2')
  } else if (req.body['gmpQuestion2'] === 'no') {
    res.redirect('claim-removed')
  } else { res.redirect('postpone-task')
}
})


router.post('/arp/iteration-1/start-routing', function (req, res) {
  res.redirect('maxwell-question')
})

// Maxwell iteration 2

router.post('/arp/iteration-2/maxwell-question', function (req, res) {
  if (req.body['maxwellQuestion'] === 'yes') {
    res.redirect('ca1741-requested')
  } else {
    res.redirect('award-calculated-a')
}
})

router.post('/arp/iteration-2/srb-question', function (req, res) {
  if (req.body['srbQuestion'] === 'yes') {
    res.redirect('dashboard')
  } else {
    res.redirect('maxwell-question')
}
})

router.post('/arp/iteration-2/gmp-question', function (req, res) {
  if (req.body['gmpQuestion'] === 'yes') {
    res.redirect('upload-documents-3')
  } else {
    res.redirect('request-CA1741-again')
}
})

router.post('/arp/iteration-2/gmp-question-2', function (req, res) {
  if (req.body['gmpQuestion2'] === 'yes') {
    res.redirect('upload-documents-2')
  } else if (req.body['gmpQuestion2'] === 'no') {
    res.redirect('claim-removed')
}
})

router.post('/arp/iteration-2/ca1741-returned', function (req, res) {
  if (req.body['ca1741returned'] === 'yes') {
    res.redirect('gmp-question')
  } else {
    res.redirect('dashboard-2')
}
})

router.post('/arp/iteration-2/ca1741-returned-2', function (req, res) {
  if (req.body['ca1741returned2'] === 'yes') {
    res.redirect('gmp-question-2')
  } else {
    res.redirect('dashboard-3')
}
})

router.post('/arp/iteration-2/gmp-question-3', function (req, res) {
  if (req.body['gmpQuestion2'] === 'yes') {
    res.redirect('upload-documents-2')
  } else if (req.body['gmpQuestion2'] === 'no') {
    res.redirect('claim-removed')
  } else if (req.body['gmpQuestion2'] === 'notSure') {
    res.redirect('postpone-task')
}
})

router.post('/arp/iteration-2/start-routing', function (req, res) {
  res.redirect('maxwell-question')
})

router.post('/arp/iteration-2/start-2-routing', function (req, res) {
  res.redirect('ca1741-returned')
})

router.post('/arp/iteration-2/start-3-routing', function (req, res) {
  res.redirect('ca1741-returned-2')
})

module.exports = router