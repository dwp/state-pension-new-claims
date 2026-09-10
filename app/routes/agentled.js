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


router.post('/agent-led/change-name', function (req, res) {
  res.redirect('record-personal')
})

router.post('/agent-led/change-date-of-birth', function (req, res) {
  if (req.body['dateOfBirth'] === 'yes') {
    res.redirect('record-personal')
  } else {
    res.redirect('how-continue')
}
})

router.post('/agent-led/how-continue', function (req, res) {
  if (req.body['howContinue'] === 'sendPostpone') {
    res.redirect('record-full-history')
  } else {
    res.redirect('record-personal')
}
})

router.post('/agent-led/record-full-history', function (req, res) {
  res.redirect('add-action')
})

router.post('/agent-led/add-action', function (req, res) {
  if (req.body['addAction'] === 'infoReceived') {
    res.redirect('what-receive')
  } else {
    res.redirect('what-send')
}
})

router.post('/agent-led/what-receive', function (req, res) {
  if (req.body['formReceive'] === 'Other') {
    res.redirect('other-receive')
  } else {
    res.redirect('who-receive')
}
})

router.post('/agent-led/other-receive', function (req, res) {
  res.redirect('who-receive')
})

router.post('/agent-led/who-receive', function (req, res) {
  if (req.body['3rdParty'] === 'Other') {
    res.redirect('other-third-party')
  } else {
    res.redirect('check-answers-action')
}
})

router.post('/agent-led/what-send', function (req, res) {
  if (req.body['formSent'] === 'Other') {
    res.redirect('other-send')
  } else {
    res.redirect('who-send')
}
})

router.post('/agent-led/other-send', function (req, res) {
  res.redirect('who-send')
})

router.post('/agent-led/who-send', function (req, res) {
  if (req.body['someoneElse'] === 'Other') {
    res.redirect('other-third-party')
  } else {
    res.redirect('check-answers-action')
}
})

router.post('/agent-led/other-third-party', function (req, res) {
  res.redirect('check-answers-action')
})

router.post('/arp/iteration-2/gmp-question-2', function (req, res) {
  if (req.body['gmpQuestion2'] === 'yes') {
    res.redirect('upload-documents-3')
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

// Maxwell Indemnity

router.post('/arp/maxwell-indemnity/start-routing', function (req, res) {
  res.redirect('hmrc-confirmed')
})

router.post('/arp/maxwell-indemnity/indemnity-question', function (req, res) {
  if (req.body['indemnityQuestion'] === 'yes') {
    res.redirect('calc-question')
  } else {
    res.redirect('cannot-complete')
}
})

router.post('/arp/maxwell-indemnity/calc-question', function (req, res) {
  if (req.body['calcQuestion'] === 'yes') {
    res.redirect('send-request')
  } else {
    res.redirect('calculate-ap')
}
})

router.post('/arp/maxwell-indemnity/hmrc-confirmed', function (req, res) {
  if (req.body['hmrcConfirmed'] === 'yes') {
    res.redirect('calculate-ap')
  } else {
    res.redirect('send-reminder')
}
})

router.post('/arp/maxwell-indemnity/calculate-ap-routing', function (req, res) {
  res.redirect('send-letter')
})

module.exports = router