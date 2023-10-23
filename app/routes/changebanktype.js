const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/whatislive2/changebanktype', function (req, res) {
  if (req.body.bankaccounttype === 'uk') {
    res.redirect('/whatislive2/change-bank')
  } else {
    res.redirect('/whatislive2/international-bank')
  }
})

// bank change with name check

router.post('/bank-name-check/iteration-1/changebanktype', function (req, res) {
  if (req.body['bank-account-type'] === 'uk') {
    res.redirect('/bank-name-check/iteration-1/bank-uk')
  } else {
    res.redirect('/bank-name-check/iteration-1/bank-international')
  }
})

router.post('/bank-name-check/iteration-1/bank-name', function (req, res) {
  if (req.body['bank-name'] === 'yes') {
    res.redirect('/bank-name-check/iteration-1/payment')
  } else {
    res.redirect('/bank-name-check/iteration-1/bank-uk')
  }
})

module.exports = router
