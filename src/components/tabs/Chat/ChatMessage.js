import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Format message content with line breaks
  const formatContent = (content) => {
    return content.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };
  
  // Render product recommendations if available
  const renderRecommendations = () => {
    if (!message.recommendations) return null;
    
    return (
      <div className="mt-4 space-y-3">
        <p className="font-medium text-gray-700">Recommended Products:</p>
        <div className="grid grid-cols-1 gap-2">
          {message.recommendations.map(product => (
            <div 
              key={product.id} 
              className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.manufacturer}</p>
                </div>
                <Badge color="blue">{product.type.replace('-', ' ')}</Badge>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-gray-600">
                <div>Flow: {product.flowRate} GPM</div>
                <div>Head: {product.head} ft</div>
                <div>Eff: {product.efficiency}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] ${isBot ? 'order-2' : 'order-1'}`}>
        <div className="flex items-center mb-1">
          {isBot ? (
            <>
              <div className="font-medium text-blue-600 mr-2">ProcurAI Assistant</div>
              <Badge color="blue" size="sm">AI</Badge>
            </>
          ) : (
            <div className="font-medium text-gray-600">You</div>
          )}
          <div className="text-xs text-gray-500 ml-2">{formatTime(message.timestamp)}</div>
        </div>
        
        <Card 
          className={`p-3 ${isBot 
            ? 'bg-blue-50 border-blue-100' 
            : 'bg-gray-50 border-gray-100'}`}
        >
          <div className="text-sm">
            {formatContent(message.content)}
          </div>
          {renderRecommendations()}
        </Card>
      </div>
    </div>
  );
};

export default ChatMessage;