const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    order: ['category_name'],
  })
    .then((categoryData) => {
      res.json(categoryData);
    })
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id)
    .then((categoryData) => {
      res.json(categoryData);
    });
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((updatedCategory) => {
    res.json(updatedCategory);
  })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
// similar to put route, use .destroy command
});

module.exports = router;
