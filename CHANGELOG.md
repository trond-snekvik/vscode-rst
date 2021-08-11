# v1.3.0: Sphinx domains

- Adds support for Sphinx domains.
  - The following directives will now get language specific syntax highlighting:
    - `.. cpp:xyz::`
    - `.. c:xyz::`
    - `.. py:xyz::`
    - `.. js:xyz::`
- Removed auto indent when jumping from a `***` based heading underline
- Now requiring at least one letter, number or underscore for VS Code to consider a chunk of text a word
  - Prevents VS Code from suggesting autocompletions for `---` heading underlines.
- Support for all markup inside non-literal directives.
- Minor fixes to detection for comments, inline markup and directive indentation.

Fixes https://github.com/trond-snekvik/vscode-rst/issues/4.


# v1.2.0 Autoclosing braces and workspace trust

Fixes unwanted injection of backticks and `|`, and marks the extension as safe for untrusted workspaces.

Fixes https://github.com/trond-snekvik/vscode-rst/issues/2.
Fixes https://github.com/trond-snekvik/vscode-rst/issues/3.

# v1.1.0 Fix inline markup

Fixes some glitches in inline markup, as described in https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html.

Fixes https://github.com/trond-snekvik/vscode-rst/issues/1.

# v1.0.0 Initial release
