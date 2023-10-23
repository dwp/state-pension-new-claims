const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/widowstask/tasks-1', (req, res) => {
  res.redirect('/widowstask/widows-task-1')
})

router.post('/widowstask/widows-task-1', function (req, res) {
  if (req.body['claiming-sp'] === 'no') {
    res.redirect('/widowstask/entitlement')
  } else {
    res.redirect('/widowstask/widows-inheritance-1')
  }
})

router.post('/widowstask/entitlement', function (req, res) {
  if (req.body['entitled-to-inherited'] === 'no') {
    res.redirect('/widowstask/no-entitlement')
  } else {
    res.redirect('/widowstask/widows-inheritance-1')
  }
})

module.exports = router
