const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/cmg/adjustment', (req, res) => {
  const whatAdjustment = req.session.data['whatAdjustment']
  const adjustmentAmount = req.session.data['adjustmentAmount']
  if (whatAdjustment === 'debt-recovery') {
    res.redirect('debt')
  } else {
    if (!adjustmentAmount || adjustmentAmount === 'removed') {
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
    req.session.data['showExistingAmount'] = 'no'
    res.redirect('cmg-change')
  } else {
    res.redirect('cmg-remove')
  }
})

router.post('/cmg/cmg-change', (req, res) => {
  req.session.data['adjustmentAmount'] = 'other'
  req.session.data['showExistingAmount'] = 'yes'
  res.redirect('cmg-change-cya')
})

router.post('/cmg/cmg-remove', (req, res) => {
  const confirm = req.session.data['confirmRemoval']
  if (confirm === 'yes') {
    req.session.data['adjustmentAmount'] = 'removed'
    res.redirect('record-award')
  } else {
    res.redirect('record-award')
  }
})

module.exports = router
