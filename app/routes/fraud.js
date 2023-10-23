const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/fraud/attempted/iteration-1/fraud-date', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/record-fraud')
})

router.post('/fraud/attempted/iteration-1/fraud-method', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/record-fraud')
})

router.post('/fraud/attempted/iteration-1/fraud-details', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/record-fraud')
})

router.post('/fraud/attempted/iteration-1/record-fraud', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/personal-fraud')
})

router.post('/fraud/attempted/iteration-1/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'fraud') {
    res.redirect('')
  } else {
    res.redirect('')
  }
})

module.exports = router
