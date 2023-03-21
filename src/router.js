const router =  require('nexo-npm-router');

router.from(() => {
    return {
        "/identity": "localhost:8000",
        "/identity/app": "localhost:9000",
        "/identity/app/scope": "localhost:9900",
    }
});

router.interval(1000);

router.onPublish(() => {

})

module.exports = router;

