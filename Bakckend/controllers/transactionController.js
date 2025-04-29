import prisma from '../config/db.js';

// Obtenir toutes les transactions
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      include: { shop: true }
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des transactions" });
  }
};

// Obtenir toutes les transactions d'un Shop
export const getTransactionsByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const transactions = await prisma.transaction.findMany({
      where: { shopId: parseInt(id) }
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la recherche des transactions du Shop" });
  }
};
