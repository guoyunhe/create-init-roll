import { Template } from 'init-roll';
import { join } from 'path';
import { migration20231216 } from './migrations/20231216';

export async function createInitRoll(project: string | null) {
  const projectFullPath = project ? join(process.cwd(), project) : process.cwd();

  const template = new Template(projectFullPath, 'create-init-roll', 'create-init-roll');
  template.addMigration(migration20231216);
}
