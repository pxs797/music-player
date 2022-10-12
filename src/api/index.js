import { request } from "@/utils/request";

export const getCategories = async () => {
  const data = await request('browse/categories?locale=sv_SE', 'GET')
  return data.categories.items
}

export const getCategory = async (id) => {
  const data = await request(`browse/categories/${id}`, 'GET')
  return data
}