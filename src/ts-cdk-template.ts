import { github, DependencyType, SampleDir, SampleDirOptions } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';

export interface TSCDKOptions extends TypeScriptProjectOptions {
  readonly prMention?: string;
}

export class TSCDKProject extends TypeScriptProject {
  readonly prOwner: string = '@alanionita';

  constructor(options: TSCDKOptions) {
    super({
      ...options,
      pullRequestTemplate: false,
    });

    this.makePRTemplate(options);
    this.makeSampleMain();
    this.compileTask.exec("cp src/template/* src/*");
  }
  protected makePRTemplate(options: TSCDKOptions) {
    const lines = [
      '### What does this PR change?',
      '<!--- Describe your changes in detail -->',
    ];

    const ccUsers = [`@${this.prOwner?.replace('@', '')}`];
    if (options.prMention) {
      ccUsers.push(`@${options.prMention.replace('@', '')}`);
    }

    lines.push(`cc ${ccUsers.join(', ')}  .`);

    new github.PullRequestTemplate(this.github!, {
      lines: lines,
    });

  }

  protected makeSampleMain() {
    const options: SampleDirOptions = {
      files: {
        "main.ts": "export * from './lib';",
      },
    };
    new SampleDir(this, "src", options)
  }
}