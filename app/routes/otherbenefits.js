const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// WAR PENSION

router.post('/war-pension/iteration-1/war-pension-decision', function (req, res) {
  if (req.body['war-pension-decision'] === 'yes') {
    res.redirect('pscs')
  } else {
    res.redirect('award-no-unsupp')
  }
})

// CARERS ALLOWANCE

router.post('/carers-allowance/iteration-1/carers-allowance-decision-1', function (req, res) {
  if (req.body['carers-allowance'] === 'yes') {
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

router.post('/pension-credit/iteration-1/pension-credit-decision-1', function (req, res) {
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
