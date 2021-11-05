import { getAllFeedback } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    console.log('Asdsa');
    const [siteId, route] = req.query.site;
    const { feedback } = await getAllFeedback(siteId, route);
    console.log(feedback);
    res.status(200).json({ feedback });
  } catch (error) {
    res.status(500).json({ error });
  }
};
