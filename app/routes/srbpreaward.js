const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/srb-pre-award/which-journey', function (req, res) {
  if (req.body['journey'] === 'a' || req.body['journey'] === 'b' || req.body['journey'] === 'c') {
    res.redirect('task-queue')
  }
})

router.post('/srb-pre-award/do-you-have-date', function (req, res) {
  if (req.session.data['journey'] === 'a' && req.body['haveDate'] === 'yes') {
    res.redirect('date-needed-3')
  } else if (req.session.data['journey'] === 'b' && req.body['haveDate'] === 'yes') {
  res.redirect('date-needed-4')
  } else if (req.session.data['journey'] === 'c' && req.body['haveDate'] === 'yes') {
  res.redirect('date-needed-2')
  } else {
    res.redirect('send-email')
  }
})

router.post('/srb-pre-award/date-needed-3', function (req, res) {
  if (req.body['dateNeeded3'] === 'yes') {
    res.redirect('sp-amount')
  } else {
    res.redirect('enter-date-3')
  }
})



router.post('/srb-pre-award/date-needed-2', function (req, res) {
  if (req.body['dateNeeded2'] === 'spDate') {
    res.redirect('sp-amount')
  } else {
    res.redirect('enter-date-4')
  }
})

router.post('/srb-pre-award/date-needed-4', function (req, res) {
  if (req.body['whatDate'] === 'SPa' || req.body['another-year']) {
    res.redirect('sp-amount')
  }
})

router.post('/srb-pre-award/send-email', (req, res) => {
  res.redirect('task-queue')
})

router.post('/srb-pre-award/enter-date', (req, res) => {
  res.redirect('sp-amount')
})

router.post('/srb-pre-award/enter-date-3', (req, res) => {
  res.redirect('sp-amount')
})

router.post('/srb-pre-award/enter-date-4', (req, res) => {
  res.redirect('sp-amount')
})

router.post('/srb-pre-award/sp-amount', function (req, res) {
  if (req.body['enterSP'] === '230.25') {
    res.redirect('enter-pp')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/srb-pre-award/enter-pp', (req, res) => {
  res.redirect('check-answers')
})

router.post('/srb-pre-award/date-needed-2', function (req, res) {
  if (req.body['dateNeeded2'] === 'yes') {
    res.redirect('enter-date-2')
  } else {
    res.redirect('sp-amount-2')
  }
})

router.post('/srb-pre-award/enter-date-2', (req, res) => {
  res.redirect('sp-amount-2')
})

router.post('/srb-pre-award/sp-amount-2', function (req, res) {
  if (req.body['enterSP2'] === '230.25') {
    res.redirect('enter-pp-2')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/srb-pre-award/enter-pp-2', (req, res) => {
  res.redirect('check-answers')
})

router.post('/srb-pre-award/check-answers', (req, res) => {
  res.redirect('confirm-award')
})

router.post('/srb-pre-award/confirm-award', (req, res) => {
  res.redirect('task-queue')
})

module.exports = router
