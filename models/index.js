// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });

// The last thing you need to do is to call the sync() method on the three models.
// await Student.sync();
// await Class.sync();
// await Enrollment.sync()

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
