import { javascript, awscdk } from 'projen';
import { AwsCdkTypeScriptAppOptions } from 'projen/lib/awscdk';
import { NpmAccess } from 'projen/lib/javascript';

const options: AwsCdkTypeScriptAppOptions = {
  authorName: 'Alan Ionita',
  authorEmail: '105461667+alanionita@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  description: 'Projen template for AWS CDK micro-services',
  deps: ['aws-lambda', 'axios', 'aws-cdk-lib'],
  devDeps: ['@types/aws-lambda', '@types/node', 'ts-node'],
  githubOptions: {
    mergify: false,
  },
  name: 'scaffold-projen-cdk',
  npmAccess: NpmAccess.PUBLIC,
  npmProvenance: false,
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@alanionita/scaffold-projen-cdk-ts',
  projenrcTs: true,
  release: true,
  releaseToNpm: true,
  repository: 'https://github.com/alanionita/scaffold-projen-cdk-ts',
}

const exclusions: string[] = ['.env'];

// Initialise the project
const project = new awscdk.AwsCdkTypeScriptApp(options);

project.gitignore.exclude(...exclusions);
project.npmignore!.exclude(...exclusions);

project.synth();
