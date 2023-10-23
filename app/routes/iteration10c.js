const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration10c/dap-name', function (req, res) {
  if (req.body['is-payee'] === 'yes') {
    res.redirect('dap-address')
  } else {
    res.redirect('dap-address')
  }
})

router.post('/iteration10c/dap-address', function (req, res) {
  if (req.body.address === 'yes') {
    res.redirect('dap-bank')
  } else {
    res.redirect('dap-address-2')
  }
})

router.post('iteration10c/dap-address-2', (req, res) => {
  res.redirect('iteration10c/dap-address-3')
})

router.post('iteration10c/dap-address-3', (req, res) => {
  res.redirect('iteration10c/dap-bank')
})

router.post('/bpv-death-3/sarah-name', function (req, res) {
  if (req.body['is-payee'] === 'yes') {
    res.redirect('sarah-address-1')
  } else {
    res.redirect('sarah-address-1')
  }
})

router.post('/bpv-death-3/sarah-address', function (req, res) {
  if (req.body.address === 'yes') {
    res.redirect('sarah-bank')
  } else {
    res.redirect('sarah-address-2')
  }
})

router.post('bpv-death-3/sarah-address-2', (req, res) => {
  res.redirect('bpv-death-3/sarah-address-3')
})

router.post('bpv-death-3/sarah-address-3', (req, res) => {
  res.redirect('bpv-death-3/sarah-bank')
})

/// / Iteration 26c

module.exports = router
