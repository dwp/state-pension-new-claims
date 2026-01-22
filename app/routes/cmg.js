const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/cmg/adjustment', (req, res) => {
  if (req.session.data['whatAdjustment'] == 'debt-recovery') {
    res.redirect('debt')
  } else {
    res.redirect('cmg-add-amount')
  }
})

router.post('/cmg/cmg-add-amount', (req, res) => {
  res.redirect('cmg-add-cya')
})

module.exports = router
