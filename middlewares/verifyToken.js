import admin from 'firebase-admin';
import serviceAccount from '../serviceAccount.json' assert { type: "json" };

admin.initializeApp ({
    credential: admin.credential.cert (serviceAccount),
  });
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split('Bearer ')[1];
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decodedToken = await admin.auth()
    .verifyIdToken(token)
    req.body.user = decodedToken;
    req.body.userId = decodedToken.uid;

    next();
  } catch (error) {
    console.error(error);
    res.status(403).send('Forbidden');
  }
};

export default verifyToken;
