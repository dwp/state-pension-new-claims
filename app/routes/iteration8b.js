const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration8b/find', (req, res) => {
  res.redirect('/iteration8b/find-1')
})

router.post('/iteration8b/find-1', (req, res) => {
  res.redirect('/iteration8b/overview')
})

router.post('/iteration8b/death-date', (req, res) => {
  res.redirect('/iteration8b/overview-date')
})

module.exports = router
