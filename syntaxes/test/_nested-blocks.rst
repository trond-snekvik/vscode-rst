-- SYNTAX TEST "source.rst" "nested blocks"

:param: abc
-- <----- -keyword.control

.. note:: aa
-- <--------- keyword.control

  :param: abc
--^^^^^^^ keyword.control

  .. note:: b
--^^^^^^^^^ keyword.control

    .. note:: c
--  ^^^^^^^^^ keyword.control

    .. comment c
--  ^^^^^^^^^^^^ comment.block

  .. comment b
--^^^^^^^^^^^^ comment.block

.. comment a
-- <------------ comment.block
