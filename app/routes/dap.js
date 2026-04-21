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
  res.redirect('death-representative-name')
})

router.post('/dap/death-representative-name', (req, res) => {
  res.redirect('death-representative-phone')
})

router.post('/dap/set-details-unknown', function (req, res) {
  // Lives on /dap/death-representative-name
  req.session.data['deathFirstPassDone'] = 'yes'
  req.session.data['showBanner'] = 'yes'
  res.redirect('/dap/record-personal')
})

router.post('/dap/death-representative-phone', (req, res) => {
  res.redirect('death-representative-address')
})

router.post('/dap/death-representative-address', (req, res) => {
  res.redirect('death-representative-address-found')
})

router.post('/dap/death-representative-address-found', (req, res) => {
  res.redirect('death-final')
})

router.post('/dap/death-final', (req, res) => {
  res.redirect('death-representative-cya')
})

router.post('/dap/death-representative-cya', (req, res) => {
  req.session.data['representativeDetailsCollected'] = 'yes'
  req.session.data['deathFirstPassDone'] = 'yes'
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

router.post('/dap/death-verify-suggested', (req, res) => {
  const verifyDateOfDeathSuggestion = req.session.data['verifyDateOfDeathSuggestion']

  if (verifyDateOfDeathSuggestion === 'yes') {
    req.session.data['deathDateVerifiedLater'] = 'yes'
    req.session.data['deathDateVerified'] = 'verified'
    req.session.data['showBanner'] = 'yes'
    res.redirect('record-personal')
  } else {
    res.redirect('death-verify-date')
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

// router.post('/dap/prison-type', (req, res) => {
//   const prisonType = req.session.data['prisonType']

//   if (prisonType === 'criminal') {
//     res.redirect('prison-entry-date')
//   } else if (prisonType === 'civil') {
//     res.redirect('prison-type-civil')
//   } else {
//     res.redirect('prison-suspend')
//   }
// })


// router.post('/dap/prison-entry-date', (req, res) => {
//   const isChanging = req.query.change === 'true'

//   if (isChanging) {
//     res.redirect('prison-entry-cya')
//   } else {
//     res.redirect('prison-entry-cya')
//   }
// })


// router.post('/dap/prison-entry-cya', (req, res) => {
//   req.session.data['isSuspended'] = 'yes'
//   req.session.data['showBanner'] = 'yes'
//   res.redirect('record-personal')
// })

// router.post('/dap/prison-type-civil', (req, res) => {
//   req.session.data['isCivil'] = 'yes'
//   res.redirect('record-personal')
// })

// router.post('/dap/prison-details-check', (req, res) => {
//   res.redirect('prison-leave-date')
// })

// router.post('/dap/prison-leave-date', (req, res) => {
//   res.redirect('dap')
// })

// router.post('/dap/dap', (req, res) => {
//   res.redirect('prison-leave-cya')
// })

// router.post('/dap/prison-leave-cya', (req, res) => {

//   const prisonConvicted = req.session.data['prisonConvicted']

//   if (prisonConvicted === 'yes') {
//     res.redirect('prison-overpayment')
//   } else {
//     res.redirect('prison-refund')
//   }
// })

// router.post('/dap/prison-refund', (req, res) => {
//   req.session.data['isRestarted'] = 'yes'
//   req.session.data['showBanner'] = 'yes'
//   res.redirect('record-personal')
// })

// router.post('/dap/prison-overpayment', (req, res) => {
//   const prisonOverpay = req.session.data['prisonOverpay']

//   if (prisonOverpay === 'yes') {
//     res.redirect('prison-overpayment-info')
//   } else {
//     res.redirect('record-personal')
//   }
// })

// router.post('/dap/prison-overpayment-info', (req, res) => {
//   req.session.data['isRestarted'] = 'yes'
//   req.session.data['showBanner'] = 'yes'

//   res.redirect('record-personal')
// })

module.exports = router
