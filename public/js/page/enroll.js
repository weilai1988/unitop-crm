console.log('I am at enroll')
$('input[type=radio][name=recentTest]').change(function () {
    if (this.value === 'true') {
        $('.recent-test-details').show()
    } else {
        $('.recent-test-details').hide()
    }
})