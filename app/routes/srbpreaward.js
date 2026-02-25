const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/srb-pre-award/which-journey', function (req, res) {
  if (req.body['journey'] === 'a' || req.body['journey'] === 'b' || req.body['journey'] === 'c') {
    res.redirect('task-queue')
  }
})

router.post('/srb-pre-award/start', (req, res) => {
  res.redirect('do-you-have-date')
})

router.post('/srb-pre-award/start-2', (req, res) => {
  res.redirect('do-you-have-date')
})

router.post('/srb-pre-award/do-you-have-date', function (req, res) {
  if (req.session.data['journey'] === 'a' && req.body['haveDate'] === 'yes') {
    res.redirect('date-needed-3')
  } else if (req.session.data['journey'] === 'b' && (req.body['haveDate'] === 'yes' || req.body['haveDate2'] === 'yes')) {
  res.redirect('date-needed-4')
  } else if (req.session.data['journey'] === 'c' && req.body['haveDate'] === 'yes') {
  res.redirect('date-needed-2')
  } else {
    res.redirect('complete-proforma')
  }
})

router.post('/srb-pre-award/date-needed-3', function (req, res) {
  if (req.body['dateNeeded3'] === 'yes') {
    res.redirect('how-many-years')
  } else {
    res.redirect('enter-date-3')
  }
})

router.post('/srb-pre-award/date-needed-2', function (req, res) {
  if (req.body['dateNeeded2'] === 'spDate') {
    res.redirect('how-many-years')
  } else {
    res.redirect('enter-date-4')
  }
})

router.post('/srb-pre-award/date-needed-4', (req, res) => {
  res.redirect('how-many-years')
})

router.post('/srb-pre-award/complete-proforma', (req, res) => {
  res.redirect('task-queue')
})

router.post('/srb-pre-award/enter-date', (req, res) => {
  res.redirect('how-many-years')
})

router.post('/srb-pre-award/enter-date-3', (req, res) => {
  res.redirect('how-many-years')
})

router.post('/srb-pre-award/enter-date-4', (req, res) => {
  res.redirect('how-many-years')
})

router.post('/srb-pre-award/how-many-years', function (req, res) {
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
    res.redirect('how-many-years-2')
  }
})

router.post('/srb-pre-award/enter-date-2', (req, res) => {
  res.redirect('how-many-years-2')
})

router.post('/srb-pre-award/how-many-years-2', function (req, res) {
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
  res.redirect('review-award')
})

router.post('/srb-pre-award/are-you-sure', function (req, res) {
  if (req.body['remove'] === 'yes' || req.body['remove'] === 'no') {
    res.redirect('check-answers')
  }
})

router.post('/srb-pre-award/are-you-sure', (req, res) => {
  res.redirect('check-answers')
})

router.post('/srb-pre-award/review-award', (req, res) => {
  res.redirect('task-queue')
})

module.exports = router
