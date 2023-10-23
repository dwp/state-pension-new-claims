'use strict'

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/widows/iteration-3/task-details', function (req, res) {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
router.post('/widows/iteration-3/nino', function (req, res) {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
router.post('/widows/iteration-3/dom', function (req, res) {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
router.post('/widows/iteration-3/dob', function (req, res) {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
router.post('/widows/iteration-3/gender', function (req, res) {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
router.post('/widows/iteration-3/dod', function (req, res) {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
router.post('/widows/iteration-3/check-details-info-missing', function (req, res) {
  if (req.body.decision === 'more-info') {
    res.redirect('/widows/iteration-3/more-info-no-letter')
  } else if (req.body.decision === 'save-return') {
    res.redirect('/widows/iteration-3/get-a-task-2')
  } else if (req.body.decision === 'nothing-to-inherit') {
    res.redirect('/widows/iteration-3/nothing-to-inherit')
  } else if (req.body.decision === 'inheritable-amounts') {
    res.redirect('/widows/iteration-3/inheritable-amounts')
  } else {
    res.redirect('/widows/iteration-3/get-a-task-2')
  }
})
router.post('/widows/iteration-3/more-info-no-letter', function (req, res) {
  res.redirect('/widows/iteration-3/get-a-task-2')
})
router.post('/widows/iteration-3/nothing-to-inherit', function (req, res) {
  res.redirect('/widows/iteration-3/get-a-task-2')
})
router.post('/widows/iteration-3/award-without-inheritance', function (req, res) {
  res.redirect('/widows/iteration-3/get-a-task-2')
})
router.post('/widows/iteration-3/spouse-spa', function (req, res) {
  if (req.body['receiving-sp'] === 'yes') {
    res.redirect('/widows/iteration-3/check-details')
  } else {
    res.redirect('/widows/iteration-3/end-task-pscs')
  }
})
module.exports = router
