import { cdk, javascript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new cdk.JsiiProject({
  // packageName: "@alanionita/scaffold-projen-cdk",  /* The "name" in package.json. */
  author: 'Alan Ionita',
  authorAddress: '105461667+alanionita@users.noreply.github.com',
  bundledDeps: ['aws-lambda', 'axios'],
  defaultReleaseBranch: 'main',
  description: 'Projen template for AWS CDK micro-services',
  devDeps: ['@types/aws-lambda', '@types/node', 'ts-node'],
  githubOptions: {
    mergify: false,
  },
  jsiiVersion: '~5.5.0',
  name: 'scaffold-projen-cdk',
  npmAccess: NpmAccess.PUBLIC,
  npmProvenance: false,
  packageManager: javascript.NodePackageManager.NPM,
  peerDeps: ['constructs', 'projen'],
  projenrcTs: true,
  releaseToNpm: true,
  repositoryUrl: 'https://github.com/alanionita/scaffold-projen-cdk-ts',
});

const exclusions: string[] = ['.env'];
project.gitignore.exclude(...exclusions);
project.npmignore!.exclude(...exclusions);

project.synth();