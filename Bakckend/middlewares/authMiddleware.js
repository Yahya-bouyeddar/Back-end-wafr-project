import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Vérifier si le header existe
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou invalide' });
  }

  // Récupérer le token depuis le header
  const token = authHeader.split(' ')[1];

  try {
    // Vérifier le token avec la clé secrète
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ajouter les infos décodées dans la requête
    req.user = decoded;

    next(); // Passer à la suite (route)
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide ou expiré' });
  }
};
