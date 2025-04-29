
import prisma from '../config/db.js';

// Obtenir tous les Shops
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

// Chercher un Shop par téléphone
export const searchUserByPhone = async (req, res) => {
    const { phone } = req.query;
    try {
      const user = await prisma.user.findUnique({
        where: { phoneNumber: phone }
      });
  
      if (!user) {
        return res.status(404).json({ message: "Shop non trouvé" });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la recherche" });
    }
  };
  

// Bloquer un Shop
export const blockUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { status: "blocked" }
    });

    res.json({ message: "Shop bloqué avec succès", user });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du blocage" });
  }
};

// Débloquer un Shop
export const unblockUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { status: "active" }
    });

    res.json({ message: "Shop débloqué avec succès", user });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du déblocage" });
  }
};
