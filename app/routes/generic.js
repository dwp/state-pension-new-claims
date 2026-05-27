const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/generic-task/check-details', function (req, res) {
  if (req.body['decision'] === 'more-info') {
    res.redirect('request-info')
  } else if (req.body['decision'] === 'adjust-award') {
    res.redirect('adjust-sp')
  } else if (req.body['decision'] === 'award-sp') {
    res.redirect('confirm-award')
  } else if (req.body['decision'] === 'claim-unsuccessful') {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/generic-task/request-info', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/adjust-sp', function (req, res) {
  if (req.body['credit'] === '30.25') {
    res.redirect('enter-pp')
  } else {
    res.redirect('date-needed')
  }
})

router.post('/generic-task/confirm-award', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/enter-pp', (req, res) => {
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
