module.exports = {
    verifyLogin: (req, res, next) => {
        const user = req.session.user;
        if (!user) {
            return res.redirect("/login");
        } else {
            next();
        }
    },
    verifyRole: (listRoleAllow) => {
        return (req, res, next) => {
            const user = req.session.user;
            if (!user) {
                return res.redirect('/login');
            }

            if (listRoleAllow.includes(user.role)) {
                next();
            } else {
                return res.redirect('/');
            }


        };
    },
};
