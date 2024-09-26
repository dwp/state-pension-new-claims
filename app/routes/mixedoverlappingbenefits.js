const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/mixed-overlapping-benefits/select-scenario', function (req, res) {
  if (req.body['chooseScenario'] === 'scenario4') {
    res.redirect('/mixed-overlapping-benefits/carers-allowance/enquiries')
  } else {
    res.redirect('/mixed-overlapping-benefits/war-pensions/enquiries')
  }
})

// WAR PENSION

router.post('/mixed-overlapping-benefits/war-pensions/war-pension-decision', function (req, res) {
  if (req.body['war-pension-decision'] === 'award-state-pension') {
    res.redirect('pscs')
  } else {
    res.redirect('more-information')
  }
})

// CARERS ALLOWANCE

router.post('/mixed-overlapping-benefits/carers-allowance/carers-allowance-decision-1', function (req, res) {
  if (req.body['carersAllowance'] === 'yes') {
    res.redirect('carers-allowance-details')
  } else {
    res.redirect('no-offset')
  }
})

// CARERS SUPPORT

router.post('/carers-support/iteration-1/carers-support-decision-1', function (req, res) {
  if (req.body['carers-allowance'] === 'yes') {
    res.redirect('carers-support-details')
  } else {
    res.redirect('no-offset')
  }
})

// PENSION CREDIT

router.post('/mixed-overlapping-benefits/pension-credit/pension-credit-decision-1', function (req, res) {
  if (req.body['pension-credit'] === 'yes') {
    res.redirect('pension-credit-details')
  } else {
    res.redirect('no-offset')
  }
})

router.post('/international-task/br403-part-b/pension-credit-decision-1', function (req, res) {
  if (req.body['pension-credit'] === 'yes') {
    res.redirect('pension-credit-details')
  } else {
    res.redirect('no-offset')
  }
})

module.exports = router
