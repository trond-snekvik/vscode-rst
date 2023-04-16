# v1.5.3 Comments and headings fixes

- Empty top level directives no longer break the header indexer
- Block comments without a space after the `..` are no longer recognized.
- Empty comments don't cause indented text to be highlighted as comments

Fixes https://github.com/trond-snekvik/vscode-rst/issues/24
Fixes https://github.com/trond-snekvik/vscode-rst/issues/25
Fixes https://github.com/trond-snekvik/vscode-rst/issues/31
Fixes https://github.com/trond-snekvik/vscode-rst/issues/32

Thanks to @lextm, @ssbarnea and @Xeverous for contributions to issue tracking.
Thanks to @alcarney for contributing a test suite.
Thanks to @sgryjp for fixing the empty top level directories.

# v1.5.2 Code directive fixes

- Fixes C++ `code-block` directive not being detected
- Recognize `code` directive.

Fixes https://github.com/trond-snekvik/vscode-rst/issues/27
Fixes https://github.com/trond-snekvik/vscode-rst/issues/28

Thanks to @R1dO for reports and fixes.

# v1.5.1 Highlight tweaks

- Removes ` and | from bracket types, preventing the bracket pair colorizer from breaking
- Only highlight numbers if they're not part of a larger word
- Highlight `doctest` blocks as python code

Fixes https://github.com/trond-snekvik/vscode-rst/issues/16
Fixes https://github.com/trond-snekvik/vscode-rst/issues/18
Fixes https://github.com/trond-snekvik/vscode-rst/issues/19

# v1.5.0 Highlighting accuracy improvements

- Adds ^, :, ", _ and ' to the list of characters that are recognized as headers
- Checking LeXtudio's extension version before disabling symbol provider
- Fix issues with directives ending too early
- Use more commonly available symbols for directives, block parameters and inline monospace strings

Fixes https://github.com/trond-snekvik/vscode-rst/issues/12.
Fixes https://github.com/trond-snekvik/vscode-rst/issues/13.
Fixes https://github.com/trond-snekvik/vscode-rst/issues/14.
Fixes https://github.com/trond-snekvik/vscode-rst/issues/15.

# v1.4.0 Compatibility with LeXtudio's extension

- Changes the reStructuredText language identifier to `restructuredtext`
- Removes `*` from autoclosing pairs
- Disables the symbol provider if the LeXtudio extension is installed


Fixes https://github.com/trond-snekvik/vscode-rst/issues/7.
Fixes https://github.com/trond-snekvik/vscode-rst/issues/8.


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
