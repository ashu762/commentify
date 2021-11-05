import { compareDesc } from 'date-fns';
import { db } from './firebase-admin';

export async function getAllFeedback(siteId, route) {
  try {
    let ref = db
      .collection('feedback')
      .where('siteId', '==', siteId)
      .where('status', '==', 'active');
    console.log('Asdsafs');
    if (route) {
      ref = ref.where('route', '==', route);
    }

    const snapshot = await ref.get();
    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((a, b) =>
      compareAsc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await db.collection('sites').get();
    const sites = [];
    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}
export async function getSite(siteId) {
  try {
    const doc = await db.collection('sites').doc(siteId).get();
    const site = { id: doc.id, ...doc.data() };
    return { site };
  } catch (error) {
    return { error };
  }
}

export async function getUserSites(userId) {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', userId)
    .get();
  const sites = [];
  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}

export async function getUserFeedback(userId, route) {
  let ref = await db
    .collection('feedback')
    .where('authorId', '==', userId)
    .where('status', 'in', ['pending', 'active']);

  if (route) {
    ref = ref.where('route', '==', route);
  }
  const snapshot = await ref.get();

  const feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}
