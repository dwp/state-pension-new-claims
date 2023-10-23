const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/whatislive/isdeath4june', function (req, res) {
  if (req.body.isdeath === 'yes') {
    res.redirect('overview-death-verified-2')
  } else {
    res.redirect('rightdateofdeath')
  }
})

router.post('/whatislive/death-date', function (req, res) {
  if (req.body['verified-or-notverified'] === 'verified') {
    res.redirect('overview-death-verified')
  } else {
    res.redirect('overview-death-notv')
  }
})

module.exports = router
