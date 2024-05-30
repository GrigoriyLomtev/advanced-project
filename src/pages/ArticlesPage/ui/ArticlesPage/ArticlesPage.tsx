import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?:string
}

const article = {
  id: '1',
  title: 'Javascript news eqrfds',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'admin',
    role: 'ADMIN',
    avatar: 'https://nztcdn.com/avatar/l/1658534106/2176856.webp',
  },
  type: [
    'IT',
    'ECOCS',
    'POLOITICS',
    'POLOITICS',
    'POLOITICS',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, коти другую подобную, средствами некоего языка.',
        'JavaScriммы.',
        'Существер — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него сл код:',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE ").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, котдругую подобную, средствами некоего языка.',
        'Существуим в него следующий код:',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '3',
      type: 'CODE',
      code: 'const pater);',
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это языей первой JavaScript-программы.',
        'Сум использовании , который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript —первой JavaScript-программы.',
      ],
    },
  ],
} as Article;

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.block, {}, [className])}>
      <ArticleList
        isLoading
        view={ArticleView.LIST}
        articles={new Array(16).fill(0).map((item, index) => ({
          ...article,
          id: String(index),
        }))}
      />
    </div>
  );
};

export default memo(ArticlesPage);
