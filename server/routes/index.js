const express = require('express');

const db = require('../db');
const authorize = require('../middleware/auth-middleware.js');
const router = express.Router();


router.get('/feedback', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed

    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.all();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});



router.get('/qanda', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed

    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.qanda();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});

router.get('/question', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed

    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.insertquestion(req.query.u_id, req.query.question);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});




//For Staff Listing 
router.get('/staff', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getstaff();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});

//for getting medicine
router.get('/medicine', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getmedicine();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});

router.get('/medical', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getmedical();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});


router.get('/emergency', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getemergency();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/abortion', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getabortion();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/volunteer', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getvolunteer();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/ViewStaffRegistration', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.ViewStaffRegistration();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/ViewVolunteerRegistration', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.ViewVolunteerRegistration();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/searchMedicineOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getmyMedicine(req.query.user_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/myquestions', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getmyQuestion(req.query.u_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});





router.get('/searchStaff', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.searchStaffs(req.query.name);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/searchMedicalItem', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.searchMedicalItem(req.query.tags);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/searchInvitation', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.searchInvitation(req.query.user_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/medicineorder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.medicine_order();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/ViewitemOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.item_order();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/feedbacks', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getFeedback();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});

router.get('/myitems', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.myItems(req.query.user_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});





router.get('/searchMedicine', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.searchMedicine(req.query.tags);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});







router.get('/sexeducation', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getsexeducation();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});

router.get('/help', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.gethelp();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});


router.get('/invitations', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getInvitations();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});





router.get('/prescriptions', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getPrescription();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});











router.get('/feedbacks', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getFeedback();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/deleteMedicine', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deletemedicine(req.query.med_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});



router.get('/deleteVolunterReg', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteVolunterReg(req.query.vr_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});



router.get('/deletestaffsReg', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteStaffReg(req.query.user_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});









router.get('/deleteMedicineOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteMedicineOrder(req.query.order_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});




router.get('/deletemedicalitemOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deletemedicalitemOrder(req.query.itmOrder_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});



router.get('/deleteInvitation', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteInvitation(req.query.I_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});


router.get('/deletepres', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deletepres(req.query.I_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});








router.get('/deleteitmOrderid', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteitmOrderid(req.query.itmOrder_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});







router.get('/deleteFeedback', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.Deletefeedback(req.query.UID);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});




router.get('/deletestaff', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteStaff(req.query.staff_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});

router.get('/deleteInvitations', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteInvitation(req.query.I_id);
        res.send("deleted");

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});




router.get('/deletemedicalitem', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteItm(req.query.itm_id);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});


router.get('/deletevolunteer', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try {
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteVolunteer(req.query.V_ID);
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);

        res.sendStatus(500);


    }


});






router.get('/insertFeedback', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertfeedback(decodeURI(req.query.UID), decodeURI(req.query.contact), decodeURI(req.query.Name), decodeURI(req.query.feedback));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});


router.get('/insertprescption', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertprescption(decodeURI(req.query.user_id), decodeURI(req.query.contact), decodeURI(req.query.imgUrl), decodeURI(req.query.description));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});






router.get('/insertSexEducation', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertSexEducation(decodeURI(req.query.topic), decodeURI(req.query.article1), decodeURI(req.query.date), decodeURI(req.query.image1), decodeURI(req.query.article2), decodeURI(req.query.article2));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});


router.get('/inserthelp', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.help(decodeURI(req.query.topic), decodeURI(req.query.image), decodeURI(req.query.details));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});

router.get('/insertemergency', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertemergency(decodeURI(req.query.E_ID), decodeURI(req.query.Name), decodeURI(req.query.Contact1), decodeURI(req.query.Contact2), decodeURI(req.query.location));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});

//insert invite
router.get('/insertInvite', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertinvite(decodeURI(req.query.I_id), decodeURI(req.query.user_id), decodeURI(req.query.name), decodeURI(req.query.staff_id), decodeURI(req.query.contact));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});

//insert invite
router.get('/insertMedicalOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertItemOrder(decodeURI(req.query.itmOrder_id), decodeURI(req.query.user_id), decodeURI(req.query.itm_id), decodeURI(req.query.user_contact), decodeURI(req.query.user_name));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




//insert invite
router.get('/insertMedicineOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertMedicineOrder(decodeURI(req.query.user_id), decodeURI(req.query.med_id), decodeURI(req.query.user_contact), decodeURI(req.query.userName));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});










router.get('/insertVolunteer', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertvolunteer(decodeURI(req.query.V_ID), decodeURI(req.query.name), decodeURI(req.query.location), decodeURI(req.query.contact), decodeURI(req.query.type), decodeURI(req.query.details), decodeURI(req.query.email), decodeURI(req.query.image));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});



router.get('/insertStaffRegistration', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertStaffRegistration(decodeURI(req.query.user_id), decodeURI(req.query.Name), decodeURI(req.query.reg_no), decodeURI(req.query.contact), decodeURI(req.query.location));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/insertVolunteerReg', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertVolunteerReg(decodeURI(req.query.user_id), decodeURI(req.query.Name), decodeURI(req.query.reg_no), decodeURI(req.query.contact), decodeURI(req.query.location));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});









router.get('/insertstaff', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertstaff(decodeURI(req.query.name), decodeURI(req.query.staff_type), decodeURI(req.query.location), decodeURI(req.query.fee), decodeURI(req.query.reg_no), decodeURI(req.query.photo));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/insertMedicine', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertmedicine(decodeURI(req.query.med_id), decodeURI(req.query.brand_name), decodeURI(req.query.generic_name), decodeURI(req.query.company), decodeURI(req.query.price), decodeURI(req.query.quantity), decodeURI(req.query.description), decodeURI(req.query.tags), decodeURI(req.query.images));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});



router.get('/insertAnswer', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertAnswer(decodeURI(req.query.q_id), decodeURI(req.query.answer));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});


router.get('/insertMedicalItem', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertmedicalItem(decodeURI(req.query.itm_id), decodeURI(req.query.name), decodeURI(req.query.otherName), decodeURI(req.query.company), decodeURI(req.query.price), decodeURI(req.query.quantity), decodeURI(req.query.description), decodeURI(req.query.tags), decodeURI(req.query.images));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});







router.get('/insertAbortion', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertAbortion(decodeURI(req.query.place_ID), decodeURI(req.query.name), decodeURI(req.query.location), decodeURI(req.query.contact), decodeURI(req.query.details), decodeURI(req.query.images));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});


router.get('/adminlogin', async (req, res) => {
    console.log("login");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {



        let result = await db.adminlogin(req.query.email, req.query.password);

        res.json(result);
        console.log("successfully uploaded ");
        res.status(200)
    }
    catch (e) {
        res.status(401);
        console.log("some error");

        res.json([{ 'u_id': 0 }]);




    }


});


router.get('/login', async (req, res) => {
    console.log("login");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        let result = await db.login(req.query.email, req.query.password);

        res.json(result);
        console.log("successfully uploaded ");
        res.status(200)
    }
    catch (e) {
        res.status(401);
        console.log("some error");
        res.json([{ 'u_id': 0 }]);
    }


});
// registration
router.get('/register', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.registration(decodeURI(req.query.u_id), decodeURI(req.query.name), decodeURI(req.query.email), decodeURI(req.query.contact1), decodeURI(req.query.contact2), decodeURI(req.query.location), decodeURI(req.query.password));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 400;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(401);


    }

});


module.exports = router;