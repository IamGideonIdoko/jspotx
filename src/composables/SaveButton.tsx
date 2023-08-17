'use client';
import type { FC } from 'react';
import BookmarkIcon from '@/assets/svgs/bookmark.svg';
import { useAppAuthState } from '@/hooks/auth.hook';
import firebase from '@/libs/firebase';
import { useBookmarks } from '@/hooks/db.hook';
import appConfig from '@/config';

const SaveButton: FC<{ jobId: string }> = ({ jobId }) => {
  const [user] = useAppAuthState();
  const db = firebase.firestore();
  const [bookmarks] = useBookmarks({
    userId: `${user?.uid}`,
    jobId: jobId,
  });
  const mappedBookmarks = bookmarks?.docs.map((doc) => doc.data());
  const isBookmarked = mappedBookmarks && mappedBookmarks?.length > 0;
  const handleBookmark = async () => {
    if (isBookmarked) {
      if (bookmarks) {
        try {
          const querySnapshot = await db
            .collection('bookmarks')
            .where('userId', '==', user?.uid)
            .where('jobId', '==', jobId)
            .get();
          querySnapshot.forEach((doc) => doc.ref.delete());
        } catch (err) {
          console.error('Unbookmark error: ', err);
        }
      }
    } else {
      if (user?.uid) {
        try {
          await db.collection('bookmarks').add({
            userId: user.uid,
            jobId: jobId,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        } catch (err) {
          console.error('Bookmark error: ', err);
        }
      }
    }
  };
  return (
    <button className="bg-white border-0 flex-shrink-1" onClick={handleBookmark}>
      <BookmarkIcon
        fill={isBookmarked ? appConfig.theme.brandColor : 'none'}
        stroke={isBookmarked ? appConfig.theme.brandColor : '#676879'}
        strokeWidth={isBookmarked ? '0' : '1.5'}
      />
    </button>
  );
};

export default SaveButton;
