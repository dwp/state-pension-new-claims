const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration8a/find', (req, res) => {
  res.redirect('/iteration8a/find-1')
})

router.post('/iteration8a/find-1', (req, res) => {
  res.redirect('/iteration8a/overview')
})

router.post('/iteration8a/date-death', (req, res) => {
  res.redirect('/iteration8a/overview-date')
})

router.post('/iteration8a/new-datedeath', (req, res) => {
  res.redirect('/iteration8a/overview-notverified')
})

router.post('/iteration8a/death-verification', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.deathdate === 'yes') { // name of data / + answer
    res.redirect('/iteration8a/overview-verified-fourth')
  } else {
    res.redirect('/iteration8a/new-deathdate')
  }
})

module.exports = router
