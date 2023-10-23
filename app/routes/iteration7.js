const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration7/find', (req, res) => {
  res.redirect('/iteration7/find-1')
})

router.post('/iteration7/find-1', (req, res) => {
  res.redirect('/iteration7/overview-dead')
})

module.exports = router
