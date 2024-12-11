const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Option 1 - Step by step

router.post('/edge-cases/test-journey-1/record-tasks-5', function (req, res) {
  res.redirect('check-answers')
})


module.exports = router