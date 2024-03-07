const User = require("../Models/user.models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

// const getUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: "Usuario no encontrado" });
//     }
//     return res.status(200).json(user);
//   } catch (error) {
//     return res.status(500).json({ message: "Error al obtener el usuario", error });
//   }
// };

const createUser = async (req, res) => {
  const { name, lastName, phoneNumber, email, password } = req.body;
  try {
    const newUser = new User({ name, lastName, phoneNumber, email, password });
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el usuario", error });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, phoneNumber, email, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, lastName, phoneNumber, email, password }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};

module.exports = { 
    getAllUsers,
    //  getUserById, 
     createUser, updateUser, deleteUser };

