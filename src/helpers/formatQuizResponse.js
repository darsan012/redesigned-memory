export function formatQuiz(rawData) {
  // Split questions by double line breaks
  const questionsAndAnswers = rawData.split('\n\n');

  // Extract answer key
  const answerKeyMatch = rawData.match(/Answer Key: (.*)/);
  const answerKey = answerKeyMatch
    ? answerKeyMatch[1].split(', ').reduce((acc, ans) => {
        const [qNum, option] = ans.split('-');
        acc[qNum.trim()] = option.trim();
        return acc;
      }, {})
    : {};

  // Format questions
  const questions = questionsAndAnswers.map((q) => {
    const questionMatch = q.match(/^(\d+)\.\s\*\*(.*?)\*\*/);
    if (!questionMatch) return null;

    const questionNumber = questionMatch[1];
    const questionText = questionMatch[2];

    // Extract options
    const options = {};
    const optionLines = q.split('\n').filter((line) => line.trim().match(/^[a-d]\)/));
    optionLines.forEach((line) => {
      const [key, ...value] = line.trim().split(') ');
      options[key] = value.join(')').trim();
    });

    // Map answer from the answer key
    const answer = answerKey[questionNumber];

    return {
      question: questionText,
      options,
      answer,
    };
  }).filter(q => q !== null);

  return { questions };
}
