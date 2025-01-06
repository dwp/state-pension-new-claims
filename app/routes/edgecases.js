const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Option 1 - Step by step

router.post('/edge-cases/PSOD/test-journey-1/record-tasks-5', function (req, res) {
  res.redirect('check-answers')
})

router.post('/edge-cases/PSOD/test-journey-2/enter-psod-credit-routing', function (req, res) {
  res.redirect('check-answers-2')
})

router.post('/edge-cases/PSOD/test-journey-2/enter-psod-debit-routing', function (req, res) {
  res.redirect('check-answers-2')
})

router.post('/edge-cases/PSOD/test-journey-2/enter-amount', function (req, res) {

  if (req.body['PSODamount'] === '185.15') {
    res.redirect('enter-pp')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/edge-cases/PSOD/test-journey-3/enter-psod', function (req, res) {

  if (req.body['PSODamount'] === '185.15') {
    res.redirect('enter-pp')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/edge-cases/PSOD/test-journey-3/spouse-question-routing', function (req, res) {
  res.redirect('enter-psod')
})



module.exports = router