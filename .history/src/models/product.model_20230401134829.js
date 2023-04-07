const pool = require("../configs/mssql.config");
const sql = require("mssql");
const slug = require("slug");
const ProductModel = {};

ProductModel.getAllProduct = async () => {
  try {
    const result = await pool.query(`
            select p.*, c.category from LINKSERVER.sss.dbo.tb_products p 
            inner join LINKSERVER.sss.dbo.tb_categories c
            on p.id_category = c.id
        `);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

ProductModel.getAllProductNotDelete = async () => {
  try {
    const result = await pool.query(`
            select * from LINKSERVER.sss.dbo.tb_products
            where deleted = 0
        `);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

ProductModel.getProductWithCategory = async (idCategory) => {
  try {
    const result = await pool.request().input("idCategory", sql.Int, idCategory)
      .query(`
                select p.*, c.category from LINKSERVER.sss.dbo.tb_products p 
                inner join LINKSERVER.sss.dbo.tb_categories c
                on p.id_category = c.id
                where c.id = @idCategory
            `);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

ProductModel.getProduct = async (id) => {
  try {
    const result = await pool.request().input("id", sql.Int, id).query(`
                select p.*, c.category from LINKSERVER.sss.dbo.tb_products p 
                inner join LINKSERVER.sss.dbo.tb_categories c
                on p.id_category = c.id
                where p.id = @id
            `);

    if (result.recordset.length > 0) return result.recordset[0];
    return false;
  } catch (error) {
    throw error;
  }
};

ProductModel.updateProduct = async (
  id,
  name,
  image,
  size,
  price,
  idCategory
) => {
  try {
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("name", sql.NVarChar, name)
      .input("slug", sql.NVarChar, slug(name))
      .input("image", sql.NVarChar, image)
      .input("size", sql.NVarChar, size)
      .input("price", sql.Int, price)
      .input("idCategory", sql.Int, idCategory).query(`
                update LINKSERVER.sss.dbo.tb_products
                set name = @name,
                    slug = @slug,
                    image = @image,
                    size = @size,
                    price = @price,
                    id_category = @idCategory
                where id = @id
            `);
    if (result.rowsAffected[0] > 0) return true;
    return false;
  } catch (error) {
    throw error;
  }
};

ProductModel.deleteProduct = async (id) => {
  try {
    const result = await pool.request().input("id", sql.Int, id).query(`
                update LINKSERVER.sss.dbo.tb_products
                set deleted = 1
                where id = @id;
            `);
    if (result.rowsAffected[0] > 0) return true;
    return false;
  } catch (error) {
    throw error;
  }
};

ProductModel.addProduct = async (name, image, size, price, idCategory) => {
  try {
    const result = await pool
      .request()
      .input("name", sql.NVarChar, name)
      .input("slug", sql.NVarChar, slug(name))
      .input("image", sql.NVarChar, image)
      .input("size", sql.NVarChar, size)
      .input("price", sql.Int, price)
      .input("idCategory", sql.Int, idCategory).query(`
                insert into LINKSERVER.sss.dbo.tb_products (name, slug, image, size, price, id_category, deleted) VALUES 
                (@name, @slug, @image, @size, @price, @idCategory, 0);
            `);
    if (result.rowsAffected[0] > 0) return true;
    return false;
  } catch (error) {
    throw error;
  }
};

module.exports = ProductModel;
