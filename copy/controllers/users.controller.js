// import user from '../models/user'

const users = require("../models/user").user


// export const createUser = async (req, res) => {
//     const { names,
//         lastnames,
//         controlnumber,
//         email,
//         password,
//         birthday,
//         gender,
//         roles,

//     } = req.body;

//     try {
//         let newUser = await user.create(
//             {
//                 names,
//                 lastnames,
//                 controlnumber,
//                 email,
//                 password,
//                 birthday,
//                 gender,
//                 roles
//             }, {
//             fields: [
//                 'names',
//                 'lastnames',
//                 'controlnumber',
//                 'email',
//                 'password',
//                 'birthday',
//                 'gender',
//                 'roles',
//                 "createdAt",
//                 "updatedAt"
//             ]
//         }
//         )

//         if (newUser) {
//             return res.json({
//                 message: 'Usuario creado',
//                 data: newUser
//             })
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message: 'Something goes wrong',
//             data: {}
//         })
//     }

// }

export const getUsers = async (req, res) => {
    try {
        const users = await users.findAll();
        // const users = await Roles.findAll();
        res.json({
            data: users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

// export const getUserById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await user.findOne({
//             where: {
//                 id
//             }
//         });
//         res.json({
//             data: user
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Something goes wrong',
//             data: {}
//         })
//     }
// }

// export const updateUserById = async (req, res) => {
//     try{
//         const { id } = req.params;
//         const { names,
//             lastnames,
//             password,
//             birthday,
//             gender,
//             updatedAt
//         } = req.body;
//     const users = await user.findAll({
//         attributes: [
//             'id',
//             'names',
//             'lastnames',
//             'controlnumber',
//             'email',
//             'password',
//             'birthday',
//             'roles',
//             'updatedAt'],
//         where: {
//             id
//         }
//     });

//     if (users.length > 0) {
//         users.forEach(async user => {
//             await user.update({
//                 names,
//                 lastnames,
//                 password,
//                 birthday,
//                 gender,
//                 updatedAt
//             })
//         })
//     }else{
//         return res.json({
//             message: `No content`,
//             data: {}
//         })
//     }
//     return res.json({
//         message: 'user updated succesfully',
//         data: users
//     })
//     }catch(error){
//         res.status(500).json({
//             message: 'Something goes wrong'
//         })
//     }

// }

// export const deleteUserById = async (req, res) => {
//     // res.json('Usuarios')
//     try {
//         const { id } = req.params;
//         const user = await user.destroy({
//             where: {
//                 id
//             }
//         });
//         res.json({
//             message: `User with ID ${id} has been deleted sucessfully`
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Something goes wrong',
//             data: {}
//         })
//     }
// }