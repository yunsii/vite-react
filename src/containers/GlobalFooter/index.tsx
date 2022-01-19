import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

const authorId = 'yunsii';

export default function GlobalFooter() {
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} ${authorId} 出品`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: `https://github.com/${authorId}/vite-react`,
          blankTarget: true,
        },
      ]}
    />
  );
}
