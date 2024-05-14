const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const service = require("./users.service");

async function create(req, res, next){
    const {data: {first_name, last_name, email, password} = {}} = req.body

    const newUser = {
        first_name,
        last_name,
        email,
        password
    }

    const response = await service.create(newUser)
    res.status(201).json({ data: response })
}

async function list(req, res) {
    res.json({data: await service.list()});
}

module.exports = {
    create: [
        asyncErrorBoundary(hasProperties("first_name")),
        asyncErrorBoundary(hasProperties("last_name")),
        asyncErrorBoundary(hasProperties("email")),
        asyncErrorBoundary(hasProperties("password")),
        asyncErrorBoundary(create)
    ],
    list: asyncErrorBoundary(list)
};