define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'test doubleclick functionality',
        // 'test singleclick (before doubleclick test)': function () {
        //     return this.remote
        //         .get(require.toUrl('index.html'))
        //         .findById('bar')
        //         .sleep(2000)
        //         .click()
        //         .end()
        //         .sleep(2000)
        //         .findById('click-fired')
        //         .getVisibleText()
        //         .then(function(text) {
        //             assert.equal(text, 'Click Fired');
        //         });
        // },
        'test doubleclick': function () {
            return this.remote
                .get(require.toUrl('index.html'))
                .findById('foo')
                .sleep(2000)
                .doubleClick()
                .end()
                .sleep(2000)
                .findById('double-click-fired')
                .getVisibleText()
                .then(function(text) {
                    assert.equal(text, 'Double Click Fired');
                });
        },
        'test singleclick (after doubleclick test)': function () {
            return this.remote
                .get(require.toUrl('index.html'))
                .findById('bar')
                .sleep(2000)
                .click()
                .end()
                .sleep(2000)
                .findById('click-fired')
                .getVisibleText()
                .then(function(text) {
                    assert.equal(text, 'Click Fired');
                });
        }
    });
});