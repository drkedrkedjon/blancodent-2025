// Layout only for 404 page. Iy just passes children to the page.

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function NotFoundLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return children;
}
