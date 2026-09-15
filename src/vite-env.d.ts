/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly WORDPRESS_URL?: string;
  readonly VITE_WORDPRESS_URL?: string;
  readonly WORDPRESS_CONTENT_TYPE?: string;
  readonly WORDPRESS_EXCLUDE_CATEGORY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
