const app = require("./app");
const PORT = `555${process.env.BRANCH || 0}`;
global.domain = process.env.NODE_ENV === 'production' ? process.env.DOMAIN : `http://localhost:${PORT}/`;

if (process.env.BRANCH) {
    app.listen(PORT, () => {
        console.log(`Server running port ${PORT}`);
    });
} else {
    console.log('need branch');
}
