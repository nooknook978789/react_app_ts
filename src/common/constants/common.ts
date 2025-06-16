export const HttpMethodConstant = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export type HttpMethodConstant = typeof HttpMethodConstant[keyof typeof HttpMethodConstant];