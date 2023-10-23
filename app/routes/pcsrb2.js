const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/srb/pension-credit/pc-srb-2/review', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-details')
})

router.post('/srb/pension-credit/pc-srb-2/change-pp', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-award')
})

router.post('/srb/pension-credit/pc-srb-2/review-details', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-award')
})

router.post('/srb/pension-credit/pc-srb-2/change-date', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-award')
})

router.post('/srb/pension-credit/pc-srb-2/change-date2', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-award2')
})

router.post('/srb/pension-credit/pc-srb-2/change-pp2', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-award2')
})

router.post('/srb/pension-credit/pc-srb-2/review-award2', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/received-pension-credit')
})

router.post('/srb/pension-credit/pc-srb-2/change-nsp-2', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/review-award2')
})

router.post('/srb/pension-credit/pc-srb-2/review-award', (req, res) => {
  res.redirect('/srb/pension-credit/pc-srb-2/received-pension-credit')
})

router.post('/srb/pension-credit/pc-srb-2/received-pension-credit', (req, res) => {
  if (req.body['receiving-pc'] === 'citizen') {
    res.redirect('/srb/pension-credit/pc-srb-2/pc-review-task')
  } else if (req.body['receiving-pc'] === 'partner') {
    res.redirect('/srb/pension-credit/pc-srb-2/enter-partner-details')
  } else {
    res.redirect('/srb/pension-credit/pc-srb-2/confirm')
  }
})

module.exports = router
