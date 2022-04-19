-- SYNTAX TEST "source.rst" "links"

This line has an `inline <https://github.com>`_ link
--               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ entity.name.tag

There are `one <a.html>`_ or `two <b.html>`_ ways to approach this
--        ^^^^^^^^^^^^^^^ entity.name.tag
--                       ^^^^ -entity.name.tag
--                           ^^^^^^^^^^^^^^^ entity.name.tag

This is a `named`_ link
--        ^^^^^^^^ entity.name.tag

Here is a `named`_ link, followed by `another`_
--        ^^^^^^^^ entity.name.tag
--                                   ^^^^^^^^^^ entity.name.tag
--                ^^^^^^^^^^^^^^^^^^^ -entity.name.tag

.. _named: https://example.com
-- ^^^^^^^ entity.name.tag.anchor