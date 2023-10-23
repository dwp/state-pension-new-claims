const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Reason for stopping SP
router.post('/death/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'deferral') {
    res.redirect('deferral')
  } else {
    res.redirect('death-date')
  }
})

// Date of death to DAP details
router.post('/death/death-date', (req, res) => {
  res.redirect('/death/dap-details')
})

// DAP details yes/no
router.post('/death/dap-details', function (req, res) {
  if (req.body['dap-details'] === 'yes') {
    res.redirect('dap-name')
  } else {
    res.redirect('overview-arrears')
  }
})

// DAP name to DAP number
router.post('/death/dap-name', (req, res) => {
  res.redirect('/death/dap-number')
})

// DAP number to DAP address
router.post('/death/dap-number', (req, res) => {
  res.redirect('/death/dap-address')
})

// Dap address, to find address results
router.post('/death/dap-address', (req, res) => {
  res.redirect('/death/dap-address-2')
})

// Dap address, to find address results
router.post('/death/dap-address-2', (req, res) => {
  res.redirect('/death/dap-bank')
})

// DAP bank details
router.post('/death/dap-bank', function (req, res) {
  if (req.body['dap-bank-details'] === 'yes') {
    res.redirect('dap-bank-details')
  } else {
    res.redirect('arrears-no-bank')
  }
})

//
router.post('/death/arrears-no-bank', (req, res) => {
  res.redirect('/death/br330')
})

//
router.post('/death/br330', (req, res) => {
  res.redirect('/overview-dead-bank')
})

// ITERATION 3

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Reason for stopping SP
router.post('/admin-view-3/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'suspend') {
    res.redirect('personal-suspended')
  } else if (req.body['stop-sp'] === 'prison') {
    res.redirect('personal-prison')
  } else {
    res.redirect('personal')
  }
})

// Reason for restarting SP
router.post('/admin-view-3/restart-sp', function (req, res) {
  if (req.body['restart-sp'] === 'prison') {
    res.redirect('personal-left-prison')
  } else if (req.body['restart-sp'] === 'suspend') {
    res.redirect('personal-suspendedrestarted')
  } else {
    res.redirect('personal')
  }
})

module.exports = router
