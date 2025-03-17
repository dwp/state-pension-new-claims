const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/coeg/check-nirs-routing', (req, res) => {
  res.redirect('what-date-2')
})

router.post('/coeg/check-nirs-routing-3', (req, res) => {
  res.redirect('hmrc-question-3')
})

router.post('/coeg/check-nirs-routing-2', (req, res) => {
  res.redirect('hmrc-question-2')
})

router.post('/coeg/hmrc-question', function (req, res) {
  if (req.body['hmrcQuestion'] === 'yes') {
    res.redirect('dashboard')
  } else {
    res.redirect('complete-bic1')
  }
})

module.exports = router
