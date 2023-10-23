const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/debt/debt-start-date', function (req, res) {
  if (req.body.debtstartdate === 'manual-date') {
    res.redirect('debt-start-date-manual')
  } else {
    res.redirect('debt-details')
  }
})

router.post('/debt/debt-edit', function (req, res) {
  if (req.body['edit-remove-debt'] === 'remove') {
    res.redirect('remove-confirmation')
  } else {
    res.redirect('debt-start-date-manual')
  }
})

router.post('/debt/apply-debt', (req, res) => {
  res.redirect('/debt/confirm-debt')
})

router.post('/debt/debt-start-date-manual', (req, res) => {
  res.redirect('/debt/debt-details')
})

router.post('/debt/debt-details', (req, res) => {
  res.redirect('/debt/debt-end-date')
})

router.post('/debt/debt-end-date', (req, res) => {
  res.redirect('/debt/confirm-debt')
})

router.post('/debt/confirm-debt', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-updated')
  }
})

// Iteration two

router.post('/debt/iteration-2/debt-start-date', function (req, res) {
  if (req.body.debtstartdate === 'manual-date') {
    res.redirect('debt-start-date-manual')
  } else {
    res.redirect('debt-details')
  }
})

router.post('/debt/iteration-2/debt-edit', function (req, res) {
  if (req.body['edit-remove-debt'] === 'remove') {
    res.redirect('remove-confirmation')
  } else {
    res.redirect('apply-debt-edit')
  }
})

router.post('/debt/iteration-2/apply-debt', (req, res) => {
  res.redirect('/debt/iteration-2/confirm-debt')
})

router.post('/debt/iteration-2/apply-debt-edit', (req, res) => {
  res.redirect('/debt/iteration-2/confirm-debt-edit')
})

router.post('/debt/iteration-2/debt-start-date-manual', (req, res) => {
  res.redirect('/debt/iteration-2/debt-details')
})

router.post('/debt/iteration-2/debt-details', (req, res) => {
  res.redirect('/debt/iteration-2/debt-end-date')
})

router.post('/debt/iteration-2/debt-end-date', (req, res) => {
  res.redirect('/debt/iteration-2/confirm-debt')
})

router.post('/debt/iteration-2/confirm-debt', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-updated')
  }
})

router.post('/debt/iteration-2/confirm-debt-edit', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-debt-edited')
  }
})

// Iteration three

router.post('/debt/iteration-3/debt-start-date', function (req, res) {
  if (req.body.debtstartdate === 'manual-date') {
    res.redirect('debt-start-date-manual')
  } else {
    res.redirect('debt-details')
  }
})

router.post('/debt/iteration-3/debt-edit', function (req, res) {
  if (req.body['edit-remove-debt'] === 'remove') {
    res.redirect('remove-confirmation')
  } else {
    res.redirect('apply-debt-edit')
  }
})

router.post('/debt/iteration-3/apply-debt', (req, res) => {
  res.redirect('/debt/iteration-3/confirm-debt')
})

router.post('/debt/iteration-3/apply-debt-edit', (req, res) => {
  res.redirect('/debt/iteration-3/confirm-debt-edit')
})

router.post('/debt/iteration-3/debt-start-date-manual', (req, res) => {
  res.redirect('/debt/iteration-3/debt-details')
})

router.post('/debt/iteration-3/debt-details', (req, res) => {
  res.redirect('/debt/iteration-3/debt-end-date')
})

router.post('/debt/iteration-3/debt-end-date', (req, res) => {
  res.redirect('/debt/iteration-3/confirm-debt')
})

router.post('/debt/iteration-3/confirm-debt', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-updated')
  }
})

router.post('/debt/iteration-3/confirm-debt-edit', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-debt-edited')
  }
})

// Multiple deductions

router.post('/debt/multiple/debt-start-date', function (req, res) {
  if (req.body.debtstartdate === 'manual-date') {
    res.redirect('debt-start-date-manual')
  } else {
    res.redirect('debt-details')
  }
})

router.post('/debt/multiple/debt-edit', function (req, res) {
  if (req.body['edit-remove-debt'] === 'remove') {
    res.redirect('remove-confirmation')
  } else {
    res.redirect('apply-debt-edit')
  }
})

router.post('/debt/multiple/apply-debt', (req, res) => {
  res.redirect('/debt/multiple/confirm-debt')
})

router.post('/debt/multiple/apply-debt-2', (req, res) => {
  res.redirect('/debt/multiple/confirm-debt-multiple')
})

router.post('/debt/multiple/apply-debt-edit', (req, res) => {
  res.redirect('/debt/multiple/confirm-debt-edit')
})

router.post('/debt/multiple/debt-start-date-manual', (req, res) => {
  res.redirect('/debt/multiple/debt-details')
})

router.post('/debt/multiple/debt-details', (req, res) => {
  res.redirect('/debt/multiple/debt-end-date')
})

router.post('/debt/multiple/debt-end-date', (req, res) => {
  res.redirect('/debt/multiple/confirm-debt')
})

router.post('/debt/multiple/confirm-debt', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-updated')
  }
})

router.post('/debt/multiple/confirm-debt-edit', function (req, res) {
  if (req.session.data['edit-remove-debt'] === 'edit') {
    res.redirect('award-debt-edited')
  } else {
    res.redirect('award-debt-edited')
  }
})

//
router.post('/', (req, res) => {
  res.redirect('/')
})

module.exports = router
