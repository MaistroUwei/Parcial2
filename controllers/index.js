let { userData } = require("../data");

const getUserData = async (req, res) => {
    try {
        const {params : { id }} = req;
        console.log(id)
        const objeto = userData.find(obj => obj.id == id);
        console.log(objeto)
        // const { }
        res.send({
            status: 200,
            user:{
                fullName: (`${objeto.firstName} ${objeto.lastName} ${objeto.maidenName}`),
                email: objeto.email,
                age: objeto.age,
                address: objeto.address,
                jobTitle: objeto.company.title
            }
        })
    }catch(error){
        res.send({
            status:500,
            error});
        
    }
}

const updateUserAddress = async (req, res) => {
    try{
        const {body: movie } = req;
        const { id, time, author, name, rating } = movie;
        const movieDB = db.collection('movies').doc(id);   
        const resp = await movieDB.update({
            name,
            time,
            rating,
            author
        });
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);

    }
}

module.exports = {
    getUserData,
    updateUserAddress,
}