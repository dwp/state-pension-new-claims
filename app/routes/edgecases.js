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

router.post('/edge-cases/LSI/option-3/which-option', function (req, res) {

  if (req.body['whichOption'] === 'lsi') {
    res.redirect('tax-year')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/edge-cases/LSI/option-3/tax-year', function (req, res) {

  if (req.body['whichYear'] === 'now') {
    res.redirect('tax-rate')
  } else {
    res.redirect('check-answers')
  }
})

router.post('/edge-cases/LSI/option-4/enter-lsi', function (req, res) {

  if (req.body['whichYear'] === 'now') {
    res.redirect('tax-rate')
  } else {
    res.redirect('check-answers-2')
  }
})

// Iteration 2 - PSOD

// Option 1

router.post('/edge-cases/PSOD/iteration-2/option-1/psod-task-routing', function (req, res) {
  res.redirect('check-answers')
})

// Option 2

router.post('/edge-cases/PSOD/iteration-2/option-2/enter-psod-credit-routing', function (req, res) {
  if (req.body['debitQuestion'] === 'yes') {
    res.redirect('enter-psod-debit')
  } else {
    res.redirect('check-answers-1c')
  }
})

router.post('/edge-cases/PSOD/iteration-2/option-2/enter-psod-debit-routing', function (req, res) {
  if (req.body['creditQuestion'] === 'yes') {
    res.redirect('enter-psod-credit')
  } else {
    res.redirect('check-answers-1c')
  }
})

// Iteration 2 - LSI

// Option 1

router.post('/edge-cases/LSI/iteration-2/option-1/which-option', function (req, res) {

  if (req.body['whichOption'] === 'esp') {
    res.redirect('enter-inherited-esp')
  } else {
    res.redirect('which-year')
  }
})

router.post('/edge-cases/LSI/iteration-2/option-1/which-year', function (req, res) {

  if (req.body['whichYear'] === 'later') {
    res.redirect('check-answers-2a')
  } else {
    res.redirect('tax-rate')
  }
})

// Option 3

router.post('/edge-cases/LSI/iteration-2/option-3/enter-lsi', function (req, res) {
  res.redirect('check-answers-2')
})

// LSI - Final

router.post('/edge-cases/LSI/final/which-option', function (req, res) {

  if (req.body['whichOption'] === 'esp') {
    res.redirect('check-answers-2a')
  } else {
    res.redirect('which-year')
  }
})

router.post('/edge-cases/LSI/final/which-year', function (req, res) {

  if (req.body['whichYear'] === 'later') {
    res.redirect('check-answers-2a')
  } else {
    res.redirect('tax-rate')
  }
})

module.exports = router