import admin from '../config/firebase.js';
import jwt from 'jsonwebtoken';

export const firebaseLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(token);

    // Tu peux ici personnaliser ton token comme tu veux
    const jwtToken = jwt.sign(
      {
        uid: decoded.uid,
        email: decoded.email,
        role: "customer-agent", // tu peux ajouter un rôle si tu veux
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token: jwtToken });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token Firebase invalide" });
  }
};
