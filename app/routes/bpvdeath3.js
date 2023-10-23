const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpvdeath3/sarah-name', function (req, res) {
  if (req.body['is-payee'] === 'yes') {
    res.redirect('sarah-address-1')
  } else {
    res.redirect('sarah-address-1')
  }
})

router.post('/bpvdeath3/sarah-address-1', function (req, res) {
  if (req.body.address === 'yes') {
    res.redirect('sarah-bank')
  } else {
    res.redirect('sarah-address-2')
  }
})

module.exports = router
