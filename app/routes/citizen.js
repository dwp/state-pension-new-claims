const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Invite code or GOV.UK Verify

router.post('/citizen/confirm-identity', function (req, res) {
  if (req.body['confirm-identity'] === 'code') {
    res.redirect('your-details')
  } else {
    res.redirect('https://get-state-pension.service.gov.uk/verify')
  }
})

router.post('/citizen/delay-your-start-date-routing', function (req, res) {
  res.redirect('check-your-start-date')
})

router.post('/citizen/post-spa-routing', function (req, res) {
  res.redirect('prison')
})

router.post('/citizen/your-details-routing', function (req, res) {
  res.redirect('spa')
})

router.post('/citizen/spa-routing', (req, res) => {
  res.redirect('lived-abroad')
})

router.post('/citizen/check-your-start-date', function (req, res) {
  if (req.body['sign-in'] === 'yes') {
    res.redirect('prison')
  } else {
    res.redirect('delay-your-start-date')
  }
})

// Prison
router.post('/citizen/prison', (req, res) => {
  res.redirect('prison-date')
})

router.post('/citizen/prison-date', (req, res) => {
  res.redirect('/citizen/prison-date-leave')
})

router.post('/citizen/prison-date-leave', (req, res) => {
  res.redirect('/citizen/lived-abroad')
})

// Alt formats yes/no
router.post('/citizen/alt-formats', function (req, res) {
  if (req.body['alt-formats'] === 'yes') {
    res.redirect('alt-formats-choice')
  } else {
    res.redirect('payment-bank')
  }
})

// Lived abroad yes/no
router.post('/citizen/lived-abroad', function (req, res) {
  if (req.body['lived-abroad'] === 'yes') {
    res.redirect('countries-lived')
  } else {
    res.redirect('worked-abroad')
  }
})

router.post('/citizen/countries-lived-routing', function (req, res) {
    res.redirect('countries-lived-2')
  })

  router.post('/citizen/countries-lived-2-routing', function (req, res) {
    res.redirect('countries-lived-details')
  })

  router.post('/citizen/countries-lived-3-routing', function (req, res) {
    res.redirect('countries-lived-details')
  })

  router.post('/citizen/countries-lived-details-routing', function (req, res) {
    res.redirect('countries-lived-details-2')
  })

  router.post('/citizen/countries-lived-details-2-routing', function (req, res) {
    res.redirect('worked-abroad')
  })

  router.post('/citizen/countries-lived-details-3-routing', function (req, res) {
    res.redirect('worked-abroad')
  })

  router.post('/citizen/countries-worked-routing', function (req, res) {
    res.redirect('countries-worked-2')
  })

  router.post('/citizen/countries-worked-2-routing', function (req, res) {
    res.redirect('worked-abroad-details')
  })

  router.post('/citizen/countries-worked-3-routing', function (req, res) {
    res.redirect('worked-abroad-details')
  })

  router.post('/citizen/worked-abroad-details-routing', function (req, res) {
    res.redirect('worked-abroad-details-2')
  })

  router.post('/citizen/worked-abroad-details-2-routing', function (req, res) {
    res.redirect('eea-question-setup')
  })

  router.post('/citizen/worked-abroad-details-3-routing', function (req, res) {
    res.redirect('eea-question-setup')
  })

// Worked abroad yes/no
router.post('/citizen/worked-abroad', function (req, res) {
  if (req.body['worked-abroad'] === 'yes') {
    res.redirect('countries-worked')
  } else {
    res.redirect('marital-status')
  }
})

// which path
router.post('/citizen/eea-question-setup', function (req, res) {
  if (req.body['which-path'] === 'single-country') {
    res.redirect('eea-intro-single-3')
  } else {
    res.redirect('eea-intro-multi-1a')
  }
})

// EU pensions yes/no
router.post('/citizen/eea-intro-multi-1a', function (req, res) {
  if (req.body['EUpensions'] === 'yes') {
    res.redirect('eea-question-multi-check')
  } else {
    res.redirect('marital-status')
  }
})

router.post('/citizen/eea-intro-single-3-routing', function (req, res) {
  res.redirect('marital-status')
})

router.post('/citizen/eea-question-multi-check-routing', function (req, res) {
  res.redirect('marital-status')
})

// marital
router.post('/citizen/marital-status', function (req, res) {
  if (req.body.marital === 'married') {
    res.redirect('marital-details')
  } else if (req.body.marital === 'divorced') {
    res.redirect('marital-details-divorce')
  } else if (req.body.marital === 'civil') {
    res.redirect('marital-details-civil-partner')
  } else if (req.body.marital === 'dissolved') {
    res.redirect('marital-details-ex-civil-partner')
  } else if (req.body.marital === 'widowed') {
    res.redirect('marital-details-late-spouse')
  } else {
    res.redirect('/citizen/contact')
  }
})

router.post('/citizen/marital-details-divorce', (req, res) => {
  res.redirect('/citizen/ex-spouse-details')
})

router.post('/citizen/marital-details-late-spouse', (req, res) => {
  res.redirect('/citizen/late-spouse-details')
})

router.post('/citizen/marital-details', (req, res) => {
  res.redirect('/citizen/spouse-details')
})

router.post('/citizen/marital-details-ex-civil-partner', (req, res) => {
  res.redirect('/citizen/ex-civil-partner-details')
})

router.post('/citizen/marital-details-civil-partner', (req, res) => {
  res.redirect('/citizen/civil-partner-details')
})

router.post('/citizen/ex-spouse-details', (req, res) => {
  if (req.body['ex-spouse-name'] === 'Jane' && req.body['ex-spouse-surname'] === 'Smith') {
    res.redirect('confirm-ex-spouse')
  } else {
    res.redirect('contact')
  }
})

router.post('/citizen/confirm-ex-spouse', function(req, res) {
  if (req.body['exSpouseName'] === 'yes') {
    res.redirect('ex-spouse-details') 
  } else {
    res.redirect('contact') 
  }
})

router.post('/citizen/ex-civil-partner-details', (req, res) => {
  if (req.body['ex-civil-name'] === 'Jane' && req.body['ex-civil-surname'] === 'Smith') {
    res.redirect('confirm-ex-partner')
  } else {
    res.redirect('contact')
  }
})

router.post('/citizen/confirm-ex-partner', function(req, res) {
  if (req.body['exCivilName'] === 'yes') {
    res.redirect('ex-civil-partner-details') 
  } else {
    res.redirect('contact') 
  }
})

router.post('/citizen/civil-partner-details', (req, res) => {
  if (req.body['civil-name'] === 'Jane' && req.body['civil-surname'] === 'Smith') {
    res.redirect('confirm-civil-partner')
  } else {
    res.redirect('contact')
  }
})

router.post('/citizen/confirm-civil-partner', function(req, res) {
  if (req.body['civilName'] === 'yes') {
    res.redirect('civil-partner-details') 
  } else {
    res.redirect('contact') 
  }
})

router.post('/citizen/contact', (req, res) => {
  res.redirect('/citizen/alt-formats')
})

router.post('/citizen/spouse-details', function (req, res) {
  if (req.body['spouse-name'] === 'Jane' && req.body['spouse-surname'] === 'Smith') {
    res.redirect('confirm-spouse')
  } else {
    res.redirect('contact')
  }
})

router.post('/citizen/confirm-spouse', function(req, res) {
  if (req.body['spouseName'] === 'yes') {
    res.redirect('spouse-details') 
  } else {
    res.redirect('contact') 
  }
})

router.post('/citizen/late-spouse-details', function (req, res) {
  if (req.body['late-spouse-name'] === 'Jane' && req.body['late-spouse-surname'] === 'Smith') {
    res.redirect('confirm-widow')
  } else {
    res.redirect('contact')
  }
})

router.post('/citizen/confirm-widow', function(req, res) {
  if (req.body['lateSpouseName'] === 'yes') {
    res.redirect('late-spouse-details') 
  } else {
    res.redirect('contact') 
  }
})

// Alt formats yes/no
router.post('/citizen/alt-formats', function (req, res) {
  if (req.body['alt-formats'] === 'yes') {
    res.redirect('alt-formats-choice')
  } else {
    res.redirect('payment-bank')
  }
})

router.post('/citizen/alt-formats-choice', (req, res) => {
  res.redirect('/citizen/payment-bank')
})

router.post('/citizen/payment-bank', (req, res) => {
  res.redirect('/citizen/check-answers')
})

router.post('/citizen/check-successful', (req, res) => {
  res.redirect('/citizen/check-answers')
})

router.post('/citizen/check-failed', (req, res) => {
  res.redirect('/citizen/check-answers')
})

router.post('/citizen/check-answers-routing', (req, res) => {
  res.redirect('declaration')
})

router.post('/citizen/check-answers-2-routing', (req, res) => {
  res.redirect('declaration')
})

router.post('/citizen/declaration', (req, res) => {
  res.redirect('/citizen/complete')
})

// Alt formats yes/no
router.post('/citizen/question-3', function (req, res) {
  if (req.body['security-question-three'] === '10000') {
    res.redirect('check-successful')
  } else {
    res.redirect('check-failed')
  }
})

router.post('/citizen/payment-bank-routing', (req, res) => {
  res.redirect('/citizen/check-answers-2')
})

module.exports = router
