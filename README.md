# StringService
A simple Angular service for string manipulations

Available methods:

Method | Comments | Examples
------ | -------- | --------
format | Based on .NET `string.Format` | `stringService.format('Hello {0}{1}', 'world', '!')`
isNumeric | Tests whether a string contains a valid number | `stringService.isNumeric('42')` **true**<br />`stringService.isNumeric('3.141')` **true**<br />`stringService.isNumeric('9A')` **false**</td>
contains | Tests whether a substring is contained within another string | `stringService.contains('Hello', 'Hell')` **true** `stringService.contains('abcdefg', 'abcba')` **false**
startsWith | Tests whether a string starts with a particular substring | `stringService.startsWith('Hello', 'Hell')` **true** `stringService.startsWith('Hello', 'ello')` **false**
