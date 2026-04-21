declare function sql(strings: TemplateStringsArray, ...values: unknown[]): string;

const userId = 7;
const includeDeleted = false;

export function loadUser() {
  return sql`
    select id, email, deleted_at, created_at
    from users
    where id = ${userId}
      and (${includeDeleted} or deleted_at is null)
    order by created_at desc
  `;
}
