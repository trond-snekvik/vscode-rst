-- SYNTAX TEST "source.rst" "comments"

.. This line is a comment
-- <------ comment.block

.. A line that has the same indentation as a comment.
   Should also be a comment
-- ^^^^^^^^^^^^^^^^^^^^^^^^ comment.block

However... lines that contain ellipses should NOT be a comment.
--      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment.block

..
   multiline comment that starts on the next line
-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ comment.block

   should continue after blank lines
-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ comment.block
   including paragraphs
-- ^^^^^^^^^^^^^^^^^^^^ comment.block

..

   when the first line is blank, it's not a comment
-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment.block

...three dots should not start a comment
-- <------ -comment.block

..also needs spaces after the two dots
-- <------ -comment.block
