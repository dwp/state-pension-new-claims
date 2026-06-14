const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/welsh/contact-pref-spoken', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['lastChanged'] = 'spoken'
  res.redirect('record-contact')
})

router.post('/welsh/contact-pref-written', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['lastChanged'] = 'written'
  res.redirect('record-contact')
})

router.post('/welsh/contact-pref-alt-format', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['lastChanged'] = 'altFormat'
  res.redirect('record-contact')
})

router.use((req, res, next) => {
  if (req.path !== '/welsh/record-contact') {
    req.session.data['showBanner'] = 'no'
    req.session.data['lastChanged'] = null
  }
  next()
})

module.exports = router
