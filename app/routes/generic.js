const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/generic-task/check-details-2a', function (req, res) {
  if (req.body['continue'] === 'adjust') {
    res.redirect('adjust-sp')
  } else if (req.body['continue'] === 'award') {
    res.redirect('award-calculated')
  } else if (req.body['continue'] === 'close') {
    res.redirect('close')
  } else if (req.body['continue'] === 'postpone') {
    res.redirect('how-long')
  } else if (req.body['continue'] === 'remove') {
    res.redirect('remove')
  } else if (req.body['continue'] === 'unsuccessful') {
    res.redirect('unsuccessful')
  } else if (req.body['continue'] === 'info') {
    res.redirect('send')      
  }
})

router.post('/generic-task/check-details-2b', function (req, res) {
  if (req.body['continue2'] === 'adjust') {
    res.redirect('adjust-sp')
  } else if (req.body['continue2'] === 'award') {
    res.redirect('award-calculated')
  } else if (req.body['continue2'] === 'close') {
    res.redirect('close')
  } else if (req.body['continue2'] === 'postpone') {
    res.redirect('how-long-2')
  } else if (req.body['continue2'] === 'remove') {
    res.redirect('remove')
  } else if (req.body['continue2'] === 'unsuccessful') {
    res.redirect('unsuccessful')
  } else if (req.body['continue2'] === 'info') {
    res.redirect('send-2')      
  }
})

router.post('/generic-task/check-details-2', function (req, res) {
  if (req.body['decision2'] === 'more-info2') {
    res.redirect('send-info-2')
  } else if (req.body['decision2'] === 'adjust-award2') {
    res.redirect('adjust-sp')
  } else if (req.body['decision2'] === 'award-sp2') {
    res.redirect('confirm-award')
  } else if (req.body['decision2'] === 'claim-unsuccessful2') {
    res.redirect('claim-unsuccessful')
  }
})

router.post('/generic-task/how-long', (req, res) => {
  res.redirect('task-postponed')
})

router.post('/generic-task/how-long-2', (req, res) => {
  res.redirect('task-postponed')
})

router.post('/generic-task/send-info', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/send-info-2', (req, res) => {
  res.redirect('postpone')
})

router.post('/generic-task/task-postponed', (req, res) => {
  res.redirect('task-queue-2')
})

router.post('/generic-task/remove', function (req, res) {
  if (req.body['remove'] === 'yes') {
    res.redirect('task-queue-2')
  } else {
    res.redirect('check-details-2b')
  }
})

router.post('/generic-task/unsuccessful', function (req, res) {
  if (req.body['unsuccessful'] === 'yes') {
    res.redirect('claim-unsuccessful')
  } else {
    res.redirect('check-details-2b')
  }
})

router.post('/generic-task/claim-unsuccessful', (req, res) => {
  res.redirect('task-queue-2')
})

router.post('/generic-task/send', function (req, res) {
  if (req.body['generalPostpone'] === 'yes') {
    res.redirect('how-long')
  } else {
    res.redirect('check-details-2b')
  }
})

router.post('/generic-task/send-2', function (req, res) {
  if (req.body['generalPostpone2'] === 'yes') {
    res.redirect('how-long-2')
  } else {
    res.redirect('check-details-2b')
  }
})

router.post('/generic-task/select-option', function (req, res) {
  if (req.body['option'] === 'one') {
    res.redirect('check-details')
  } else {
    res.redirect('check-details-2')
  }
})

router.post('/generic-task/claim-removed', (req, res) => {
  res.redirect('task-queue-2')
})

router.post('/generic-task/confirm-award', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/adjust-sp', (req, res) => {
  res.redirect('what-date')
})

router.post('/generic-task/claim-unsuccessful', (req, res) => {
  res.redirect('task-queue')
})

router.post('/generic-task/what-date', (req, res) => {
  res.redirect('complete-task')
})

router.post('/generic-task/complete-task', (req, res) => {
  res.redirect('award-calculated')
})

router.post('/generic-task/award-calculated', (req, res) => {
  res.redirect('award-confirmed')
})

router.post('/generic-task/award-confirmed', (req, res) => {
  res.redirect('task-queue-2')
})

router.post('/generic-task/close', function (req, res) {
  if (req.body['close'] === 'yes') {
    res.redirect('claim-closed')
  } else {
    res.redirect('check-details-2a')
  }
})

router.post('/generic-task/claim-closed', (req, res) => {
  res.redirect('task-queue-2')
})

// COEG

router.post('/generic-task/coeg/select-option-coeg', function (req, res) {
  if (req.body['option'] === 'one') {
    res.redirect('check-details-coeg')
  } else {
    res.redirect('check-details-coeg-2')
  }
})

router.post('/generic-task/coeg/check-details-coeg-2a', function (req, res) {
  if (req.body['decisionCOEG3'] === 'awardCOEG') {
    res.redirect('which-scenario')
  } else if (req.body['decisionCOEG3'] === 'postponeCOEG') {
    res.redirect('how-long-coeg')  
  } else if (req.body['decisionCOEG3'] === 'sendCOEG') {
    res.redirect('send-letter-coeg')    
  }
})

router.post('/generic-task/coeg/check-details-coeg-2b', function (req, res) {
  if (req.body['decisionCOEG4'] === 'awardCOEG') {
    res.redirect('which-scenario')
  } else if (req.body['decisionCOEG4'] === 'postponeCOEG') {
    res.redirect('how-long-coeg-2')  
  } else if (req.body['decisionCOEG4'] === 'sendCOEG') {
    res.redirect('send-letter-coeg-2')    
  }
})

router.post('/generic-task/coeg/which-scenario', function (req, res) {
  if (req.body['whichScenario'] === 'flag') {
    res.redirect('cannot-award')
  } else if (req.body['whichScenario'] === 'award') {
    res.redirect('award-calculated-coeg')  
  } else if (req.body['whichScenario'] === 'further') {
    res.redirect('more-info-generic')  
  } else if (req.body['whichScenario'] === 'pensionCredit') {
    res.redirect('complete-br403')    
  }
})

router.post('/generic-task/coeg/send-letter-coeg', function (req, res) {
  res.redirect('how-long-coeg')
})

router.post('/generic-task/coeg/send-letter-coeg-2', function (req, res) {
  res.redirect('how-long-coeg-2')
})

router.post('/generic-task/coeg/award-calculated-coeg', (req, res) => {
  res.redirect('award-confirmed-coeg')
})

router.post('/generic-task/coeg/award-confirmed-coeg', (req, res) => {
  res.redirect('task-queue-coeg')
})

router.post('/generic-task/coeg/cannot-award', (req, res) => {
  res.redirect('check-details-coeg-2b')
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

// NVDOB



module.exports = router
