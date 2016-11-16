export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Vanclei Matheus',
        avatar: 'https://avatars2.githubusercontent.com/u/9286434?v=3&s=460',
        uid: 'vancleimatheus',
      })
    }, 2000)
  })
}