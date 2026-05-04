import { getAuth } from '@clerk/express';

export function requireClerkAuth(req, res, next) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.clerkUserId = userId;
    return next();
  } catch (err) {
    return next(err);
  }
}
