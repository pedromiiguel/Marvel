import md5 from 'md5'

export function generateHash(time: number) {
  const hash = md5(
    time +
      '48e7edc470a9df550b11db6f8aa3e799f103af22' +
      '22246f953045df9a0cdf31a81e7945a7'
  )

  return hash
}
