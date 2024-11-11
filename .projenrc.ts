import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Alan Ionita',
  authorAddress: '105461667+alanionita@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'scaffold-projen-cdk',
  projenrcTs: true,
  // packageName: "@alanionita/scaffold-projen-cdk",  /* The "name" in package.json. */
  packageManager: javascript.NodePackageManager.NPM,
  releaseToNpm: true,
  repositoryUrl: 'https://github.com/alanionita/scaffold-projen-cdk-ts',
  description: 'Projen template for AWS CDK micro-services',
  peerDeps: ['constructs', 'projen'],
  deps: ['aws-lambda', 'axios'],
  devDeps: ['@types/aws-lambda', '@types/node', 'ts-node'],
});
project.synth();