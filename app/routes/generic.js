const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/generic-task/check-details', function (req, res) {
  if (req.body['decision'] === 'more-info') {
    res.redirect('request-info-2')
  } else if (req.body['decision'] === 'adjust-award') {
    res.redirect('adjust-sp')
  } else if (req.body['decision'] === 'award-sp') {
    res.redirect('confirm-award')
  } else if (req.body['decision'] === 'claim-unsuccessful') {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/generic-task/check-details-2', function (req, res) {
  if (req.body['decision2'] === 'more-info2') {
    res.redirect('request-info-2')
  } else if (req.body['decision2'] === 'adjust-award2') {
    res.redirect('adjust-sp')
  } else if (req.body['decision2'] === 'award-sp2') {
    res.redirect('confirm-award')
  } else if (req.body['decision2'] === 'claim-unsuccessful2') {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/generic-task/request-info', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/request-info-2', (req, res) => {
  res.redirect('postpone')
})

router.post('/generic-task/postpone', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/select-option', function (req, res) {
  if (req.body['option'] === 'one') {
    res.redirect('check-details')
  } else {
    res.redirect('check-details-2')
  }
})

router.post('/generic-task/confirm-award', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/adjust-sp', (req, res) => {
  res.redirect('date-needed')
})

router.post('/generic-task/claim-unsuccessful', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/date-needed', (req, res) => {
  res.redirect('complete-task')
})

router.post('/generic-task/complete-task', (req, res) => {
  res.redirect('confirm-award')
})

// COEG

router.post('/generic-task/coeg/select-option-coeg', function (req, res) {
  if (req.body['option'] === 'one') {
    res.redirect('check-details-coeg')
  } else {
    res.redirect('check-details-coeg-2')
  }
})

router.post('/generic-task/coeg/check-details-coeg-1a', function (req, res) {
  if (req.body['decisionCOEG'] === 'awardCOEG') {
    res.redirect('award-calculated-coeg')
  } else if (req.body['decisionCOEG'] === 'postponeCOEG') {
    res.redirect('how-long-coeg')  
  } else if (req.body['decisionCOEG'] === 'sendCOEG') {
    res.redirect('send-letter-coeg')    
  }
})

router.post('/generic-task/coeg/check-details-coeg-1b', function (req, res) {
  if (req.body['decisionCOEG2'] === 'awardCOEG') {
    res.redirect('award-calculated-coeg')
  } else if (req.body['decisionCOEG2'] === 'postponeCOEG') {
    res.redirect('how-long-coeg-2')  
  } else if (req.body['decisionCOEG2'] === 'sendCOEG') {
    res.redirect('send-letter-coeg-2')    
  }
})

router.post('/generic-task/coeg/check-details-coeg-2a', function (req, res) {
  if (req.body['decisionCOEG3'] === 'awardCOEG') {
    res.redirect('award-calculated-coeg')
  } else if (req.body['decisionCOEG3'] === 'postponeCOEG') {
    res.redirect('how-long-coeg')  
  } else if (req.body['decisionCOEG3'] === 'sendCOEG') {
    res.redirect('send-letter-coeg')    
  }
})

router.post('/generic-task/coeg/check-details-coeg-2b', function (req, res) {
  if (req.body['decisionCOEG4'] === 'awardCOEG') {
    res.redirect('award-calculated-coeg')
  } else if (req.body['decisionCOEG4'] === 'postponeCOEG') {
    res.redirect('how-long-coeg-2')  
  } else if (req.body['decisionCOEG4'] === 'sendCOEG') {
    res.redirect('send-letter-coeg-2')    
  }
})

router.post('/generic-task/coeg/send-letter-coeg', function (req, res) {
  if (req.body['COEGpostpone'] === 'yes') {
    res.redirect('how-long-coeg')
  } else {
    res.redirect('task-queue-coeg-2')
  }
})

router.post('/generic-task/coeg/send-letter-coeg-2', function (req, res) {
  if (req.body['COEGpostpone2'] === 'yes') {
    res.redirect('how-long-coeg-2')
  } else {
    res.redirect('task-queue-coeg-2')
  }
})

router.post('/generic-task/coeg/award-calculated-coeg', (req, res) => {
  res.redirect('award-confirmed-coeg')
})

router.post('/generic-task/coeg/award-confirmed-coeg', (req, res) => {
  res.redirect('task-queue-coeg')
})

router.post('/generic-task/coeg/cannot-award', (req, res) => {
  res.redirect('check-details-coeg')
})

router.post('/generic-task/coeg/award-successful-coeg', (req, res) => {
  res.redirect('task-queue-coeg')
})

router.post('/generic-task/coeg/more-info-pc', (req, res) => {
  res.redirect('complete-br403')
})

router.post('/generic-task/coeg/complete-br403', (req, res) => {
  res.redirect('task-queue-coeg')
})

router.post('/generic-task/coeg/more-info-generic', (req, res) => {
  res.redirect('task-queue-coeg')
})

router.post('/generic-task/coeg/how-long-coeg', (req, res) => {
  res.redirect('postpone-coeg')
})

router.post('/generic-task/coeg/how-long-coeg-2', (req, res) => {
  res.redirect('postpone-coeg')
})

router.post('/generic-task/coeg/postpone-coeg', (req, res) => {
  res.redirect('task-queue-coeg')
})

module.exports = router
