const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/cmg/adjustment', (req, res) => {
  const whatAdjustment = req.session.data['whatAdjustment']
  const adjustmentAmountType = req.session.data['adjustmentAmountType']
  const confirmRemoval = req.session.data['confirmRemoval']

  if (whatAdjustment === 'debt-recovery') {
    res.redirect('debt')
  } else {
    if (!adjustmentAmountType || confirmRemoval === 'yes') {
      res.redirect('cmg-add-amount')
    } else {
      res.redirect('cmg-remove-or-change')
    }
  }
})

router.post('/cmg/cmg-add-amount', (req, res) => {
  req.session.data['confirmRemoval'] = 'no'
  res.redirect('cmg-add-cya')
})

router.post('/cmg/cmg-remove-or-change', (req, res) => {
  if (req.session.data['removeOrChange'] === 'changeCmg') {
    res.redirect('cmg-change')
  } else {
    res.redirect('cmg-remove')
  }
})

router.post('/cmg/cmg-change', (req, res) => {
  res.redirect('cmg-change-cya')
})

router.post('/cmg/cmg-remove', (req, res) => {
  res.redirect('record-award')
})

module.exports = router
