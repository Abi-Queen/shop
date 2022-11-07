const router = require('express').Router()
const { Category, Product, ProductTag } = require('../../models')

//GET: find all categories
router.get('/', (req, res) => {
  Category.findAll({
    // attributes: ['id', 'category_name'],
    include: [Product]
    //   {
    //     model: Product,
    //     // attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    //     // through: ProductTag
    //   }
    // ]
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
    attributes: ['id', 'category_name'],
    include: [Product]
      // {
      //   model: Product,
      //   attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      //   through: ProductTag
      // }
    // ]
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
  Category.create(req.body)
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

//PUT: update category by id
router.put('/:id', (req, res) => {
  Category.update(req.body, {
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
