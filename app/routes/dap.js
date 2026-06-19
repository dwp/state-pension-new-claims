const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  const pagesWithBanners = ['/dap/record-personal', '/dap/death-payee-details'];

  if (!pagesWithBanners.includes(req.path)) {
    req.session.data['showBanner'] = 'no'
  }

  if (req.path === '/dap/record-personal') {
    req.session.data['postBr330'] = 'no'
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
  const deathDateVerified = req.session.data['deathDateVerified']

  if (deathDateVerified !== 'verified') {
    req.session.data['startedAsNotVerified'] = 'yes'
  }

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
  const deathDateVerified = req.session.data['deathDateVerified']
  const finalPayment = req.session.data['finalPayment']
  const noArrearsOwed = finalPayment === 'nothing-due' || finalPayment === 'overpayment'
  const representativeDetailsCollected = req.session.data['representativeDetailsCollected'] === 'yes'
  const hasStartedAsNotVerified = req.session.data['startedAsNotVerified'] === 'yes'

  req.session.data['deathConfirmed'] = 'yes'

  if (deathDateVerified === 'verified') {
    req.session.data['deathStatus'] = 'verified'

    if (hasStartedAsNotVerified) {
      res.redirect('death-calculation')
    } else if (noArrearsOwed && representativeDetailsCollected) {
      req.session.data['showBanner'] = 'yes'
      res.redirect('record-personal')
    } else {
      res.redirect('death-calculation')
    }
  } else {
    req.session.data['deathStatus'] = 'not-verified'
    res.redirect('death-representative-have-details')
  }
})

router.post('/dap/death-calculation', (req, res) => {
  const representativeDetailsCollected = req.session.data['representativeDetailsCollected'] === 'yes'
  const finalPayment = req.session.data['finalPayment']
  const noArrearsOwed = finalPayment === 'nothing-due' || finalPayment === 'overpayment'

  if (representativeDetailsCollected) {
    if (noArrearsOwed) {
      req.session.data['showBanner'] = 'yes'
      res.redirect('record-personal')
    } else {
      res.redirect('death-br330-send')
    }
  } else {
    res.redirect('death-representative-have-details')
  }
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
  req.session.data['representativeRefSet'] = 'yes'
  res.redirect('death-representative-phone')
})

router.post('/dap/death-representative-phone', (req, res) => {
  const hasPhone = req.session.data['hasRepresentativePhone']

  if (hasPhone === 'yes') {
    req.session.data['representativePhoneSet'] = 'yes'
  } else {
    req.session.data['representativePhoneSet'] = 'no'
  }

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
  const finalPayment = req.session.data['finalPayment']
    const noArrearsOwed = finalPayment === 'nothing-due' || finalPayment === 'overpayment'

  if (deathDateVerified === 'verified') {
    req.session.data['deathStatus'] = 'verified'
    req.session.data['dapCollectedLater'] = 'yes'

    if (noArrearsOwed) {
      res.redirect('record-personal')
    } else {
      res.redirect('death-br330-send')
    }
  } else {
    req.session.data['deathStatus'] = 'not-verified'
    res.redirect('death-date-awaiting-verification')
  }
})


router.post('/dap/death-br330-send', (req, res) => {
  req.session.data['showBanner'] = 'yes'

  const sendBr330 = req.session.data['sendBr330']
  if (sendBr330 === 'yes') {
    req.session.data['br330Sent'] = 'yes'
  }

  res.redirect('record-personal')
})

router.post('/dap/death-date-awaiting-verification', (req, res) => {
  req.session.data['showBanner'] = 'yes'
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

router.post('/dap/death-payee-name', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'name'
  req.session.data['representativeNameChanged'] = 'yes'
  res.redirect('death-payee-details')
})

router.post('/dap/death-payee-reference', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'reference'

  const referenceInput = req.session.data['solicitorsReference']

  if (!referenceInput || referenceInput.trim() === '') {
    req.session.data['solicitorsReference'] = ''
    req.session.data['hasSolicitorsReference'] = 'no'
    req.session.data['solicitorsReferenceRemoved'] = 'yes'
  }
  else if (req.session.data['hasSolicitorsReference'] === 'no') {
    req.session.data['solicitorsReferenceAdded'] = 'yes'
    req.session.data['hasSolicitorsReference'] = 'yes'
  }
  else {
    req.session.data['solicitorsReferenceChanged'] = 'yes'
    req.session.data['hasSolicitorsReference'] = 'yes'
  }

  req.session.data['representativeRefSet'] = 'yes'
  res.redirect('death-payee-details')
})

router.post('/dap/death-payee-phone', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'phone'

  const phoneInput = req.session.data['representativePhone']

  if (!phoneInput || phoneInput.trim() === '') {
    req.session.data['representativePhone'] = ''
    req.session.data['hasRepresentativePhone'] = 'no'
    req.session.data['representativePhoneRemoved'] = 'yes'
  }
  else if (req.session.data['hasRepresentativePhone'] === 'no') {
    req.session.data['representativePhoneAdded'] = 'yes'
    req.session.data['hasRepresentativePhone'] = 'yes'
  }
  else {
    req.session.data['representativePhoneChanged'] = 'yes'
    req.session.data['hasRepresentativePhone'] = 'yes'
  }

  req.session.data['representativePhoneSet'] = 'yes'
  res.redirect('death-payee-details')
})

router.post('/dap/death-payee-address', (req, res) => {
  res.redirect('death-payee-address-found')
})

router.post('/dap/death-payee-address-found', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['awaitingBannerType'] = 'address'
  req.session.data['representativeAddressChanged'] = 'yes'
  req.session.data['updatedAddress'] = 'yes'
  res.redirect('death-payee-details')
})

router.post('/dap/death-br330-send-new', (req, res) => {

  const sendNewBr330 = req.session.data['sendNewBr330']
  if (sendNewBr330 === 'yes') {
    req.session.data['showBanner'] = 'yes'
    req.session.data['awaitingBannerType'] = 'br330'
    req.session.data['br330Sent'] = 'yes'
    req.session.data['newBr330Sent'] = 'yes'
  }

  res.redirect('death-payee-details')
})

router.post('/dap/death-payee-bank', (req, res) => {
  res.redirect('death-payee-bank-cya')
})

router.post('/dap/death-payee-bank-cya', (req, res) => {
  req.session.data['paymentDetailsCollected'] = 'yes'
  res.redirect('death-payment')
})

router.post('/dap/death-payment', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  res.redirect('record-personal')
})

module.exports = router
