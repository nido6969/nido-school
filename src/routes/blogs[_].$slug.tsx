import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs_/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/blogs/$blogId",
      params: { blogId: params.slug },
      replace: true,
    });
  },
});
