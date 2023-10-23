const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/iteration43/cancel-date', function (req, res) {
  if (req.body.claim === 'yes') {
    res.redirect('/iteration43/cancel-confirm')
  } else {
    res.redirect('/iteration43/cancel-defer-date')
  }
})

module.exports = router
