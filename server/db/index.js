const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:10000,
    // user: 'garageinc',
    // password: '#Garage123',
    // database:'garageinc',
    // host:'151.106.26.182',
    // port: '3306'

    user: 'root',
    password: '',
    database:'drmobile',
    host:'localhost',
    port: '3306'


});

let drmobile={};

drmobile.all = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * from feedback LIMIT 10`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.allcategories = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT DISTINCT category as category_name from products`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

//staff selected
drmobile.searchProduct = (term,limit) => {

    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM products WHERE tags LIKE '%' ? '%' OR name LIKE '%' ? '%' LIMIT ?,10`,[term,term,limit],(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.getCategory = (category,limit) => {

    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM products WHERE category LIKE ? LIMIT ?,10` ,[category,limit],(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.allBrands= () => {

    return new Promise((resolve,reject) => {

        pool.query('SELECT `name` as "brand_name",`image_url`,`priority_id` FROM `brand_list`',(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


//get staffs
drmobile.getstaff = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM staff`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

//get medicine
drmobile.getmedicine = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM medicine`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.getmedical = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM medicalitems`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.getemergency = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM emergencycontact`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.getabortion = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM abortion`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getvolunteer = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM volunteer`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getsexeducation = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM sexeducation`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.gethelp = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM help`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.getFeedback = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM feedback`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.getVehiclesDetails = (id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM vehicles WHERE id LIKE ?` ,[id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.deletemedicine = (med_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM medicine WHERE med_id = ?` ,[med_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.deleteStaff = (med_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM staff WHERE staff_id = ?` ,[med_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.deleteItm = (itm_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM medicalitems WHERE itm_id = ?` ,[itm_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.deleteVolunteer = (V_ID) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM volunteer WHERE V_ID = ?` ,[V_ID],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.Deletefeedback = (UID) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM feedback WHERE UID = ?` ,[UID],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.validateToken = (token) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT count(user) as count FROM tokens WHERE token LIKE ?` ,[token],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.customWidget = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM widgets`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.featuredProducts = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM products where featured_product = '1'`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





// insert feedback
drmobile.insertfeedback = (user_id,contact,name,feedback) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into feedback(UID, contact, Name, feedback) values(?, ?, ?, ?)`,[user_id, contact, name, feedback],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.insertemergency = (E_ID,Name,Contact1,Contact2,location) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into emergencycontact(E_ID, Name, Contact1, Contact2, location) values(?, ?, ?, ?, ?)`,[E_ID, Name, Contact1, Contact2, location],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.help = (topic,image,details) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into help(topic, image, details) values(?, ?, ?)`,[topic, image, details],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};
drmobile.insertSexEducation = (topic,article1,date,image1,article2,image2) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into sexeducation(topic, article1, date, image1, article2, image2) values(?, ?, ?, ?, ?, ?)`,[topic, article1, date, image1, article2, image2],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.insertstaff = (S_ID,Name,staff_type,location,fee,reg_no,photo) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into staff(staff_id, name, staff_type, location, fee, reg_no, photo) values(?, ?, ?, ?, ?, ?, ?)`,[S_ID, Name, staff_type, location, fee, reg_no, photo],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.insertvolunteer = (V_ID,name,location,contact,type,details,email,image) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into volunteer(V_ID, name, location, contact, type, details, email, image) values(?, ?, ?, ?, ?, ?, ?, ?)`,[V_ID, name, location, contact, type, details, email, image],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};








drmobile.insertmedicine = (med_id,brand_name,generic_name,company,price,quantity,description,tags,images) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into medicine(med_id, brand_name, generic_name, company, price, quantity, description, tags, images) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,[med_id, brand_name, generic_name, company, price, quantity, description, tags, images],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.insertAbortion = (place_ID,name,location,contact,details,images) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into abortion(place_ID, name, location, contact, details, images) values(?, ?, ?, ?, ?, ?)`,[place_ID, name, location, contact, details, images],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};


//inserting user details
drmobile.registration = (u_id,name,email,contact1,contact2,location,password) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into user(u_id, name, email, contact1, contact2, location, password) values(?, ?, ?, ?, ?, ?, ?)`,[u_id, name, email, contact1, contact2, location, password],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

// Get username password
drmobile.login = (email,password) => {

    return new Promise((resolve,reject) => {
       
        pool.query("SELECT * FROM user WHERE (email, password) = (?, ?)", [email, password], function(err, row) {
            console.log(row.length);
            if(row.length!=0) {
              console.log("User Logged In");
              resolve(row);
              } else {
              res.status(404);
              console.error("Failure");
                reject(err);
            }
          });

    });


};











// insert user id and product id wish list 


// drmobile.insertwishlist = (user_id,product_id) => {

//     return new Promise((resolve,reject) => {

//         pool.query(`insert into wishlist(uuid, product_id) values(?, ?)`,[user_id, product_id],(err,results) => {
            
          
           

//             if(err){
               
//                 return reject(err);}
         
//             else{
//                 return resolve(results);
//             }

//         });


//     });


// };



// select user id and product id wish list 


drmobile.userProduct = (user_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM wishlist where uuid LIKE '%' ? '%'`,[user_id],(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.customWidget = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM widgets`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


module.exports = drmobile;