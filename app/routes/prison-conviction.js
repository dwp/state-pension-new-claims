const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/prison-conviction/stop-state-pension', (req, res) => {
  if (req.session.data['stopReason'] === 'stopPrison') {
    res.redirect('prison-type')
  } else {
    res.redirect('prison-type')
  }
})

router.post('/prison-conviction/prison-type', (req, res) => {
  const prisonType = req.session.data['prisonType']

  if (prisonType === 'prisonTypeCriminal') {
    res.redirect('prison-entry-date')
  } else if (prisonType === 'prisonTypeCivil') {
    res.redirect('prison-type-civil')
  } else {
    res.redirect('prison-suspend')
  }
})

router.post('/prison-conviction/prison-suspend', (req, res) => {
  const prisonSuspend = req.session.data['prisonSuspend']

  if (prisonSuspend === 'yes') {
    res.redirect('prison-entry-date')
  } else {
    res.redirect('record-personal')
  }
})

router.post('/prison-conviction/prison-entry-date', (req, res) => {
  res.redirect('prison-entry-cya')
})

router.post('/prison-conviction/prison-entry-cya', (req, res) => {
  req.session.data['isSuspended'] = 'yes'
  res.redirect('record-personal')
})

router.post('/prison-conviction/prison-type-civil', (req, res) => {
  req.session.data['isCivil'] = 'yes'
  res.redirect('record-personal')
})

module.exports = router
