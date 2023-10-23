const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/iteration43abefore/defer', function (req, res) {
  if (req.body.claim === 'yes') {
    res.redirect('/iteration43abefore/cancel-confirm')
  } else if (req.body.claim === 'no') {
    res.redirect('/iteration43abefore/cancel-defer-date')
  } else {
    res.redirect('/iteration43abefore/defer')
  }
})

module.exports = router
