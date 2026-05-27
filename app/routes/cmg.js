const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/cmg/cmg-add-amount', (req, res) => {
  req.session.data['confirmRemoval'] = 'no'
  res.redirect('cmg-add-cya')
})

router.post('/cmg/cmg-remove-or-change', (req, res) => {
  if (req.session.data['removeOrChange'] === 'changeCmg') {
    res.redirect('cmg-change')
  } else {
    res.redirect('cmg-remove')
  }
})

router.post('/cmg/cmg-change', (req, res) => {
  res.redirect('cmg-change-cya')
})

router.use((req, res, next) => {
  if (req.path !== '/cmg/record-award') {
    req.session.data['showBanner'] = 'no'
  }
  next()
})

router.post('/cmg/cmg-add-cya', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-award')
})

router.post('/cmg/cmg-change-cya', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-award')
})

router.post('/cmg/cmg-remove', (req, res) => {
  const confirmRemoval = req.session.data['confirmRemoval']
  if (confirmRemoval === 'yes') {
    req.session.data['showBanner'] = 'yes'
  } else {
    req.session.data['showBanner'] = 'no'
  }

  res.redirect('record-award')
})


module.exports = router
