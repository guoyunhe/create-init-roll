import { Migration } from 'init-roll';

export const migration20231216 = new Migration(20231216, async (migration) => {
  await migration.updatePackageJson(async (oldPkg) => {
    const newPkg = { ...oldPkg };
    return newPkg;
  });
});
