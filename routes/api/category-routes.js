const router = require('express').Router()
const sequelize = require('../../config/connection')
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

//GET: find all categories
router.get('/', (req, res) => {
  Category.findAll({
    attributes: [
      'id',
      'category_name'
      //do we need 'created_at'?
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})


//GET: find one category by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' })
        return
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
})

//POST: create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//PUT: update category by id
router.put('/:id', (req, res) => {
  Category.update(req.body.category_name, {
      where: {
        id: req.params.id
      }
    })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' })
      return
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//DELETE: delete category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router;
