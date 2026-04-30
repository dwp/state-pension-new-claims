const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.path !== '/dap/record-personal') {
    req.session.data['showBanner'] = 'no'
  }
  next()
})

router.post('/dap/stop-state-pension', (req, res) => {
  if (req.session.data['stopReason'] === 'stopDied') {
    res.redirect('death-date')
  } else {
    res.redirect('death-date')
  }
})

router.post('/dap/death-date', (req, res) => {

  const verifyDateOfDeathSuggestion = req.session.data['verifyDateOfDeathSuggestion']

  if (verifyDateOfDeathSuggestion) {
    res.redirect('death-date-cya')
  } else {
    res.redirect('death-date-verification')
  }
})

router.post('/dap/death-date-verification', (req, res) => {
  const representativeDetails = req.session.data['representativeDetails']

  if (representativeDetails === 'no') {
    const deathDateVerified = req.session.data['deathDateVerified']

    if (deathDateVerified === 'verified') {
      res.redirect('death-date-suggested')
    } else {
      res.redirect('death-representative-name')
    }
  } else {
    res.redirect('death-date-cya')
  }
})

router.post('/dap/death-date-cya', (req, res) => {
  req.session.data['deathConfirmed'] = 'yes'

  const deathDateVerified = req.session.data['deathDateVerified']

  if (deathDateVerified === 'verified') {
    res.redirect('death-final')
  } else {
    res.redirect('death-representative-have-details')
  }
})

router.post('/dap/death-final', (req, res) => {
  res.redirect('death-representative-have-details')
})

router.post('/dap/death-representative-have-details', (req, res) => {
  const representativeDetails = req.session.data['representativeDetails']

  if (representativeDetails === 'yes') {
    res.redirect('death-representative-name')
  } else {
    req.session.data['showBanner'] = 'yes'
    res.redirect('record-personal')
  }
})


router.post('/dap/death-representative-name', (req, res) => {
  res.redirect('death-representative-reference')
})

router.post('/dap/death-representative-reference', (req, res) => {
  res.redirect('death-representative-phone')
})

router.post('/dap/death-representative-phone', (req, res) => {
  res.redirect('death-representative-address')
})

router.post('/dap/death-representative-address', (req, res) => {
  res.redirect('death-representative-address-found')
})

router.post('/dap/death-representative-address-found', (req, res) => {
  res.redirect('death-representative-cya')
})

router.post('/dap/death-representative-cya', (req, res) => {
  req.session.data['representativeDetailsCollected'] = 'yes'
  req.session.data['deathFirstPassDone'] = 'yes'
  req.session.data['showBanner'] = 'yes'

  const deathDateVerified = req.session.data['deathDateVerified']

  if (deathDateVerified === 'verified') {
    res.redirect('death-br330-send')
  } else {
    res.redirect('death-date-awaiting-verification')
  }
})

router.post('/dap/death-br330-send', (req, res) => {
  req.session.data['showBanner'] = 'yes'

  const sendBr3330 = req.session.data['sendBr3330']
  if (sendBr3330 === 'yes') {
    req.session.data['br330Sent'] = 'yes'
  }

  res.redirect('record-personal')
})

router.post('/dap/death-date-awaiting-verification', (req, res) => {
  res.redirect('record-personal')
})


router.post('/dap/death-verify', (req, res) => {
  const deathDateVerified = req.session.data['deathDateVerified']

   if (deathDateVerified === 'verified') {
    res.redirect('death-verify-suggested')
  } else {
    res.redirect('record-personal')
  }
})

router.post('/dap/death-date-suggested', (req, res) => {
  const verifyDateOfDeathSuggestion = req.session.data['verifyDateOfDeathSuggestion']

  if (verifyDateOfDeathSuggestion === 'yes') {
    req.session.data['deathDateVerifiedLater'] = 'yes'
    req.session.data['deathDateVerified'] = 'verified'
    req.session.data['showBanner'] = 'yes'
    res.redirect('death-date-cya')
  } else {
    res.redirect('death-date')
  }
})

router.post('/dap/death-verify-date', (req, res) => {
  const representativeDetailsCollected = req.session.data['representativeDetailsCollected']

  if (representativeDetailsCollected === 'yes') {
    req.session.data['deathDateVerifiedLater'] = 'yes'
    req.session.data['deathDateVerified'] = 'verified'
    req.session.data['showBanner'] = 'yes'
    res.redirect('record-personal')
  } else {
    res.redirect('death-representative-name')
  }

})

router.post('/dap/death-representative-awaiting-name', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'name'
  req.session.data['representativeNameChanged'] = 'yes'
  res.redirect('death-representative-details')
})

router.post('/dap/death-representative-awaiting-phone', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'phone'
  req.session.data['representativePhoneChanged'] = 'yes'
  res.redirect('death-representative-details')
})

router.post('/dap/death-representative-awaiting-address', (req, res) => {
  res.redirect('death-representative-awaiting-address-found')
})

router.post('/dap/death-representative-awaiting-address-found', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'address'
  req.session.data['representativeAddressChanged'] = 'yes'
  req.session.data['updatedAddress'] = 'yes'
  res.redirect('death-representative-details')
})

router.post('/dap/death-representative-details', (req, res) => {
  req.session.data['showBanner'] = 'no  '
  req.session.data['awaitingBannerType'] = 'none'
})

router.post('/dap/death-payee-name', (req, res) => {
  res.redirect('death-payee-phone')
})

router.post('/dap/death-payee-phone', (req, res) => {
  res.redirect('death-payee-address')
})

router.post('/dap/death-payee-address', (req, res) => {
  res.redirect('death-payee-address-found')
})

router.post('/dap/death-payee-address-found', (req, res) => {
  req.session.data['updatedAddress'] = 'yes'
  res.redirect('death-payee-details')
})

router.post('/dap/death-payee-details', (req, res) => {
  res.redirect('death-payee-bank')
})

router.post('/dap/death-payee-bank', (req, res) => {
  req.session.data['paymentDetailsCollected'] = 'yes'
  res.redirect('death-payment')
})

router.post('/dap/death-payment', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-personal')
})

module.exports = router
