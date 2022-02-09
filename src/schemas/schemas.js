const createProductSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "name": "",
            "description": "",
            "price": "",
            "images": [],
            "feature": false,
            "countrySale": ""
        }
    ],
    "required": [
        "name",
        "description",
        "price",
        "discount",
        "feature",
        "countrySale"
    ],
    "additionalProperties": true,
    "properties": {
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "The name schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "description": {
            "$id": "#/properties/description",
            "type": "string",
            "title": "The description schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "price": {
            "$id": "#/properties/price",
            "type": "string",
            "title": "The price schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "discount": {
            "$id": "#/properties/discount",
            "type": "string",
            "title": "The discount schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "feature": {
            "$id": "#/properties/feature",
            "type": "boolean",
            "title": "The feature schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "countrySale": {
            "$id": "#/properties/countrySale",
            "type": "string",
            "title": "The countrySale schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "images": {
            "$id": "#/properties/countrySale",
            "type": "array",
            "title": "The countrySale schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        }
    }
}

const updateProductSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "name": "",
            "description": "",
            "price": "",
            "images": [],
            "feature": false,
            "countrySale": ""
        }
    ],
    "required": [
        "id",
        "name",
        "description",
        "price",
        "discount",
        "countrySale"
    ],
    "additionalProperties": true,
    "properties": {
        "id": {
            "$id": "#/properties/id",
            "type": "number",
            "title": "The id schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                0
            ]
        },
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "The name schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "description": {
            "$id": "#/properties/description",
            "type": "string",
            "title": "The description schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "price": {
            "$id": "#/properties/price",
            "type": "string",
            "title": "The price schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "discount": {
            "$id": "#/properties/discount",
            "type": "string",
            "title": "The discount schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "countrySale": {
            "$id": "#/properties/countrySale",
            "type": "string",
            "title": "The countrySale schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "images": {
            "$id": "#/properties/countrySale",
            "type": "array",
            "title": "The countrySale schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": []
        }
    }
}

module.exports.createProductSchema = createProductSchema;
module.exports.updateProductSchema = updateProductSchema;
