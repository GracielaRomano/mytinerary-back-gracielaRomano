export default (req, res, next) => {
    try {
        return res.status(200).json({
        success: true,
        message: "User signin with google",
        response: { 
            token: req.token, 
            user: req.user },
        });
    } catch (error) {
        next(error);
    }
};
    