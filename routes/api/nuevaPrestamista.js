const { Router } = require('express');
const NuevaPrestamista = require('../../models/NuevaPrestamista');

const router = Router();

router.get('/', async (req, res)=>{
    try{
        const nuevaPrestamista = await NuevaPrestamista.find();
        if(!nuevaPrestamista) throw new Error('No se han obtenido los datos del prestamista')
        const DatosOrdenados = nuevaPrestamista.sort((a, b) =>{
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        res.status(200).json(DatosOrdenados)
    }catch(error){
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    const newNuevaPrestamista = new NuevaPrestamista(req.body);
    try {
        const nuevaPrestamista = await newNuevaPrestamista.save();
        if(!nuevaPrestamista) throw new Error('Ha ocurrido un error en el momento de guardar los datos')
        res.status(200).json(nuevaPrestamista);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;