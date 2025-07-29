import React from 'react';

const SuggestedQuestions = ({ questions, onSelectQuestion, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex space-x-2 overflow-x-auto py-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="bg-gray-100 animate-pulse rounded-full h-8 w-48 flex-shrink-0"
          ></div>
        ))}
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div className="flex space-x-2 overflow-x-auto py-2">
      {questions.map((question, index) => (
        <button
          key={index}
          onClick={() => onSelectQuestion(question)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors"
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;