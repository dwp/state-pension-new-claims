const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Iteration 1

router.post('/international-task/anzac-iteration-1/award-improvement', function (req, res) {
  if (req.body.improvement === 'yes') {
    res.redirect('issue-letter')
  } else {
    res.redirect('no-improvement')
  }
})

router.post('/international-task/anzac-iteration-2/award-improvement', function (req, res) {
  if (req.body.improvement === 'yes') {
    res.redirect('issue-letter')
  } else {
    res.redirect('no-improvement')
  }
})

// CFN1282

router.post('/international-task/anzac-cfn1282-iteration-1/cfn-task', function (req, res) {
  if (req.body['cfn1282-returned'] === 'yes') {
    res.redirect('date-of-entry')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-send')
  } else {
    res.redirect('check-information')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/check-information', function (req, res) {
  if (req.body['calculateNew'] === 'yes') {
    res.redirect('calculate-anzac')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/rf1-send', function (req, res) {
  if (req.body.rf1 === 'request') {
    res.redirect('rf1-hmrc')
  } else if (req.body.rf1 === 'received') {
    res.redirect('check-information')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/sp-increase', function (req, res) {
  if (req.body['sp-increase'] === 'yes') {
    res.redirect('review-award')
  } else {
    res.redirect('get-a-task-2')
  }
})


router.post('/international-task/anzac-cfn1282-iteration-1/rf1-task', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('sp-increase')
  } else {
    res.redirect('rf1-hmrc')
  }
})

// PENSION CREDIT

router.post('/pension-credit/anzac/pension-credit-decision-1', function (req, res) {
  if (req.body['pension-credit'] === 'yes') {
    res.redirect('pension-credit-details')
  } else {
    res.redirect('no-offset')
  }
})

module.exports = router
