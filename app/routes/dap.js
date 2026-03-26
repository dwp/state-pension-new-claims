const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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

// router.post('/dap/prison-suspend', (req, res) => {
//   const prisonSuspend = req.session.data['prisonSuspend']

//   if (prisonSuspend === 'yes') {
//     res.redirect('prison-entry-date')
//   } else {
//     res.redirect('record-personal')
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

// router.use((req, res, next) => {
//   if (req.path !== '/dap/record-personal') {
//     req.session.data['showBanner'] = 'no'
//   }
//   next()
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
