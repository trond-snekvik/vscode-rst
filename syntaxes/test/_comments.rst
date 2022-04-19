-- SYNTAX TEST "source.rst" "comments"

.. This line is a comment
-- <------ comment.block

.. A line that has the same indentation as a comment.
   Should also be a comment
-- ^^^^^^^^^^^^^^^^^^^^^^^^ comment.block

However... lines that contain ellipses should NOT be a comment.
--      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment.block