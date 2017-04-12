const getValue = require('../util/getValue');

const listItemPrefixPattern = /^\*\s?/;
const plainListItemPattern = /\*\s?([:=\(\),#}\{-\|\[\]\w\d\s.]+)/g;

const plainListGlobalPattern = /\{\{p?P?lainlist\s?\|([^\}\}]+)\}\}/g;

module.exports = {
  globalPattern: plainListGlobalPattern,
  parsePattern: plainListItemPattern,
  parse: listItems => {
    return listItems
      .map(item => item.replace(listItemPrefixPattern, ''))
      .map(getValue)
      .filter(value => value.length);
  },
  variable: 'PLAIN_LIST',
  name: 'plainLists',
};
