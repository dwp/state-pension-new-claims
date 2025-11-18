const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/disallow-second-deferral/select-option', function (req, res) {
  if (req.body['selectOption'] === '1a') {
    res.redirect('record-personal-1a')
  } else if (req.body['selectOption'] === '1b') {
    res.redirect('record-personal-1b')
  } else if (req.body['selectOption'] === '2a') {
    res.redirect('record-personal-2a')
  } else if (req.body['selectOption'] === '2b') {
    res.redirect('record-personal-2b')
  } else if (req.body['selectOption'] === '3') {
    res.redirect('record-personal-3')
  }
})

router.post('/disallow-second-deferral/why-stopping-1a', function (req, res) {
  res.redirect('record-personal-1a')
})

router.post('/disallow-second-deferral/why-stopping-1b', function (req, res) {
  res.redirect('record-personal-1b')
})

router.post('/disallow-second-deferral/why-stopping-2', function (req, res) {
  if (req.session.data['howcontinue'] === 'stopSp') {
    res.redirect('record-personal-2a')
  } else {
    res.redirect('record-personal-2b')
  }
})

router.post('/disallow-second-deferral/why-stopping-3', function (req, res) {
  if (req.body['whyStopping'] === 'deferred') {
    res.redirect('you-cannot-defer-c')
  } else {
    res.redirect('record-personal-3')
  }
})

router.post('/disallow-second-deferral/you-cannot-defer-a', function (req, res) {
  if (req.body['howcontinue'] === 'goBack') {
    res.redirect('record-personal-2a')
  } else {
    res.redirect('why-stopping-2')
  }
})

router.post('/disallow-second-deferral/you-cannot-defer-b', function (req, res) {
  res.redirect('why-stopping-2')
})

module.exports = router
