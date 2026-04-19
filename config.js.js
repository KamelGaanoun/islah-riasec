// ============================================================
//  FICHIER MODÈLE — Copiez ce fichier en "config.js"
//  et remplacez les valeurs par vos clés Firebase
//  NE PAS mettre config.js sur GitHub (voir .gitignore)
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCyj-JhemTCJRTDje0h1Z71En4rM0XSPsw",
  authDomain: "islah-riasec.firebaseapp.com",
  projectId: "islah-riasec",
  storageBucket: "islah-riasec.firebasestorage.app",
  messagingSenderId: "212531888300",
  appId: "1:212531888300:web:004816ab69fa7c921b5f09"
};

initFirebase(firebaseConfig);
window._routeCalled = true;
route();
