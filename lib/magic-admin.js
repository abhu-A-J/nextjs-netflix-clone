import { Magic } from '@magic-sdk/admin';

function createMagicAdmin() {
  return new Magic(process.env.MAGIC_SDK_ADMIN);
}

export const magicAdmin = createMagicAdmin();
