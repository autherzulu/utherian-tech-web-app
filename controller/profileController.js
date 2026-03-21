
const db = require("../model/Database")
const path = require('path')
const multer = require("multer")


// const isProfileCreated = (req, res) => {
//     const user = req.user
//       db.query("SELECT id_or_passport, phone, profile_photo, gender, entity, user_id, created_on FROM user_profile WHERE user_id = ?", [user.id], (err, results) => {
//         if (err) {
//             console.log("errrrr: ", err)
//         }else if (results.length = 0) {
//             console.log("length ", results.length)
          
//         }else {
//             res.json({user, message : "Please create a profile..."})
//         }
//     })

// }



const userprofile = (req, res) => {
    const user = req.user
    console.log("profile backend: ", user)

    db.query("SELECT id_or_passport, phone, profile_photo, gender, entity, user_id, created_on FROM user_profile WHERE user_id = ?", [user.id], (err, results) => {
        if (err) {
            console.log("errrrr: ", err)
        }else if (results.length > 0) {
            console.log("rsult: ", results)
            const user_profile = results[0]
            res.json({user, user_profile})
        }else {
            res.json({user, message : "Please create a profile..."})
        }
    })
    
}

    const storage = multer.diskStorage({
        destination : function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename : function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
            const ext = path.extname(file.originalname) || ".jpg"
            cb(null, file.fieldname + '-' + uniqueSuffix + ext)
        }
    })

    const uploads = multer({storage})



const createProfile =  (req, res)   => {
    const user = req.user
    const {entity, gender, phone, id_passport} = req.body
    const photo = req.file.filename
    const user_id = user.id 

    console.log("jjj", photo)
    console.log("uploads: ", uploads)

    db.query("SELECT user_id FROM user_profile WHERE user_id = ?", [user_id], (er, result) => {
        if (er) {
            console.log("errr :", er)
        }else if(result.length > 0) {
            console.log("resul: ", result)
            console.log("user already has a profile")
            // return res.json({message : 'user already has a profile'})
        }
        // else if (result.length == 0) {
        //     return res.json({message : "Create a profile to continue", redirect : "/profile"})
        // }
        
        else{
            db.query("INSERT INTO user_profile (id_or_passport, phone, profile_photo, gender, entity, user_id) values (?, ?, ?, ?, ?, ?)", [id_passport, phone, photo,  gender, entity,  user_id], (err, results) => {
                    if (err) {
                        console.log("user profile err: ",  err)
                    } else {
                        console.log("user profile created: ", results)
                        return res.json({user})
                    }
    })
        }
    })  
    console.log(req.body)
    console.log("kk: ", photo)
}


const updateProfile = (req, res) => { 
    console.log("ggggggggggggggg")
    console.log(req.body)

    const {first_name, last_name, user_name, email, gender2, phone, entity1, id_or_passport, photo} = req.body
    const id = req.user.id
    const feilds = []
    const values = []

    if (first_name) {
        feilds.push("first_name = ?")
        values.push(first_name)
    }
     if (last_name) {
        feilds.push("last_name = ?")
        values.push(last_name)
    }
     if (user_name) {
        feilds.push("user_name = ?")
        values.push(user_name)
    }
     if (email) {
        feilds.push("email = ?")
        values.push(email)
    }
     if (gender2) {
        feilds.push("gender = ?")
        values.push(gender2)
    }
     if (phone) {
        feilds.push("phone = ?")
        values.push(phone)
    }
     if (entity1) {
        feilds.push("entity = ?")
        values.push(entity1)
    }
     if (id_or_passport) {
        feilds.push("id_or_passport = ?")
        values.push(id_or_passport)
    }
     if (photo) {
        feilds.push("photo = ?")
        values.push(photo)
    }
   console.log("filds : ", feilds )
   console.log("values : ", values)

   console.log(feilds.join(", "))
   console.log(values)
   db.query(`UPDATE users join user_profile on user_profile.user_id = users.id SET ${feilds.join(", ")}  WHERE user_id = ${id}`, values, (err, result) => {
        if (err) {
            console.log("an err", err)
        } else {
            console.log("done: ", result)
            res.json(result);
        }
    })

    // db.query("UPDATE users join user_profile on user_profile.user_id = users.id SET users.first_name = ?, users.last_name = ?, users.user_name = ?, users.email = ?, user_profile.gender = ?, user_profile.phone = ?, user_profile.id_or_passport = ? ,user_profile.entity = ?  WHERE user_id = ?", [first_name, last_name, user_name, email, gender, phone, id_or_passport, entity, id], (err, result) => {
    //     if (err) {
    //         console.log("an err", err)
    //     } else {
    //         console.log("done: ", result)
    //         res.json(result);
    //     }
    // })
  
}



module.exports = {
   createProfile,
   userprofile, 
   updateProfile,
   uploads,
 
}