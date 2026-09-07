/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly WORDPRESS_URL?: string;
  readonly VITE_WORDPRESS_URL?: string;
  readonly WORDPRESS_CONTENT_TYPE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
