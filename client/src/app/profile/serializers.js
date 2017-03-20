export function editSerializer (formData) {
  return {
    email: formData.email,
    first_name: formData.first_name,
    last_name: formData.last_name
  }
}
