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

  if (prisonType === 'criminal') {
    res.redirect('prison-entry-date')
  } else if (prisonType === 'civil') {
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
  const isChanging = req.query.change === 'true'

  if (isChanging) {
    res.redirect('prison-entry-cya')
  } else {
    res.redirect('prison-entry-cya')
  }
})

router.use((req, res, next) => {
  if (req.path !== '/prison-conviction/record-personal') {
    req.session.data['showBanner'] = 'no'
  }
  next()
})

router.post('/prison-conviction/prison-entry-cya', (req, res) => {
  req.session.data['isSuspended'] = 'yes'
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-personal')
})

router.post('/prison-conviction/prison-type-civil', (req, res) => {
  req.session.data['isCivil'] = 'yes'
  res.redirect('record-personal')
})

router.post('/prison-conviction/prison-leave-date', (req, res) => {
  res.redirect('prison-conviction')
})

router.post('/prison-conviction/prison-conviction', (req, res) => {
  res.redirect('prison-leave-cya')
})

router.post('/prison-conviction/prison-leave-cya', (req, res) => {
  req.session.data['isRestarted'] = 'yes'

  const prisonConvicted = req.session.data['prisonConvicted']

  if (prisonConvicted === 'yes') {
    res.redirect('prison-overpayment')
  } else {
    res.redirect('prison-refund')
  }
})

router.post('/prison-conviction/prison-refund', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-personal')
})

router.post('/prison-conviction/prison-overpayment', (req, res) => {
  const prisonOverpay = req.session.data['prisonOverpay']

  if (prisonOverpay === 'yes') {
    res.redirect('prison-overpayment-info')
  } else {
    res.redirect('record-personal')
  }
})

router.post('/prison-conviction/prison-overpayment-info', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-personal')
})

module.exports = router
