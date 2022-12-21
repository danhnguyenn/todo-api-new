const todoController = require('../controller/todosController');
const router = require('express').Router();

router.get('/', todoController.index);
router.post('/', todoController.create);
router.get('/:id', todoController.show);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.destroy);

module.exports = router;
