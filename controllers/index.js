let { userData } = require("../data");

const getUserData = async (req, res) => {
    try {
        const {params : { id }} = req;
        console.log(id)
        const objeto = userData.find(obj => obj.id == id);

        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        // const { }
        res.send({
            status: 200,
            user:{
                fullName: (`${userData[id].firstName} ${userData[id].lastName} ${userData[id].maidenName}`),
                email: userData[id].email,
                age: userData[id].age,
                address: userData[id].address,
                jobTitle: userData[id].company.title
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
        const {params : { id }} = req;
        const {body: address} = req;
        const objeto = userData.find(obj => obj.id == id);
        userData[id].address = address;
        // const { }
        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        
        res.send({
            status: 200,
            user:{...userData[id]}
        })
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});
        
    }
}

module.exports = {
    getUserData,
    updateUserAddress,
}