const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-muqtadahasbya-021953168272.json')
    
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-muqtadahasbya',
      keyFilename: pathKey,
      databaseId: 'prediction',
    });
 
    const predictCollection = db.collection('cancer-prediction');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;