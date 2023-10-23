const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// ITERATION ONE

// Reason for stopping SP
router.post('/prison/iteration-1/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'suspend') {
    res.redirect('personal-suspended')
  } else if (req.body['stop-sp'] === 'prison') {
    res.redirect('date-entered-prison')
  } else {
    res.redirect('personal')
  }
})

router.post('/prison/iteration-1/date-entered-prison', (req, res) => {
  res.redirect('prison-overpayment')
})

// Prison overpayment referral
router.post('/prison/iteration-1/prison-overpayment', function (req, res) {
  if (req.body['prison-overpayment'] === 'yes') {
    res.redirect('prison-debt-referral')
  } else {
    res.redirect('personal-prison-overpayment')
  }
})

router.post('/prison/iteration-1/prison-debt-referral', (req, res) => {
  res.redirect('personal-prison')
})

router.post('/prison/iteration-1/prison-restart-sp', (req, res) => {
  res.redirect('personal')
})

// Reason for restarting SP
router.post('/prison/iteration-1/restart-sp', function (req, res) {
  if (req.body['restart-sp'] === 'prison') {
    res.redirect('personal-left-prison')
  } else if (req.body['restart-sp'] === 'suspend') {
    res.redirect('personal-suspendedrestarted')
  } else {
    res.redirect('personal')
  }
})

// ITERATION two

// Reason for stopping SP
router.post('/prison/iteration-2/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'suspend') {
    res.redirect('personal-suspended')
  } else if (req.body['stop-sp'] === 'prison') {
    res.redirect('date-entered-prison')
  } else if (req.body['stop-sp'] === 'custody') {
    res.redirect('personal-suspended')
  } else {
    res.redirect('personal')
  }
})

router.post('/prison/iteration-2/date-entered-prison', (req, res) => {
  res.redirect('in-prison')
})

// Is the claimant still in prison?
router.post('/prison/iteration-2/in-prison', function (req, res) {
  if (req.body['in-prison'] === 'yes') {
    res.redirect('prison-overpayment')
  } else {
    res.redirect('date-left-prison')
  }
})

router.post('/prison/iteration-2/date-left-prison', (req, res) => {
  res.redirect('prison-overpayment-1')
})

// Prison overpayment referral
router.post('/prison/iteration-2/prison-overpayment', function (req, res) {
  if (req.body['prison-overpayment'] === 'yes') {
    res.redirect('prison-debt-referral')
  } else {
    res.redirect('personal-prison-overpayment')
  }
})

router.post('/prison/iteration-2/prison/iteration-1-debt-referral', (req, res) => {
  res.redirect('personal-prison')
})

router.post('/prison/iteration-2/prison/iteration-1-restart-sp', (req, res) => {
  res.redirect('personal')
})

// Reason for restarting SP
router.post('/prison/iteration-2/restart-sp', function (req, res) {
  if (req.body['restart-sp'] === 'prison') {
    res.redirect('personal-left-prison')
  } else if (req.body['restart-sp'] === 'suspend') {
    res.redirect('personal-suspendedrestarted')
  } else {
    res.redirect('personal')
  }
})

module.exports = router
