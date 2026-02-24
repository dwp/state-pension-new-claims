const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Iteration 1

router.post('/international-record/ra-iteration-1/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-hmrc')
  } else {
    res.redirect('liason-forms')
  }
})

router.post('/international-record/ra-iteration-1/rf1-returned', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('liason-forms-rf1')
  } else {
    res.redirect('lived-worked-details-rf1')
  }
})

// Iteration 2

router.post('/international-record/ra-iteration-2/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-hmrc')
  } else {
    res.redirect('liason-forms')
  }
})

router.post('/international-record/ra-iteration-2/enquiry-letter-returned', function (req, res) {
  if (req.body['enquiry-letter-returned'] === 'yes') {
    res.redirect('date-of-entry')
  } else {
    res.redirect('lived-worked-details')
  }
})

router.post('/international-record/ra-iteration-2/rf1-returned', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('liason-forms-rf1')
  } else {
    res.redirect('lived-worked-details-rf1')
  }
})

// Channel Islands

router.post('/international-task/ra-channel-islands/need-send', function (req, res) {
  if (req.body['needSend'] === 'yes') {
    res.redirect('did-claimant-join')
  } else {
    res.redirect('task-queue')
  }
})

router.post('/international-task/ra-channel-islands/which-countries', function(request, response) {

	var whichCountry = request.session.data['whichCountry']
	if (whichCountry.includes("none")){
		response.redirect("/international-task/ra-channel-islands/task-queue")
	} else {
		response.redirect("/international-task/ra-channel-islands/did-claimant-join")
	}
})

router.post('/international-task/ra-channel-islands/did-claimant-join', function (req, res) {
  if (req.body['rf1Needed'] === 'yes') {
    res.redirect('request-rf1')
  } else {
    res.redirect('confirm')
  }
})

router.post('/international-task/ra-channel-islands/confirm', (req, res) => {
  res.redirect('task-queue')
})

router.post('/international-task/ra-channel-islands/request-rf1', (req, res) => {
  res.redirect('task-queue')
})

router.post('/international-task/ra-channel-islands/returned-rf1', function (req, res) {
  if (req.body['rf1Returned'] === 'yes') {
    res.redirect('confirm')
  } else {
    res.redirect('task-queue')
  }
})

module.exports = router
