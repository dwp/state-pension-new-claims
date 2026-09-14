const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Non verified date of birth

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

// Add an action

router.post('/agent-led/record-full-history', function (req, res) {
  res.redirect('add-action')
})

router.post('/agent-led/add-action', function (req, res) {
  res.redirect('which-option')
})

router.post('/agent-led/which-option', function (req, res) {
  if (req.session.data['addAction'] === 'infoReceived' && req.body['whichOption'] === 'optionA') {
    res.redirect('what-receive-a')
  } else if (req.session.data['addAction'] === 'infoReceived' && req.body['whichOption'] === 'optionB') {
    res.redirect('what-receive-b')
  } else if (req.session.data['addAction'] === 'infoSent' && req.body['whichOption'] === 'optionA') {
    res.redirect('what-send-a')
  } else if (req.session.data['addAction'] === 'infoSent' && req.body['whichOption'] === 'optionB') {
    res.redirect('what-send-b')    
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



router.post('/arp/iteration-2/gmp-question-3', function (req, res) {
  if (req.body['gmpQuestion2'] === 'yes') {
    res.redirect('upload-documents-2')
  } else if (req.body['gmpQuestion2'] === 'no') {
    res.redirect('claim-removed')
  } else if (req.body['gmpQuestion2'] === 'notSure') {
    res.redirect('postpone-task')
}
})

module.exports = router