import { github } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';

export interface TSCDKStackOptions extends TypeScriptProjectOptions {
  readonly prMention?: string;
}

export class TSCDKProject extends TypeScriptProject {
  readonly prOwner: string = '@alanionita';

  constructor(options: TSCDKStackOptions) {
    super({
      ...options,
      pullRequestTemplate: false,
    });

    this.makePRTemplate(options);
  }
  protected makePRTemplate(options: TSCDKStackOptions) {
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
}