-- SYNTAX TEST "source.rst" "footnotes"

This line contains an explicitly numbered footnote reference [1]_
--                                                           ^^^^ entity.name.tag

This line contains an anonymous auto numbered footnote reference [#]_
--                                                               ^^^^ entity.name.tag

This line contains a citation reference [CIT2020]_
--                                      ^^^^^^^^^^ entity.name.tag

This [example] however is not highlighted as a footnote
--   ^^^^^^^^^ -entity.name.tag

.. [1] Footnote definition
-- <-- entity.name.tag

.. [#test] Another definiton
-- <------ entity.name.tag
