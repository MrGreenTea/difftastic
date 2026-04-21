declare function sql(strings: TemplateStringsArray, ...values: unknown[]): string;

export function loadUser() {
  return sql`
    select id, email, created_at
    from users
    where deleted_at is null
    order by created_at desc
  `;
}
