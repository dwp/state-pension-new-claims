const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Iteration 3

router.post('/identity-check-task/iteration-3/security-check-task-details-record', (req, res) => {
  res.redirect('/identity-check-task/iteration-3/security-check-task-record')
})

router.post('/identity-check-task/iteration-3/security-check-task-details', (req, res) => {
  res.redirect('/identity-check-task/iteration-3/security-check-task')
})

router.post('/identity-check-task/iteration-3/security-check-task', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('passed-payment-details')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('first-fail')
  } else if (req.body['security-questions'] === 'refused') {
    res.redirect('refused')
  } else {
    res.redirect('no-answer')
  }
})

router.post('/identity-check-task/iteration-3/security-check-task-2', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('')
  } else if (req.body['security-questions'] === 'refused') {
    res.redirect('')
  } else {
    res.redirect('no-answer-2')
  }
})

//
router.post('/identity-check-task/iteration-3/security-check-task-record', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('passed-2')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('second-fail')
  } else {
    res.redirect('refused-2')
  }
})

router.post('/identity-check-task/iteration-3/passed-payment-details', function (req, res) {
  if (req.body['account-number'] === '12343212') {
    res.redirect('passed-payment-details-error')
  } else {
    res.redirect('passed-bank-details')
  }
})

router.post('/identity-check-task/iteration-3/passed-payment-details-error', function (req, res) {
  if (req.body['account-number'] === '12343212') {
    res.redirect('passed-payment-details-error')
  } else {
    res.redirect('passed-bank-details')
  }
})

router.post('/identity-check-task/iteration-3/enquiries', (req, res) => {
  res.redirect('/identity-check-task/iteration-3/find')
})

router.post('/identity-check-task/iteration-3/find', function (req, res) {
  if (req.session.data.nino === 'XX 12 34 56') {
    res.redirect('personal-one-fail')
  } else if (req.session.data.nino === 'XX123456') {
    res.redirect('personal-one-fail')
  } else if (req.session.data.nino === 'xx123456') {
    res.redirect('personal-one-fail')
  } else if (req.session.data.nino === 'xx 12 34 56') {
    res.redirect('personal-one-fail')
  } else {
    res.redirect('personal')
  }
})

// Iteration 2

router.post('/identity-check-task/iteration-2/security-check-task-details-record', (req, res) => {
  res.redirect('/identity-check-task/iteration-2/security-check-task-record')
})

router.post('/identity-check-task/iteration-2/security-check-task-details', (req, res) => {
  res.redirect('/identity-check-task/iteration-2/security-check-task')
})

router.post('/identity-check-task/iteration-2/security-check-task', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('passed-payment-details')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('first-fail')
  } else if (req.body['security-questions'] === 'refused') {
    res.redirect('refused')
  } else {
    res.redirect('no-answer')
  }
})

router.post('/identity-check-task/iteration-2/security-check-task-2', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('')
  } else if (req.body['security-questions'] === 'refused') {
    res.redirect('')
  } else {
    res.redirect('no-answer-2')
  }
})

//
router.post('/identity-check-task/iteration-2/security-check-task-record', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('passed-2')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('second-fail')
  } else {
    res.redirect('refused-2')
  }
})

router.post('/identity-check-task/iteration-2/passed-payment-details', function (req, res) {
  if (req.body['account-number'] === '12343212') {
    res.redirect('passed-payment-details-error')
  } else {
    res.redirect('passed-bank-details')
  }
})

router.post('/identity-check-task/iteration-2/passed-payment-details-error', function (req, res) {
  if (req.body['account-number'] === '12343212') {
    res.redirect('passed-payment-details-error')
  } else {
    res.redirect('passed-bank-details')
  }
})

router.post('/identity-check-task/iteration-2/enquiries', (req, res) => {
  res.redirect('/identity-check-task/iteration-2/find')
})

router.post('/identity-check-task/iteration-2/find', function (req, res) {
  if (req.session.data.nino === 'XX 12 34 56') {
    res.redirect('personal-one-fail')
  } else if (req.session.data.nino === 'XX123456') {
    res.redirect('personal-one-fail')
  } else if (req.session.data.nino === 'xx123456') {
    res.redirect('personal-one-fail')
  } else if (req.session.data.nino === 'xx 12 34 56') {
    res.redirect('personal-one-fail')
  } else {
    res.redirect('personal')
  }
})

// Iteration 1

router.post('/identity-check-task/iteration-1/security-check-task-details-record', (req, res) => {
  res.redirect('/identity-check-task/iteration-1/security-check-task-record')
})

router.post('/identity-check-task/iteration-1/security-check-task-details', (req, res) => {
  res.redirect('/identity-check-task/iteration-1/security-check-task')
})

router.post('/identity-check-task/iteration-1/security-check-task', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('passed')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('failed')
  } else if (req.body['security-questions'] === 'refused') {
    res.redirect('refused')
  } else {
    res.redirect('no-answer')
  }
})

//
router.post('/identity-check-task/iteration-1/security-check-task-record', function (req, res) {
  if (req.body['security-questions'] === 'passed') {
    res.redirect('passed-2')
  } else if (req.body['security-questions'] === 'failed') {
    res.redirect('failed-2')
  } else {
    res.redirect('refused-2')
  }
})

module.exports = router
