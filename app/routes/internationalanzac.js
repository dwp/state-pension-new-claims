const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Iteration 1

router.post('/international-task/anzac-iteration-1/award-improvement', function (req, res) {
  if (req.body.improvement === 'yes') {
    res.redirect('issue-letter')
  } else {
    res.redirect('no-improvement')
  }
})

router.post('/international-task/anzac-iteration-2/award-improvement', function (req, res) {
  if (req.body.improvement === 'yes') {
    res.redirect('issue-letter')
  } else {
    res.redirect('no-improvement')
  }
})

// CFN1282

router.post('/international-task/anzac-cfn1282-iteration-1/cfn-task', function (req, res) {
  if (req.body['cfn1282-returned'] === 'yes') {
    res.redirect('date-of-entry')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-send')
  } else {
    res.redirect('check-information')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/check-information', function (req, res) {
  if (req.body['calculateNew'] === 'yes') {
    res.redirect('calculate-anzac')
  } else {
    res.redirect('confirm-no-change')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/rf1-send', function (req, res) {
  if (req.body.rf1 === 'request') {
    res.redirect('rf1-hmrc')
  } else if (req.body.rf1 === 'received') {
    res.redirect('check-information')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/sp-increase', function (req, res) {
  if (req.body['sp-increase'] === 'yes') {
    res.redirect('review-award')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/calculate-anzac', function (req, res) {

  if (req.body['addsp1'] === '185.15') {
    res.redirect('enter-pp-anzac')
  } else {
    res.redirect('check-award-anzac')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/rf1-task', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('sp-increase')
  } else {
    res.redirect('rf1-hmrc')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/confirm-no-change', function (req, res) {
  res.redirect('get-a-task-2')
})

router.post('/international-task/anzac-cfn1282-iteration-1/enter-pp-anzac-routing', function (req, res) {
  res.redirect('check-award-anzac')
})

router.post('/international-task/anzac-cfn1282-iteration-1/rf1-task', function (req, res) {
  if (req.body['rf1-returned'] === 'yes') {
    res.redirect('sp-increase')
  } else {
    res.redirect('rf1-hmrc')
  }
})

router.post('/international-task/anzac-cfn1282-iteration-1/calculate-anzac', function (req, res) {

  if (req.body['addsp1'] === '185.15') {
    res.redirect('enter-pp-anzac')
  } else {
    res.redirect('check-award-anzac')
  }
})

// PENSION CREDIT

router.post('/pension-credit/anzac/pension-credit-decision-1', function (req, res) {
  if (req.body['pension-credit'] === 'yes') {
    res.redirect('pension-credit-details')
  } else {
    res.redirect('no-offset')
  }
})

module.exports = router

// CFN1282-current

router.post('/international-task/anzac-cfn1282-current/cfn-task', function (req, res) {
  if (req.body['cfn1282-returned'] === 'yes') {
    res.redirect('date-of-entry')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-current/date-of-entry', function (req, res) {
  if (req.body['date-of-entry'] === 'before') {
    res.redirect('rf1-send')
  } else {
    res.redirect('check-information')
  }
})

router.post('/international-task/anzac-cfn1282-current/check-information', function (req, res) {
  if (req.body['calculateNew'] === 'yes') {
    res.redirect('calculate-anzac')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-current/rf1-send', function (req, res) {
  if (req.body.rf1 === 'request') {
    res.redirect('rf1-hmrc')
  } else if (req.body.rf1 === 'received') {
    res.redirect('check-information')
  } else {
    res.redirect('get-a-task-2')
  }
})

router.post('/international-task/anzac-cfn1282-current/sp-increase', function (req, res) {
  if (req.body['sp-increase'] === 'yes') {
    res.redirect('review-award')
  } else {
    res.redirect('get-a-task-2')
  }
})

// Superannuation

router.post('/international-task/anzac-superannuation/check-information', function (req, res) {
  if (req.body['spAmount'] === 'yes') {
    res.redirect('post-cfn1282')
  } else {
    res.redirect('cannot-increase')
  }
})

router.post('/international-task/anzac-superannuation/returned-cfn1282', function (req, res) {
  if (req.body['cfn1282-returned'] === 'yes') {
    res.redirect('nzsa-question')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-superannuation/nzsa-question', function (req, res) {
  if (req.body['nzBenefit'] === 'yes') {
    res.redirect(' check-details-nz')
  } else {
    res.redirect('need-rf1')
  }
})

router.post('/international-task/anzac-superannuation/ check-details-nz', function (req, res) {
  if (req.body['requestWinz'] === 'yes') {
  res.redirect('winz-request')
  } else if (req.body['winz'] === 'winz') {
    res.redirect('winz-request')
  } else if (req.body['requestWinz'] === 'no') {
    res.redirect('need-rf1')
  } else if (req.body['winz'] === 'award') {
    res.redirect('need-rf1')
  }
})

router.post('/international-task/anzac-superannuation/winz-request-routing', function (req, res) {
  res.redirect('need-rf1')
})

router.post('/international-task/anzac-superannuation/need-rf1', function (req, res) {
  if (req.body['needRf1'] === 'yes') {
    res.redirect('rf1-send')
  } else {
    res.redirect('calculate-award')
  }
})

router.post('/international-task/anzac-superannuation/calculate-award', function (req, res) {
  if (req.body['change-award'] === 'yes') {
    res.redirect('change-award')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-superannuation/rf1-send', function (req, res) {
  if (req.body.rf1 === 'request') {
    res.redirect('rf1-hmrc')
  } else if (req.body.rf1 === 'received') {
    res.redirect('calculate-award')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-superannuation/winz-received', function (req, res) {
  if (req.body['winzReceived'] === 'yes') {
    res.redirect('upload')
  } else {
    res.redirect('dashboard-3')
  }
})

router.post('/international-task/anzac-superannuation/received-information', function (req, res) {
  if (req.body['receivedWinz'] === 'yes') {
    res.redirect('change-award')
  } else {
    res.redirect('winz-request-2')
  }
})

router.post('/international-task/anzac-superannuation/received-information-2', function (req, res) {
  if (req.body['receivedWinz2'] === 'yes') {
    res.redirect('change-award')
  } else {
    res.redirect('winz-request-2')
  }
})

// Frozen rate

router.post('/international-task/anzac-frozen-rate/check-information', function (req, res) {
  if (req.body['spAmount'] === 'yes') {
    res.redirect('post-cfn1282')
  } else {
    res.redirect('cannot-increase')
  }
})

router.post('/international-task/anzac-frozen-rate/returned-cfn1282', function (req, res) {
  if (req.body['cfn1282-returned'] === 'yes') {
    res.redirect('au-info')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-frozen-rate/au-info', function (req, res) {
  res.redirect('nz-info')
})

router.post('/international-task/anzac-frozen-rate/remove-country-au', function (req, res) {
  if (req.session.data['removeNz'] === 'yes' && req.body['removeAu'] === 'yes') {
    res.redirect('need-add-country')
  } else if (req.session.data['NZlivedFrom-day'] && req.body['removeAu'] === 'yes') {
    res.redirect('check-answers')
  } else if (req.session.data['NZlivedFrom-day'] && req.body['removeAu'] === 'no') {
    res.redirect('check-answers')
  } else if (req.body['removeAu'] === 'yes') {
    res.redirect('nz-info')
  } else if (req.body['removeAu'] === 'no') {
    res.redirect('au-info')
  }
})

router.post('/international-task/anzac-frozen-rate/nz-info', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/remove-country-nz', function (req, res) {
  if (req.session.data['removeAu'] === 'yes' && req.body['removeNz'] === 'yes') {
    res.redirect('need-add-country')
  } else if (req.session.data['AUlivedFrom-day'] && req.body['removeNz'] === 'yes') {
    res.redirect('check-answers')
  } else if (req.body['removeNz'] === 'yes') {
    res.redirect('check-answers')
  } else if (req.body['removeNz'] === 'no') {
    res.redirect('nz-info')
  }
})

router.post('/international-task/anzac-frozen-rate/need-add-country', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/check-answers', function (req, res) {
  if (req.session.data['AUlivedTo-year'] >= '2023') {
  res.redirect('date-returned')
  } else if (req.session.data['livedTo-year'] >= '2023') {
    res.redirect('date-returned')  
  } else if (req.session.data['CAlivedTo-year'] >= '2023') {
    res.redirect('date-returned')  
  } else if (req.session.data['NZlivedTo-year'] >= '2023') {
      res.redirect('date-returned')
  } else if (req.session.data['NZlivedTo-year'] < '2023') {
    res.redirect('nzsa-question')
  } else {
    res.redirect('need-rf1')
  }
})

router.post('/international-task/anzac-frozen-rate/what-date-routing', function (req, res) {
  res.redirect('need-rf1')
})

router.post('/international-task/anzac-frozen-rate/nzsa-question', function (req, res) {
  if (req.body['nzBenefit'] === 'yes') {
    res.redirect('check-details-nz')
  } else {
    res.redirect('need-rf1')
  }
})

router.post('/international-task/anzac-frozen-rate/check-details-nz', function (req, res) {
  if (req.body.winz === 'winz') {
    res.redirect('winz-request')
  } else if (req.body.winz === 'award') {
    res.redirect('need-rf1')
  } else if (req.body.requestWinz === 'yes') {
    res.redirect('winz-request')
  } else if (req.body.requestWinz === 'no') {
    res.redirect('need-rf1')
  }
})

router.post('/international-task/anzac-frozen-rate/winz-request-routing', function (req, res) {
  res.redirect('need-rf1')
})

router.post('/international-task/anzac-frozen-rate/change-country-au', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/change-country-ca', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/change-country-nz', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/remove-country-nz', function (req, res) {
  if ((req.session.data['removeAu'] === 'yes' && req.session.data['removeCa'] === 'yes') && req.body['removeNz'] === 'yes') {
    res.redirect('need-add-country')
   } else if (req.session.data['removeAu'] === 'yes' && req.body['removeNz'] === 'yes') {
    res.redirect('need-add-country')
  } else {
    res.redirect('check-answers')
  }
  })

router.post('/international-task/anzac-frozen-rate/date-returned', function (req, res) {
  if ((req.session.data['livedTo-year'] || req.session.data['AUlivedTo-year'] || req.session.data['NZlivedTo-year']) < req.body['dateReturned-year']) {
   res.redirect('can-you-provide-date')
  } else if (req.session.data['addCountry'] === 'New Zealand') {
    res.redirect('nzsa-question')
  } else if (req.session.data['removeNz'] === 'yes') {
    res.redirect('need-rf1')
 } else {
   res.redirect('nzsa-question')
 }
 })

router.post('/international-task/anzac-frozen-rate/can-you-provide-date', function (req, res) {
  if (req.session.data['dateReturned-year'] && req.body['calculateDate'] === 'yes') {
    res.redirect('date-apply-change')
  } else if (req.session.data['NZlivedTo-day'] && req.body['calculateDate'] === 'yes') {
    res.redirect('nzsa-question')
  } else if (req.body['calculateDate'] === 'yes') {
    res.redirect('need-rf1')
  } else if (req.body['calculateDate'] === 'no') {
    res.redirect('request-information')
  }
})

router.post('/international-task/anzac-frozen-rate/date-apply-change', function (req, res) {
   if (req.session.data['dateApply-year'] != req.session.data['dateReturned-year'])  {
    res.redirect('check-date')
  }  else if (req.session.data['receivedGsl'] === 'yes' && req.session.data['statutory'] === 'yes') {
    res.redirect('change-award')
  }  else if (req.session.data['receivedGsl'] === 'yes' && req.session.data['statutory'] === 'no') {
    res.redirect('calculate-award')
  }  else if (req.session.data['receivedGsl'] === 'yes' && (req.session.data['requestWinz'] === 'yes' || req.session.data['winz'] === 'winz')) {
    res.redirect('received-winz')
  }  else if (req.session.data['statutory'] === 'yes') {
    res.redirect('change-award')
  }  else if (req.session.data['statutory'] === 'no') {
    res.redirect('calculate-award')
  }  else if (req.session.data['requestWinz'] === 'yes' || req.session.data['winz'] === 'winz') {
    res.redirect('received-winz')
  }  else if (req.session.data['rf1'] === 'request' || req.session.data['rf1'] === 'requested') {
      res.redirect('rf1-task')
    }  else if (req.session.data['NZlivedTo-day']) {
      res.redirect('nzsa-question')
  }
})

router.post('/international-task/anzac-frozen-rate/check-date', function (req, res) {
  if (req.session.data['receivedGsl'] === 'yes' && req.session.data['requestWinz'] === 'yes' || req.session.data['winz'] === 'winz' && req.body['stillChange'] === 'yes') {
  res.redirect('received-winz')
  } else if (req.session.data['statutory'] === 'no' && req.body['stillChange'] === 'yes') {
  res.redirect('calculate-award')
  }  else if (req.session.data['receivedGsl']=== 'yes' && req.session.data['requestWinz'] === 'yes' || req.session.data['winz'] === 'winz') {
    res.redirect('received-winz')
  } else if (req.session.data['receivedGsl'] === 'yes' && req.session.data['requestWinz'] === 'yes' || req.session.data['winz'] === 'winz' && req.body['stillChange'] === 'yes') {
    res.redirect('received-winz')
  } else if (req.session.data['statutory'] === 'yes' && req.body['stillChange'] === 'yes') {
    res.redirect('change-award')
  } else if (req.session.data['receivedGsl'] === 'yes' && req.body['stillChange'] === 'yes') {
  res.redirect('calculate-award')
  } else if (req.session.data['receivedWinz'] === 'yes' && req.body['stillChange'] === 'yes') {
  res.redirect('calculate-award')
  } else if (req.session.data['requestWinz'] === 'yes' || req.session.data['winz'] === 'winz' && req.body['stillChange'] === 'yes') {
   res.redirect('received-winz')
  } else if (req.session.data['rf1'] === 'request' || req.session.data['rf1'] === 'requested' && req.body['stillChange'] === 'yes') {
    res.redirect('rf1-task')
  } else if (req.session.data['NZlivedTo-day'] && req.body['stillChange'] === 'yes') {
    res.redirect('nzsa-question')
  } else if (req.body['stillChange'] === 'no') {
    res.redirect('date-apply-change')
  } else {
    res.redirect('need-rf1')
  }
})

router.post('/international-task/anzac-frozen-rate/request-information', function (req, res) {
  if (req.session.data['NZlivedTo-year']) {
    res.redirect('nzsa-question')
  } else {
    res.redirect('need-rf1')
  }
})


router.post('/international-task/anzac-frozen-rate/need-rf1', function (req, res) {
   if ((req.session.data['winz'] === 'winz' || req.session.data['requestWinz'] === 'yes') && req.body['needRf1'] === 'no') {
    res.redirect('dashboard-2')
  } else if (req.session.data['winz'] === 'award' && req.body['needRf1'] === 'no') {
    res.redirect('change-award')
  } else if (req.session.data['calculateDate'] === 'no' && req.body['needRf1'] === 'no') {
    res.redirect('dashboard-2')
  } else if (req.body['needRf1'] === 'yes') {
    res.redirect('rf1-send')
  } else if (req.body['needRf1'] === 'no') {
    res.redirect('want-change-award')
  }
})

router.post('/international-task/anzac-frozen-rate/want-change-award', function (req, res) {
  if (req.body['change-award'] === 'yes') {
    res.redirect('how-many-anzac')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-frozen-rate/calculate-award', function (req, res) {
  res.redirect('how-many-anzac')
})

router.post('/international-task/anzac-frozen-rate/how-many-anzac', function (req, res) {
  res.redirect('change-award')
})

router.post('/international-task/anzac-frozen-rate/change-award', function (req, res) {
  res.redirect('upload')
})

router.post('/international-task/anzac-frozen-rate/rf1-send', function (req, res) {
  if (req.body.rf1 === 'request') {
    res.redirect('rf1-hmrc')
  } else if (req.body.rf1 === 'received') {
    res.redirect('want-change-award')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-frozen-rate/winz-received', function (req, res) {
  if (req.body['winzReceived'] === 'yes') {
    res.redirect('upload')
  } else {
    res.redirect('dashboard-3')
  }
})

router.post('/international-task/anzac-frozen-rate/received-information', function (req, res) {
  if (req.body['receivedWinz'] === 'yes') {
    res.redirect('change-award')
  } else {
    res.redirect('dashboard-3')
  }
})

router.post('/international-task/anzac-frozen-rate/received-winz', function (req, res) {
  if (req.body['receivedWinz'] === 'no') {
    res.redirect('urgent-winz')
  } else if (req.body['receivedWinz'] === 'yes') {
    res.redirect('did-claimant-get-sa')
  }
})

router.post('/international-task/anzac-frozen-rate/did-claimant-get-sa', function (req, res) {
  if ((req.session.data['rf1'] === 'request' || req.session.data['rf1'] === 'requested') && req.session.data['receivedGsl'] === 'yes' && req.session.data['receivedWinz'] === 'yes' && (req.body['statutory'] === 'yes' || req.body['statutory'] === 'no')) {
    res.redirect('rf1-task')
  } else if (req.session.data['receivedGsl'] === 'yes' && req.session.data['receivedWinz'] === 'yes' && (req.body['statutory'] === 'yes' || req.body['statutory'] === 'no')) {
    res.redirect('date-apply-change')
  } else if ((req.session.data['dateApply-day'] || req.session.data['stillChange'] === 'yes') && req.session.data['receivedWinz'] === 'yes' && req.body['statutory'] === 'no') {
    res.redirect('calculate-award')
  } else if (req.session.data['calculateDate'] === 'no' && req.body['statutory'] === 'yes') {
    res.redirect('received-gsl')
  } else if (req.session.data['calculateDate'] === 'no' && req.body['statutory'] === 'no') {
    res.redirect('received-gsl')
  } else if ((req.session.data['rf1'] === 'request' || req.session.data['rf1'] === 'requested') && req.session.data['receivedGsl'] === 'yes' && req.body['statutory'] === 'no') {
    res.redirect('received-gsl')
  } else if ((req.session.data['rf1'] === 'request' || req.session.data['rf1'] === 'requested') && req.body['statutory'] === 'no') {
    res.redirect('rf1-task')
  } else if (req.session.data['receivedGsl'] === 'yes' && req.body['statutory'] === 'no') {
    res.redirect('calculate-award')
  } else if (req.body['statutory'] === 'no') {
    res.redirect('calculate-award')
  } else if (req.body['statutory'] === 'yes') {
    res.redirect('change-award')
  }
})

router.post('/international-task/anzac-frozen-rate/urgent-winz', function (req, res) {
  res.redirect('record-lwa-details')
})

router.post('/international-task/anzac-frozen-rate/rf1-task', function (req, res) {
  if (req.session.data['receivedGsl'] === 'yes' && req.session.data['receivedWinz'] === 'yes' && req.body['rf1-returned'] === 'yes') {
    res.redirect('calculate-award')
  } else if (req.session.data['winz'] === 'winz' && req.body['rf1-returned'] === 'yes') {
    res.redirect('received-winz')
  } else if (req.session.data['calculateDate'] === 'no' && req.body['rf1-returned'] === 'yes') {
    res.redirect('received-gsl')

  } else if (req.body['rf1-returned'] === 'yes') {
    res.redirect('calculate-award')

  } else if (req.body['rf1-returned'] === 'no') {
    res.redirect('rf1-reminder')
  }
})

router.post('/international-task/anzac-frozen-rate/change-country-au', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/change-country-nz', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/add-country', function (req, res) {
  res.redirect('check-answers')
})


router.post('/international-task/anzac-frozen-rate/remove-country-ca', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/remove-country-nz', function (req, res) {
  res.redirect('check-answers')
})

router.post('/international-task/anzac-frozen-rate/received-gsl', function (req, res) {
  if ((req.session.data['winz'] === 'winz' || req.session.data['requestWinz'] === 'yes') && req.body['receivedGsl'] === 'yes') {
    res.redirect('received-winz')
  } else if ((req.session.data['rf1'] === 'request' || req.session.data['rf1'] === 'requested') && req.body['receivedGsl'] === 'yes') {
    res.redirect('rf1-task')
  } else if (req.body['receivedGsl'] === 'yes') {
    res.redirect('date-apply-change')
  } else {
    res.redirect('dashboard-2')
  }
})

router.post('/international-task/anzac-frozen-rate/rf1-hmrc', function (req, res) {
  res.redirect('dashboard-2')
})
