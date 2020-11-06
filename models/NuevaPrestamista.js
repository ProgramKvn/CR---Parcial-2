const { Schema, model } = require('mongoose');

const NuevaPrestamistaSchema = new Schema({
    Nombres: String,
    Apellidos: String,
    DUI: Number,
    Monto_Prestado: Number,
    Intereses: Number,
    Plazo_Pago: Number,
    Fecha: {
        type: Date,
        default: Date.now
    }
});

const NuevaPrestamista = model('nuevaPrestamista', NuevaPrestamistaSchema);
module.exports = NuevaPrestamista;