
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/srb/pension-credit/srb/pension-credit/pc-srb-record-2/pc-changes', (req, res) => {
  if (req.body['pc-withhold'] === 'yes') {
    res.redirect('/srb/pension-credit/srb/pension-credit/pc-srb-record-2/review-award')
  } else {
    res.redirect('/srb/pension-credit/srb/pension-credit/pc-srb-record-2/confirm-nothing-withheld')
  }
})

module.exports = router
