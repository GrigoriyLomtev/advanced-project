import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.block, {}, [className, styles.loading])}>
        <div className={styles.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton className={styles.username} width={100} height={16} />
        </div>
        <Skeleton className={styles.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(styles.block, {}, [className])}
    >
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </VStack>
  );
});
