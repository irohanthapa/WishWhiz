const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    //mongoose cast error
    if (err.name === "CastError") {
        const message = `Resource not found`;
        error = new errorResponse(message, 404);
    }
    //duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate field value entered`;
        error = new errorResponse(message, 400);
    }
    //validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        err = new errorResponse(message, 400);
        res.status(err.statusCode || 500).json({
            success: false,
            error: err.message || "Server Error",
        })
    }
};

//export
module.exports = errorHandler;