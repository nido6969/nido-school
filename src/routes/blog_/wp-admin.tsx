import { createFileRoute, redirect } from "@tanstack/react-router";
import { wordpressAdminUrl } from "@/lib/wordpress";

export const Route = createFileRoute("/blog_/wp-admin")({
  beforeLoad: () => {
    throw redirect({ href: wordpressAdminUrl() });
  },
});
