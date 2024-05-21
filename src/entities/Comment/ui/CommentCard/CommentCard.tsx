import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.block, {}, [className])}>
        <div className={styles.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton className={styles.username} width={100} height={16} />
        </div>
        <Skeleton className={styles.text} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <div className={styles.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.username} title={comment.user.username} />
      </div>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
