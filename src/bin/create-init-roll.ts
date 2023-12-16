#!/usr/bin/env node

import { Command } from 'commander';
import { createInitRoll } from '..';

const program = new Command('create-init-roll');

program
  .argument('[project]', 'Project folder to create or migrate. If not provided, use cwd.')
  .action(createInitRoll);

program.helpOption('-h, --help', 'Show full help');

program.version(PACKAGE_VERSION, '-v, --version', 'Show version number');

program.parse();
