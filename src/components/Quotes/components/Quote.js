import React from 'react';
import ContentEditable from 'react-contenteditable';
import { Icon } from 'semantic-ui-react';

const Quote = ({ listName, quote, onRemoveQuote }) => {
  const { id, text, source, liked } = quote;
  
  return (
    <li className="Quote">
      <ContentEditable
        className="edit-quote"
        ref={(input) => this.listName = input}
        html={`${text} \u2014 ${source}`} 
        disabled={false} 
        onBlur={this.handleBlur}
        onChange={(event) => this.handleChange(event, listName, id)} 
      />
      <Icon
        className="remove-quote"
        name="remove" 
        onClick={() => onRemoveQuote(listName, id)} 
      />
    </li>
  );
};

export default Quote;
