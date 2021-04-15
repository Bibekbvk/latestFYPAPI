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



drmobile.getInvitations = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM invitation`,(err,results) => {

            
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



drmobile.deleteMedicineOrder = (order_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE FROM medicineorder WHERE order_id = ?` ,[order_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.deletemedicalitemOrder = (itmOrder_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE FROM itemorder WHERE itmOrder_id = ?` ,[itmOrder_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.deleteInvitation = (I_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM invitation WHERE I_id = ?` ,[I_id],(err,results) => {

            
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



drmobile.deleteInvitation = (I_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM invitation WHERE I_id = ?` ,[I_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.deleteitmOrderid = (itmOrder_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM itemorder WHERE itmOrder_id = ?` ,[itmOrder_id],(err,results) => {

            
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
//https://www.youtube.com/watch?v=5bVr10umz2o

};




drmobile.searchStaffs = (tags) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM staff where name like '%' ? '%'`,[tags],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.searchMedicalItem = (tags) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM medicalitems where tags like '%' ? '%'`,[tags],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.getmyMedicine = (user_id) => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM medicineorder where user_id = ?`[user_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.searchInvitation = (user_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM invitation where user_id = ?`,[user_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.myItems = (user_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM  itemorder where user_id = ?`,[user_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};











drmobile.searchMedicine = (tname) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM medicine where tags like '%' ? '%'`,[tname],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.medicine_order = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM medicineorder`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.item_order = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM itemorder`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.ViewStaffRegistration = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM staffregistration`,(err,results) => {

            
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




drmobile.insertinvite = (I_id,user_id,name,staff_id,contact) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into invitation(I_id, user_id, name, staff_id, contact) values(?, ?, ?, ?, ?)`,[I_id, user_id, name, staff_id, contact],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.insertItemOrder = (itmOrder_id,user_id,itm_id,user_contact,user_name) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into itemorder(itmOrder_id, user_id, itm_id, user_contact, user_name) values(?, ?, ?, ?, ?)`,[itmOrder_id,user_id, itm_id, user_contact, user_name],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.insertMedicineOrder = (user_id,med_id,user_contact,userName) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into medicineorder(user_id, med_id, user_contact, userName) values(?, ?, ?, ?)`,[user_id, med_id, user_contact, userName],(err,results) => {
            
          
           

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


drmobile.insertstaff = (Name,staff_type,location,fee,reg_no,photo) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into staff(name, staff_type, location, fee, reg_no, photo) values(?, ?, ?, ?, ?, ?)`,[Name, staff_type, location, fee, reg_no, photo],(err,results) => {
            
          
           

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



drmobile.insertStaffRegistration = (U_id,image,image1,image2,description) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into staffRegistration(U_id, image, image1, image2, description) values(?, ?, ?, ?, ?)`,[U_id, image, image1, image2, description],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.insertmedicalItem = (itm_id,name,otherName,company,price,quantity,description,tags,images) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into medicalitems(itm_id, name, otherName, company, price, quantity, description, tags, images) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,[itm_id, name, otherName, company, price, quantity, description, tags, images],(err,results) => {
            
          
           

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
drmobile.loginadmin = (email,password) => {

    return new Promise((resolve,reject) => {
       
        pool.query("SELECT * FROM admin WHERE (email, password) = (?, ?)", [email, password], function(err, row) {
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




module.exports = drmobile;