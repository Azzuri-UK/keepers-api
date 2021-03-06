let express = require('express');
let router = express.Router();
let loot = require('./loot');
let raids = require('./raids');
let roster = require('./roster');
let items = require('./items');
let crafting = require('./crafting');
let bis = require('./bis');
let auth = require('./auth');
let recruitment = require('./recruitment');
let lists = require('./lists');
let bank = require('./bank');
let groups = require('./groups');

let middleware = require('./middleware');

router.use('/loot',middleware.checkToken,loot);
router.use('/raids',middleware.checkToken,raids);
router.use('/roster',middleware.checkToken,roster);
router.use('/items',middleware.checkToken,items);
router.use('/crafting',middleware.checkToken,crafting);
router.use('/bis',middleware.checkToken,bis);
router.use('/recruitment',recruitment);
router.use('/auth',auth);
router.use('/lists',lists);
router.use('/bank',bank);
router.use('/groups',groups)
module.exports = router;
