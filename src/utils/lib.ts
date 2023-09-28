export const scramble = (movieName: string) => {
  const [name] = movieName.split(':')
  const letters = name.replaceAll("'", '').split('')
  console.log({ letters })
  const spaceIndices = letters.flatMap((l, i) => (l === ' ' ? i : []))
  console.log({ spaceIndices })
  const scrambled = letters
    .filter((l) => l !== ' ')
    .sort((_a, _b) => Math.random() - 0.5)

  spaceIndices.forEach((s) => scrambled.splice(s, 0, '  '))

  return scrambled.join('')
}
