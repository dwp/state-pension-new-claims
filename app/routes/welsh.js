const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/welsh/stop-state-pension', (req, res) => {
  if (req.session.data['stopReason'] === 'stopPrison') {
    res.redirect('prison-type')
  } else {
    res.redirect('prison-type')
  }
})

router.post('/welsh/prison-type', (req, res) => {
  const prisonType = req.session.data['prisonType']

  if (prisonType === 'criminal') {
    res.redirect('prison-entry-date')
  } else if (prisonType === 'civil') {
    res.redirect('prison-type-civil')
  } else {
    res.redirect('prison-suspend')
  }
})

router.post('/welsh/prison-suspend', (req, res) => {
  const prisonSuspend = req.session.data['prisonSuspend']

  if (prisonSuspend === 'yes') {
    res.redirect('prison-entry-date')
  } else {
    res.redirect('record-personal')
  }
})

router.post('/welsh/prison-entry-date', (req, res) => {
    res.redirect('prison-entry-cya')
})

router.use((req, res, next) => {
  if (req.path !== '/welsh/record-contact') {
    req.session.data['showBanner'] = 'no'
  }
  next()
})

router.post('/welsh/prison-entry-cya', (req, res) => {
  req.session.data['isSuspended'] = 'yes'
  req.session.data['showBanner'] = 'yes'

  if (req.session.data['prisonDateChange'] === 'yes') {
    req.session.data['prisonDateChanged'] = 'yes'
  }

  res.redirect('record-personal')
})

router.post('/welsh/prison-type-civil', (req, res) => {
  req.session.data['isCivil'] = 'yes'
  res.redirect('record-personal')
})

router.post('/welsh/prison-details-check', (req, res) => {
  res.redirect('prison-leave-date')
})

router.post('/welsh/prison-leave-date', (req, res) => {
  res.redirect('prison-conviction')
})

router.post('/welsh/prison-conviction', (req, res) => {
  res.redirect('prison-leave-cya')
})

router.post('/welsh/prison-leave-cya', (req, res) => {
  req.session.data['isRestarted'] = 'yes'

  const prisonConvicted = req.session.data['prisonConvicted']

  if (prisonConvicted === 'yes') {
    res.redirect('prison-overpayment')
  } else {
    res.redirect('prison-refund')
  }
})

router.post('/welsh/prison-change-or-restart', (req, res) => {
  const prisonChangeOrRestart = req.session.data['prisonChangeOrRestart']

  if (prisonChangeOrRestart === 'change') {
    res.redirect('prison-entry-date')
  } else {
    res.redirect('prison-restart-reason')
  }
})

router.post('/welsh/prison-restart-reason', (req, res) => {
  const prisonRestartReason = req.session.data['prisonRestartReason']

  if (prisonRestartReason === 'not') {
    res.redirect('prison-remove')
  } else {
    res.redirect('prison-details-check')
  }
})

router.post('/welsh/prison-remove', (req, res) => {
  const prisonRemove = req.session.data['prisonRemove']

  if (prisonRemove === 'no') {
    res.redirect('record-personal')
  } else {
    res.redirect('prison-refund')
  }
})

router.post('/welsh/prison-refund', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-personal')
})

router.post('/welsh/prison-overpayment', (req, res) => {
  const prisonOverpay = req.session.data['prisonOverpay']

  if (prisonOverpay === 'yes') {
    res.redirect('prison-overpayment-info')
  } else {
    res.redirect('record-personal')
  }
})

router.post('/welsh/prison-overpayment-info', (req, res) => {
  req.session.data['showBanner'] = 'yes'

  res.redirect('record-personal')
})

module.exports = router
