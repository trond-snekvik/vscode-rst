-- SYNTAX TEST "source.rst" "inline markup"

This line has **bold** text
--            ^^^^^^^^ markup.bold

This is ** invalid** bold text
--      ^^^^^^^^^^^^ -markup.bold

**Note** this should be bold
-- <-------- markup.bold

Here are **multiple** bold **texts** on one line
--       ^^^^^^^^^^^^ markup.bold
--                   ^^^^^^ -markup.bold
--                         ^^^^^^^^^ markup.bold

This line has *italic* text
--            ^^^^^^^^ markup.italic

This is * invalid* italic text
--      ^^^^^^^^^^ -markup.italic

*Note* this should be italic
-- <------ markup.italic

Here are *multiple* italic *texts* on one line
--       ^^^^^^^^^^ markup.italic
--                 ^^^^^^^^ -markup.italic
--                         ^^^^^^^ markup.italic

This line has ``inline`` code
--            ^^^^^^^^^^ string.interpolated

This `` literal`` is invalid
--   ^^^^^^^^^^^^ -string.interpolated

Here is ``some`` inline ``code``
--      ^^^^^^^^ string.interpolated
--              ^^^^^^^^ -string.interpolated
--                      ^^^^^^^^ string.interpolated

Here is ``some`thing`` tricky to ``handle``
--      ^^^^^^^^^^^^^^ string.interpolated
--                    ^^^^^^^^^^^ -string.interpolated
--                               ^^^^^^^^^^ string.interpolated