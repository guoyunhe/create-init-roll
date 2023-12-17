import { Migration } from 'init-roll';

export const migration20231216 = new Migration(20231216, async (migration) => {
  await migration.updatePackageJson(async (oldPkg) => {
    const newPkg = { ...oldPkg };
    if (!newPkg.dependencies) {
      newPkg.dependencies = {};
    }
    newPkg.dependencies['init-roll'] = '1.x';
    newPkg.dependencies['commander'] = '11.x';
    return newPkg;
  });
});
