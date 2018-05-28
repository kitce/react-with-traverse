import PropTypes from 'prop-types';
import React from 'react';
import withTraverse from '../../lib';

const highlight = (child, props) => {
  const {disabled} = props;
  if (disabled || !isString(child)) return child;
  const regex = getRegex(props);
  const parts = child.split(regex).filter(Boolean);
  return parts.map((part) => {
    if (regex.test(part)) {
      return (
        <span className="highlight">
          {part}
        </span>
      );
    }
    return part;
  });
};

/**
 * Helper functions
 */
function getRegex (props) {
  const {keywords, caseInsensitive} = props;
  const full = keywords.join('|');
  const flags = caseInsensitive ? 'i' : undefined;
  return new RegExp(`(${full})`, flags);
}

function isString (value) {
  return typeof value === 'string';
}

const Highlight = withTraverse(highlight);

Highlight.displayName = 'Highlight';

Highlight.defaultProps = {
  disabled : false,
  keywords : [],
  caseInsensitive : false
};

Highlight.propTypes = {
  disabled : PropTypes.bool,
  keywords : PropTypes.arrayOf(PropTypes.string),
  caseInsensitive : PropTypes.bool
};

export default Highlight;
