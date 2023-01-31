export const getReadingTime = (body: string) => {
  const wordCount = body.split(' ').length;
  const readingSpeed = 200;
  const readingTime = Math.ceil(wordCount / readingSpeed);

  return readingTime;
};
