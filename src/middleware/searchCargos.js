function searchCargo(request, response, next) {
    const office = request.body.office;

    if (office.toLowerCase() === "líder") {
        next();
    } else {
        response.status(403).json({ mensagem: "Acesso negado" });
    }
}

module.exports = { searchCargo };