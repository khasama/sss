require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");

// var Request = require('tedious').Request
// var TYPES = require('tedious').TYPES;
// const connection = require("./src/configs/tedious.config");

app.disable("x-powered-by");

app.use("/public", express.static("./src/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    // store: new RedisStore({ client: clientRedis }),
    secret: process.env.SESION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

app.set("view engine", "ejs");
app.set("views", "./src/views");

// app.get('/all', async (req, res) => {
//     try {
//         const result = await pool.query("select * from LINKSERVER.sss.dbo.tb_staffs");
//         return res.status(200).json({ status: 'ok', data: result.recordset });
//     } catch (error) {
//         console.log(error);
//         return res.status(200).json({ status: 'error', msg: error.message });
//     }
// });

// app.get('/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const result = await pool.request()
//             .input('id', sql.Int, id)
//             .query("select * from tb_staffs where id = @id");
//         if (result.recordset.length > 0) {
//             return res.status(200).json({ status: 'ok', data: result.recordset[0] });
//         } else {
//             return res.status(200).json({ status: 'error', msg: 'not found' });
//         }
//     } catch (error) {
//         return res.status(200).json({ status: 'error', msg: error.message });
//     }
// });

// app.get('/', async (req, res) => {
//     try {
//         const result = await pool.query("select * from tb_staffs");
//         return res.status(200).json({ status: 'ok', data: result.recordset });
//     } catch (error) {
//         return res.status(200).json({ status: 'error', msg: error.message });
//     }
// });

app.use(require("./src/routes"));

module.exports = app;
