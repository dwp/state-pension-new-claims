const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Non verified date of birth

router.post('/agent-led/task-details-nvdob', function (req, res) {
  if (req.body['whatDo'] === 'postpone') {
    res.redirect('postpone-task')
  } else {
    res.redirect('record-personal')
}
})

router.post('/agent-led/postpone-task', function (req, res) {
  res.redirect('check-answers-postpone')
})

router.post('/agent-led/check-answers-postpone', function (req, res) {
  res.redirect('record-personal')
})

router.post('/agent-led/change-name', function (req, res) {
  res.redirect('record-personal')
})

router.post('/agent-led/change-date-of-birth', function (req, res) {
  if (req.body['dateOfBirth'] === 'yes') {
    res.redirect('check-answers-dob')
  } else {
    res.redirect('claim-unsuccessful')
}
})

router.post('/agent-led/check-answers-dob', function (req, res) {
  res.redirect('record-personal')
})

router.post('/agent-led/claim-unsuccessful', function (req, res) {
  if (req.body['unsuccessful'] === 'yes') {
    res.redirect('record-full-history')
  } else {
    res.redirect('record-personal')
}
})

router.post('/agent-led/close-claim', function (req, res) {
  if (req.body['close'] === 'yes') {
    res.redirect('record-full-history')
  } else {
    res.redirect('how-continue')
}
})

// Add an action

router.post('/agent-led/record-full-history', function (req, res) {
  res.redirect('add-action')
})

router.post('/agent-led/add-action', function (req, res) {
  if (req.session.data['addAction'] === 'spokePhone') {
    res.redirect('receive-make-call')
  } else {
    res.redirect('which-option')
}
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

// Make or receive a call

router.post('/agent-led/receive-make-call', function (req, res) {
  res.redirect('who-speak-to')
})

router.post('/agent-led/who-speak-to', function (req, res) {
  if (req.session.data['whatCall'] === 'outbound' && req.body['thirdSpokeTo'] === 'Other') {
    res.redirect('other-you-called')
  } else if (req.session.data['whatCall'] === 'inbound' && req.body['thirdSpokeTo'] === 'Other') {
    res.redirect('other-called-you')  
  } else {
    res.redirect('provide-detail-call')
}
})

router.post('/agent-led/provide-detail-call', function (req, res) {
  res.redirect('check-answers-call')
})

router.post('/agent-led/check-answers-call', function (req, res) {
  res.redirect('record-full-history')
})

router.post('/agent-led/other-called-you', function (req, res) {
  res.redirect('provide-detail-call')
})

router.post('/agent-led/who-did-you-call', function (req, res) {
  if (req.body['nameThirdYouCall'] === 'Other') {
    res.redirect('other-you-called')
  } else {
    res.redirect('provide-detail-call')
}
})

router.post('/agent-led/other-you-called', function (req, res) {
  res.redirect('provide-detail-call')
})

// Receive - Option A

router.post('/agent-led/what-receive-a', function (req, res) {
  if (req.body['whatReceiveA'] === 'formLetter') {
    res.redirect('have-name-received')
  } else {
    res.redirect('who-receive-a')
}
})

router.post('/agent-led/have-name-received', function (req, res) {
  if (req.body['nameReceived'] === 'Other') {
    res.redirect('other-what-receive')
  } else {
    res.redirect('who-receive-a')
}
})

router.post('/agent-led/who-receive-a', function (req, res) {
  if (req.body['whoReceivedA'] === 'third') {
    res.redirect('who-third-party-received')
  } else {
    res.redirect('check-answers-receive')
}
})

router.post('/agent-led/who-third-party-received', function (req, res) {
  if (req.body['whoThirdA'] === 'Other') {
    res.redirect('other-who-receive')
  } else {
    res.redirect('check-answers-receive')
}
})

router.post('/agent-led/other-who-receive', function (req, res) {
  res.redirect('check-answers-receive')
})

// Receive - Option B

router.post('/agent-led/what-receive-b', function (req, res) {
  if (req.body['nameFormB'] === 'Other') {
    res.redirect('other-what-receive')
  } else {
    res.redirect('who-receive-b')
}
})

router.post('/agent-led/other-what-receive', function (req, res) {
  if (req.session.data['whichOption'] === 'optionA') {
    res.redirect('who-receive-a')
  } else if (req.session.data['whichOption'] === 'optionB'){
    res.redirect('who-receive-b')
}
})

router.post('/agent-led/who-receive-b', function (req, res) {
  if (req.body['3rdParty'] === 'Other') {
    res.redirect('other-who-receive')
  } else {
    res.redirect('check-answers-receive')
}
})

router.post('/agent-led/other-who-receive', function (req, res) {
  res.redirect('check-answers-receive')
})

router.post('/agent-led/check-answers-receive', function (req, res) {
  res.redirect('record-full-history')
})

// Send - Option A

router.post('/agent-led/what-send-a', function (req, res) {
  if (req.body['whatSentA'] === 'formLetter') {
    res.redirect('have-name-sent')
  } else {
    res.redirect('who-send-a')
}
})

router.post('/agent-led/have-name-sent', function (req, res) {
  if (req.body['nameSent'] === 'Other') {
    res.redirect('what-other-send')
  } else {
    res.redirect('who-send-a')
}
})

router.post('/agent-led/who-send-a', function (req, res) {
  if (req.body['whoSendA'] === 'claimant') {
    res.redirect('check-answers-send')
  } else {
    res.redirect('who-third-party-sent')
}
})

router.post('/agent-led/who-third-party-sent', function (req, res) {
  if (req.body['whoThirdSent'] === 'Other') {
    res.redirect('who-other-sent')
  } else {
    res.redirect('check-answers-send')
}
})

router.post('/agent-led/who-other-sent', function (req, res) {
  res.redirect('check-answers-send')
})

router.post('/agent-led/check-answers-send', function (req, res) {
  res.redirect('record-full-history')
})

// Send - Option B

router.post('/agent-led/what-send-b', function (req, res) {
  if (req.body['nameSentB'] === 'Other') {
    res.redirect('what-other-send')
  } else {
    res.redirect('who-send-b')
}
})

router.post('/agent-led/what-other-send', function (req, res) {
  if (req.session.data['whichOption'] === 'optionA') {
    res.redirect('who-send-a')
  } else if (req.session.data['whichOption'] === 'optionB'){
    res.redirect('who-send-b')
}
})

router.post('/agent-led/who-send-b', function (req, res) {
  if (req.body['nameThirdSentB'] === 'Other') {
    res.redirect('who-other-sent')
  } else {
    res.redirect('check-answers-send')
}
})

module.exports = router