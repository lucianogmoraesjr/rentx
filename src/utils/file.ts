import fs from 'node:fs';

export const deleteFile = async (fileName: string) => {
  try {
    await fs.promises.stat(fileName);
  } catch {
    return;
  }

  await fs.promises.unlink(fileName);
};
