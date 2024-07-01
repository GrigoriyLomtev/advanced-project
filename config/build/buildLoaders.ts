import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const cssLoader = buildCssLoaders(isDev);
  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  return [
    codeBabelLoader,
    tsxCodeBabelLoader,
    fileLoader,
    svgLoader,
    // tsLoader,
    cssLoader,
  ];
}
