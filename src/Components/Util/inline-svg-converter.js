export default (base64String) => {
  return atob(base64String.split(',')[1])
}
