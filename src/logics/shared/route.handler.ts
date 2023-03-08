import router from '../../resources/router'

export const goToPath = (path: string) => {
  console.log(router)
  router.push(path)
}

export const returnToPreviousRoute = () => {
  router.back()
}
