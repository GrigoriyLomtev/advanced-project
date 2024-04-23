import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (!config.module) {
    // eslint-disable-next-line no-param-reassign
    config.module = { rules: [] };
  }
  if (!config.module.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = [];
  }
  // Фильтруем и модифицируем существующие правила, исключая SVG
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule) => {
    if (rule && typeof rule === 'object'
      && 'test' in rule && rule.test
      && /svg/.test(rule.test?.toString())) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};
