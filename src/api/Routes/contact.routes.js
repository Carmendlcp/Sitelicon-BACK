const express = require("express");
const router = express.Router();
const { createContact, updateContact, deleteContact, getAllContacts } = require("../Controllers/contact.controller");

router.get("/", getAllContacts);
// router.get("/", contactController.getContactById);
router.post("/create", createContact);
router.put("/update/:id", updateContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;

