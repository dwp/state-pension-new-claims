const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Conversions with PC

router.post('/widows/conversion-task-pc/task-details', (req, res) => {
  res.redirect('/widows/conversion-task-pc/check-details-info-missing')
})

router.post('/widows/conversion-task-pc/check-details-info-missing', function (req, res) {
  if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('/widows/conversion-task-pc/nothing-to-inherit')
  } else if (req.body.decision === 'save') {
    res.redirect('/widows/conversion-task-pc/get-a-task-return')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('/widows/conversion-task-pc/inheritable-amounts')
  } else {
    res.redirect('/widows/conversion-task-pc/more-info-letter')
  }
})

router.post('/widows/conversion-task-pc/dom', (req, res) => {
  res.redirect('/widows/conversion-task-pc/check-details-info-missing')
})

// Late claims

router.post('/widows/late-claim/task-details', (req, res) => {
  res.redirect('/widows/late-claim/srb')
})


router.post('/widows/late-claim/srb', function (req, res) {
  if (req.body['srb'] === 'yes') {
    res.redirect('get-a-task-2')
  } else {
    res.redirect('check-details-info-complete')
  }
})


router.post('/widows/late-claim/check-details-info-complete', function (req, res) {
  if (req.body['decision'] === 'nothing-to-inherit') {
    res.redirect('/widows/late-claim/nothing-to-inherit')
  } else if (req.body.decision === 'save') {
    res.redirect('/widows/late-claim/get-a-task-return')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('/widows/late-claim/inheritable-amounts')
  } else {
    res.redirect('/widows/late-claim/more-info-letter')
  }
})

module.exports = router
