const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('iteration10a/find', (req, res) => {
  res.redirect('iteration10a/find-1')
})

router.post('iteration10a/find-1', (req, res) => {
  res.redirect('iteration10a/overview')
})

router.post('iteration10a/death-date', (req, res) => {
  res.redirect('iteration10a/dap-name')
})

router.post('iteration10a/dap-address', (req, res) => {
  res.redirect('iteration10a/dap-address-1')
})

router.post('iteration10a/dap-address-1', (req, res) => {
  res.redirect('iteration10a/overpayment')
})

router.post('iteration10a/overpayment', (req, res) => {
  res.redirect('iteration10a/send-letter')
})

router.post('iteration10a/send-letter', (req, res) => {
  res.redirect('iteration10a/letter-sent')
})

router.post('iteration10a/address-postcode-manual', (req, res) => {
  res.redirect('iteration10a/overpayment')
})

router.post('iteration11c/dap-number', (req, res) => {
  res.redirect('iteration10a/nothing-owed')
})

router.post('/iteration11c/nothing-owed', function (req, res) {
  if (req.body.sendletter === 'yes') {
    res.redirect('dap-address-1')
  } else {
    res.redirect('nothing-owed')
  }
})

module.exports = router
