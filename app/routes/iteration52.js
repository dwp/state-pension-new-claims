const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/iteration52/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'death') {
    res.redirect('/iteration52/death')
  } else {
    res.redirect('/iteration52/deferral')
  }
})

module.exports = router
