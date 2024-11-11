# Projen + CDK + Typescript scaffold

> Simple scaffold to generate CDK Typescript apps

## Description

Scaffold project to allow for easier templating of CDK + Typescript projects

Future plan:
. Add folder structure
. Add stack definition examples for most AWS services
    . Lambda
    . S3
    . DDB
    . API Gateway
    . Cognito

## Using

```shell
# Make empty folder
mkdir project

# Create projen project within
cd project

npx projen new tscdkproject --from "@alanionita/scaffold-projen-cdk-ts"

```

## Developing

- [ ] Clone repo
- [ ] Update spec in `.projenrc.ts` - this is where we *add* features
- [ ] Install node packages `npm i`
- [ ] Update project with changes made`projen`
    - Will install deps etc
- [ ] Commit changes
    - CI/CD handles releases to npm

## Authors

- Alan Ionita

## Credits 

- Projen - for `awscdk-app-ts` template

## License

Apache 2.0
