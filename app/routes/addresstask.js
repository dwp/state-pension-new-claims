const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/addresstask/tasks-1', (req, res) => {
  res.redirect('/addresstask/address-task-1')
})

router.post('/addresstask/address-search-1', (req, res) => {
  res.redirect('/addresstask/address-search-results-1')
})

router.post('/addresstask/address-search-results-1', (req, res) => {
  res.redirect('/addresstask/tasks-2')
})

router.post('/addresstask/address-task-1', function (req, res) {
  if (req.body.address === 'Address not found') {
    res.redirect('address-search-1')
  } else {
    res.redirect('tasks-2')
  }
})

module.exports = router
