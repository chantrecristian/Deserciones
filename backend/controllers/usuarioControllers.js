import Usuario from "../models/Usuario.js"; //Se extrae el modelo usuario
import generarId from "../helpers/generarId.js";
const registrar = async (req, res) => {


    //Evitar registros duplicados
    const {email} = req.body;
    const existeUsuario = await Usuario.findOne({email})

    if (existeUsuario) {
         const  error = new Error("Usuario ya existe!!")
         return res.status(400).json({ msg: error.message})
    }

    console.log(existeUsuario)
    try {
        const usuario = new Usuario(req.body) 
        usuario.token = generarId()
        const usuarioAlmacenado = await usuario.save()
        res.json(usuarioAlmacenado)

    } catch (error) {
        console.log(error)
    }
};

const autenticar = async (req, res)=> {

    const {email, password} = req.body
    //Comprbar si el lusuario existe
    
    const usuario = await Usuario.findOne({email})
    if (!usuario) {
        const error = new Error("El usuario no existe")
        return res.status(404).json({msg: error.message})
    }
    //Comprobar si el usuario esta confirmado

    //Confirmar su passwordñ

}
     
export { registrar, autenticar };