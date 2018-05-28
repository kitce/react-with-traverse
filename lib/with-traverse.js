import React from 'react';

const withTraverse = (transform) => {
  const traverse = (children, props) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const {children} = child.props;
        return React.cloneElement(child, {}, traverse(children, props));
      }
      return transform(child, props);
    });
  };
  return (props) => {
    const {children} = props;
    return React.Children.count(children) && traverse(children, props);
  };
};

export default withTraverse;
