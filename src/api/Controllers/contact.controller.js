const Contact = require("../Models/contact.models");

const createContact = async (req, res) => {
  try {
    const { name, email, reason, message } = req.body;
    const newContact = new Contact({ name, email, reason, message });
    const createdContact = await newContact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getContactById = async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//       res.status(404).json({ message: "Contact not found" });
//       return;
//     }
//     res.status(200).json(contact);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const updateContact = async (req, res) => {
  try {
    const { name, email, reason, message } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, { name, email, reason, message }, { new: true });
    if (!updatedContact) {
      res.status(404).json({ message: "Contact not found" });
      return;
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deleteContact) {
      res.status(404).json({ message: "Contact not found" });
      return;
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
//   getContactById,
  updateContact,
  deleteContact,
};
