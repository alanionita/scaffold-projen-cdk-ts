import { synthSnapshot } from 'projen/lib/util/synth';
import { TSCDKProject } from '../src';

describe('TSCDKProject', () => {
  test('project name is set properly', () => {
    // GIVEN
    const project = new TSCDKProject({
      name: 'ts-cdk-project-template',
      defaultReleaseBranch: 'main',
    });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']!.name).toBe(
      'ts-cdk-project-template',
    );
  });
  test('PR template contains prOwner', () => {
    // GIVEN
    const project = new TSCDKProject({
      name: 'my-microservice',
      defaultReleaseBranch: 'main',
    });

    // WHEN
    const snapshot = synthSnapshot(project);
    console.log('snapshot /', snapshot);
    // THEN
    expect(snapshot['.github/pull_request_template.md']).toBe(
      [
        '### What does this PR change?',
        '<!--- Describe your changes in detail -->',
        'cc @alanionita  .',
      ].join('\n'),
    );
  });

  test('PR template contains prMention when provided', () => {
    // GIVEN
    const project = new TSCDKProject({
      name: 'my-microservice',
      defaultReleaseBranch: 'main',
      prMention: 'someoone',
    });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['.github/pull_request_template.md']).toBe(
      [
        '### What does this PR change?',
        '<!--- Describe your changes in detail -->',
        'cc @alanionita, @someoone  .',
      ].join('\n'),
    );
  });

  test('PR template contains prMention when provided - will not double @', () => {
    // GIVEN
    const project = new TSCDKProject({
      name: 'my-microservice',
      defaultReleaseBranch: 'main',
      prMention: '@someoone',
    });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['.github/pull_request_template.md']).toBe(
      [
        '### What does this PR change?',
        '<!--- Describe your changes in detail -->',
        'cc @alanionita, @someoone  .',
      ].join('\n'),
    );
  });
});