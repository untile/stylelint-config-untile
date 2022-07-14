
/**
 * Normalized css properties.
 *
 * Alphabetical order of properties provided by the w3c list of all css
 * properties. https://www.w3.org/Style/CSS/all-properties.en.json
 */

const cssProperties = require('./w3c-css-properties.json');
const w3cList = [...new Set(cssProperties.map(({ property }) => property))];

/**
 * Export configuration preset.
 */

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  plugins: ['stylelint-order'],
  processors: [
    ['stylelint-processor-styled-components', {
      parserPlugins: [
        'jsx',
        'objectRestSpread',
        ['decorators', { decoratorsBeforeExport: true }],
        'classProperties',
        'exportExtensions',
        'asyncGenerators',
        'functionBind',
        'functionSent',
        'dynamicImport',
        'optionalCatchBinding',
        'optionalChaining',
        'nullishCoalescingOperator'
      ]
    }]
  ],
  rules: {
    'alpha-value-notation': 'number',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'function-calc-no-invalid': true,
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-whitespace-after': 'always',
    indentation: 2,
    'length-zero-no-unit': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'order/properties-order': w3cList,
    'property-case': 'lower',
    'rule-empty-line-before': [
      'always-multi-line', {
        except: 'first-nested',
        ignore: 'after-comment'
      }
    ],
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-no-unknown': [true, {
      ignoreTypes: ['/-styled-mixin/', '$dummyValue']
    }],
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': ['lower', {
      ignoreKeywords: ['dummyValue']
    }]
  }
};
