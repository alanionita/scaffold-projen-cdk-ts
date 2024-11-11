# Project - CDK, Projen, Typescript

> 

...

## Background

...

## Description

Architecture:
...

Features:

...

Tech stories:

...


Differences from original
... 

Future plans:
...

## Usage

### Pre-requisites

OS-level installs
- aws-cli (AWS tooling)
    - [ ] Install it on local machine
    - [ ] Create an account using IAM in the AWS Console
    - [ ] Configure the aws cli with `aws configure` and the above account
        - Project will use default local account, but can be given other accounts via `--profile $CUSTOM` flag 
- volta (Node tooling)
    - [ ] Install in on local machine
    - [ ] Install Node v20
- Postman
    - For API testing

Configuration
- CDK bootstrap
    - run `cdk bootstrap aws://$ACCOUNT_NO/$REGION --verbose` to bootstap CDK

### Developing

- [ ] Clone repo
    - Update names in `.projenrc.ts`
- [ ] Install node packages `npm i`
- [ ] Synthesize the project with `projen synth`
- [ ] Build project with `projen build`
- [ ] Test project with `projen test`
- [ ] Deploy (after green outputs from above)
    - `projen deploy`
    - Deployment will output the apiEndpoint or URL
- [ ] Destroy
    - `project destroy`

### Using

...

Output sample:

```json

```


## Authors

- Alan Ionita

## Credits 

- Projen - for `awscdk-app-ts` template

## License

Apache 2.0
