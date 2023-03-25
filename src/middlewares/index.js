module.exports = {
    verifyAdmin: (req, res, next) => {
        const user = req.session.user;
        if (!user) {
            return res.redirect("/login");
        } else {
            next();
        }
    },
};
