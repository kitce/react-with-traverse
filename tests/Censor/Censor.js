import first from 'lodash/first';
import last from 'lodash/last';
import repeat from 'lodash/repeat';
import PropTypes from 'prop-types';
import withTraverse from '../../lib';

const _censor = (child, props) => {
  const {disabled} = props;
  if (disabled || !isString(child)) return child;
  const regex = getRegex(props);
  const parts = child.split(regex).filter(Boolean);
  return parts.map((part) => {
    if (regex.test(part)) {
      return censor(part, props);
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

function censor (string, props) {
  const {replacement} = props;
  const {length} = string;
  const _first = first(string);
  const _last = last(string);
  const middle = repeat(replacement, length - 2);
  return `${_first}${middle}${_last}`;
}

const Censor = withTraverse(_censor);

Censor.displayName = 'Censor';

Censor.defaultProps = {
  disabled : false,
  keywords : [],
  replacement : '*',
  caseInsensitive : false
};

Censor.propTypes = {
  disabled : PropTypes.bool,
  keywords : PropTypes.arrayOf(PropTypes.string),
  replacement : PropTypes.string,
  caseInsensitive : PropTypes.bool
};

export default Censor;
