declare function sql(strings: TemplateStringsArray, ...values: unknown[]): string;

export function loadUser() {
  return sql`
    select id, email, deleted_at, created_at
    from users
    where status = 'active'
    order by created_at desc
  `;
}
