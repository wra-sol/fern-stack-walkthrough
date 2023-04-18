import express from 'express';
const router = express.Router ();
import {db} from './firebase.js';
import {ref, set, get, child} from 'firebase/database';

router.get ('/data', async (req, res, next) => {
  const {userId} = req.body;
  console.log(userId)
  try {
    get (ref (db, 'users/' + userId )).then (snapshot => {
      if (snapshot.exists ()) {
        res.status (200).json (snapshot.val ());
      } else {
        console.log ('No data available');
        res.status(200).json({});
      }
    });
  } catch (error) {
    next (new Error (error.message));
  }
});

router.post ('/data', async (req, res, next) => {
  
  const {userId, userData} = req.body;
  try {
    await set (ref (db, 'users/' + userId + '/' + userData.id), userData)
      .then (() => {
        res.status (200).json ({...userData});
      })
      .catch (e => {
        throw e;
      });
  } catch (error) {
    next (new Error (error.message));
  }
});

export default router;
