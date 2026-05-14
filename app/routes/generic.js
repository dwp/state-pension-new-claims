const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/generic-task/check-details', function (req, res) {
  if (req.body['decision'] === 'more-info') {
    res.redirect('request-info-2')
  } else if (req.body['decision'] === 'adjust-award') {
    res.redirect('adjust-sp')
  } else if (req.body['decision'] === 'award-sp') {
    res.redirect('confirm-award')
  } else if (req.body['decision'] === 'claim-unsuccessful') {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/generic-task/check-details-2', function (req, res) {
  if (req.body['decision2'] === 'more-info2') {
    res.redirect('request-info-2')
  } else if (req.body['decision2'] === 'adjust-award2') {
    res.redirect('adjust-sp')
  } else if (req.body['decision2'] === 'award-sp2') {
    res.redirect('confirm-award')
  } else if (req.body['decision2'] === 'claim-unsuccessful2') {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/generic-task/request-info', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/request-info-2', (req, res) => {
  res.redirect('postpone')
})

router.post('/generic-task/postpone', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/select-option', function (req, res) {
  if (req.body['option'] === 'one') {
    res.redirect('check-details')
  } else {
    res.redirect('check-details-2')
  }
})

router.post('/generic-task/confirm-award', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/adjust-sp', (req, res) => {
  res.redirect('date-needed')
})

router.post('/generic-task/claim-unsuccessful', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/date-needed', (req, res) => {
  res.redirect('complete-task')
})

router.post('/generic-task/complete-task', (req, res) => {
  res.redirect('confirm-award')
})

module.exports = router
