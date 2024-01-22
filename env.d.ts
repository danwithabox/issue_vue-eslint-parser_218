/// <reference types="vite/client" />

// This file is an augmentation to the built-in ImportMeta interface
// Thus cannot contain any top-level imports
// <https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation>
// However, it can utilize import() types: https://devblogs.microsoft.com/typescript/announcing-typescript-2-9-rc/#import-types

interface ImportMetaEnv {
    // env vars, prefix with "VITE_"
}

interface ImportMeta {
    readonly env: ImportMetaEnv,
}
