declare function sql(strings: TemplateStringsArray, ...values: unknown[]): string;

const userId = 7;

export function loadUser() {
  return sql`
    select id, email, created_at
    from users
    where id = ${userId}
    order by created_at desc
  `;
}
