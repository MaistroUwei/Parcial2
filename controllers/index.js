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
        res.send({
            status: 200,
            user:{
                fullName: (`${userData[id-1].firstName} ${userData[id-1].lastName} ${userData[id-1].maidenName}`),
                email: userData[id-1].email,
                age: userData[id-1].age,
                address: userData[id-1].address,
                jobTitle: userData[id-1].company.title
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
        userData[id-1].address = address;
        // const { }
        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        
        res.send({
            status: 200,
            user:{...userData[id-1]}
        })
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});
        
    }
}

const createUser = async (req, res) => {
    try{
        const {body : { email }} = req;
        const newID = userData[userData.length-1].id +1;
        userData.push({"id":newID, email})
        res.send({
            status: 200,
            user: userData.map(({id, email})=>({id, email}))
        })
        console.log(userData)
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});
        
    }
}

const deleteUser = async (req, res) => {
    try {
        const {params : { id }} = req;
        const objeto = userData.find(obj => obj.id == id);

        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        userData.splice(id-1, 1);
        res.send({
            status: 200,
            user: userData.map(({id, email})=>({id, email}))
        })
        console.log(userData)
    }catch(error){
        res.send({
            status:500,
            error});
        
    }
}

module.exports = {
    getUserData,
    updateUserAddress,
    createUser,
    deleteUser,
}