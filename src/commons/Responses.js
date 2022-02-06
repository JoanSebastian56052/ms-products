const BAD_REQUEST = {
    statusCode: 400,
    message: "Request wrong",
    detail: "",
}

const INTERNAL_ERROR = {
    statusCode: 500,
    message: "An exception has occurred",
    detail: "",
}

const SUCCESS_RESPONSE = {
    statusCode: 201,
    message: "Request successful",
    detail: "",
}

const RESOURCE_NOT_FOUND = {
    statusCode: 404,
    message: "Resource not found",
    detail: "",
}

const DELETE_SUCCESS = {
    statusCode: 201,
    message: "Request successful",
    detail: "",
}

const UPDATE_SUCCESS = {
    statusCode: 201,
    message: "Request successful",
    detail: "",
}

module.exports = {
    BAD_REQUEST,
    INTERNAL_ERROR,
    SUCCESS_RESPONSE,
    RESOURCE_NOT_FOUND,
    DELETE_SUCCESS,
    UPDATE_SUCCESS
}