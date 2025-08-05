const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/widows/iteration-2/task-details', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})

router.post('/widows/iteration-2/nino', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})

router.post('/widows/iteration-2/dom', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing-2')
})

router.post('/widows/iteration-2/dob', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})

router.post('/widows/iteration-2/gender', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})

router.post('/widows/iteration-2/dod', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})

router.post('/widows/iteration-2/check-details-info-missing', function (req, res) {
  if (req.body.decision === 'more-info') {
    res.redirect('/widows/iteration-2/more-info-letter')
  } else if (req.body.decision === 'save-return') {
    res.redirect('/widows/iteration-2/save-and-return')
  } else if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('/widows/iteration-2/nothing-to-inherit')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('/widows/iteration-2/inheritable-amounts')
  } else {
    res.redirect('/widows/iteration-2/get-a-task-2')
  }
})

router.post('/widows/iteration-2/check-details-info-missing-2', function (req, res) {
  if (req.body.decision === 'more-info') {
    res.redirect('/widows/iteration-2/more-info-letter')
  } else if (req.body.decision === 'save-return') {
    res.redirect('/widows/iteration-2/save-and-return')
  } else if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('/widows/iteration-2/nothing-to-inherit')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('/widows/iteration-2/inheritable-amounts')
  } else {
    res.redirect('/widows/iteration-2/get-a-task-2')
  }
})

router.post('/widows/iteration-2/more-info-letter', (req, res) => {
  res.redirect('/widows/iteration-2/get-a-task-2')
})

router.post('/widows/iteration-2/nothing-to-inherit', (req, res) => {
  res.redirect('/widows/iteration-2/get-a-task-2')
})

router.post('/widows/iteration-2/award-without-inheritance', (req, res) => {
  res.redirect('/widows/iteration-2/get-a-task-2')
})

router.post('/widows/iteration-2/spouse-spa', function (req, res) {
  if (req.body['receiving-sp'] === 'yes') {
    res.redirect('/widows/iteration-2/check-details')
  } else {
    res.redirect('/widows/iteration-2/end-task-pscs')
  }
})

router.post('/widows/iteration-2/refer-case', function (req, res) {
  if (req.body['sendSpouse'] === 'no') {
    res.redirect('/widows/iteration-2/new-task')
  } else {
    res.redirect('/widows/iteration-2/get-a-task-2')
  }
})

router.post('/widows/iteration-2/new-task', (req, res) => {
  res.redirect('/widows/iteration-2/get-a-task-2')
})

module.exports = router
