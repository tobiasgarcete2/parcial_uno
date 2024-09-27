// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ

//crea la validaciones para las ordenes

const orderValidations = {
    // validaciones para los campos de la orden
    fields: {
        // validación para el nombre del cliente
        clientName: {
            required: true,
            minLength: 3,
            maxLength: 50
        },
        // validación para la dirección del cliente
        clientAddress: {
            required: true,
            minLength: 10,
            maxLength: 100
        },
        // validación para el número de teléfono del cliente
        clientPhone: {
            required: true,
            minLength: 10,
            maxLength: 15
        },
        // validación para el nombre del artículo
        articleName: {
            required: true,
            minLength: 3,
            maxLength: 50
        },
        // validación para la cantidad del artículo
        articleQuantity: {
            required: true,
            min: 1,
            max: 100
        },
        // validación para el precio del artículo
        articlePrice
}};

export default orderValidations;


