import getConnection from '../database/database.js'

const getLanguage = async (req,res) => {
    try{
        const connection = await getConnection.getConnection();
        const resul = await connection.query("SELECT price , stock FROM datos");
        res.status(200).send(JSON.stringify(resul));
    }catch(err){
        res.status(404).send("Error al obtener la información del idioma: " + err);
    }
        
    
}

export const methods = {
    getLanguage,
}