const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/nvdob/received-evidence', function (req, res) {
  if (req.body['evidence'] === 'yes') {
    res.redirect('what-evidence')
  } else {
    res.redirect('send-reminder')
  }
})

router.post('/nvdob/received-evidence-2', function (req, res) {
  if (req.body['evidence2'] === 'yes') {
    res.redirect('what-evidence')
  } else {
    res.redirect('send-reminder')
  }
})

router.post('/nvdob/received-evidence-3', function (req, res) {
  if (req.body['evidence3'] === 'yes') {
    res.redirect('what-evidence')
  } else {
    res.redirect('close')
  }
})

router.post('/nvdob/close', function (req, res) {
  if (req.body['close'] === 'yes') {
    res.redirect('task-queue')
  } else {
    res.redirect('received-evidence-3')
  }
})

router.post('/nvdob/send-reminder', function (req, res) {
  res.redirect('task-queue')
})

router.post('/nvdob/what-evidence', function (req, res) {
  if (req.body['provide']) {
    res.redirect('claimant-dob')
  }
})

router.post('/nvdob/claimant-dob', function (req, res) {
  res.redirect('check-answers')
})

router.post('/nvdob/check-answers', function (req, res) {
  res.redirect('which-scenario')
})

router.post('/nvdob/which-scenario', function (req, res) {
  if (req.body['scenario'] === 'award') {
    res.redirect('award-calculated')
  } else if (req.body['scenario'] === 'further') {
    res.redirect('additional-tasks')  
  } else {
    res.redirect('complete-br403')
  }
})

router.post('/nvdob/award-calculated', function (req, res) {
  res.redirect('award-confirmed')
})

router.post('/nvdob/award-confirmed', function (req, res) {
  res.redirect('task-queue')
})

router.post('/nvdob/additional-tasks', function (req, res) {
  res.redirect('task-queue')
})

router.post('/nvdob/complete-br403', function (req, res) {
  res.redirect('task-queue')
})

module.exports = router
