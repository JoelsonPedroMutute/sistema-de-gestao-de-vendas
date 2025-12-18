const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 1️⃣ Token não enviado
  if (!authHeader) {
    return res.status(401).json({
      sucesso: false,
      mensagem: 'Token não fornecido'
    });
  }

  const parts = authHeader.split(' ');

  // 2️⃣ Formato inválido
  if (parts.length !== 2) {
    return res.status(401).json({
      sucesso: false,
      mensagem: 'Token mal formatado'
    });
  }

  const [scheme, token] = parts;

  // 3️⃣ Tipo inválido
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      sucesso: false,
      mensagem: 'Token mal formatado'
    });
  }

  // 4️⃣ Token inválido ou expirado
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Token inválido ou expirado'
      });
    }

    // token válido
    req.userId = decoded.id;
    next();
  });
};
