const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration28/sure-recall', function (req, res) {
  if (req.body.recall === 'yes') {
    res.redirect('payment-recalling')
  } else {
    res.redirect('payment-details')
  }
})

module.exports = router
