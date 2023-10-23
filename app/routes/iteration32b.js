const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration32b/change-status', function (req, res) {
  if (req.body.maritalstatus === 'widowed') {
    res.redirect('widow-date')
  } if (req.body.maritalstatus === 'divorced') {
    res.redirect('divorce-date')
  }
})

router.post('/iteration32b/verify', function (req, res) {
  if (req.body['verified-or-notverified'] === 'verified') {
    res.redirect('spouse-detailsV')
  } else {
    res.redirect('new-date')
  }
})

module.exports = router
