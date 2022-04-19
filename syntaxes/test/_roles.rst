-- SYNTAX TEST "source.rst" "roles"

This line contains a :ref:`reference_label`
--                   ^^^^^ keyword.control
--                         ^^^^^^^^^^^^^^^ entity.name.tag

This line contains a :cpp:func:`reference_label`
--                   ^^^^^ keyword.control
--                             ^^^^^^^^^^^^^^^^^ entity.name.tag

This line contains a :ref:`reference <reference_label>`
--                   ^^^^^ keyword.control
--                                   ^^^^^^^^^^^^^^^^^ markup.underline.link

This line contains a :cpp:ref:`reference <reference_label>`
--                   ^^^^^^^^^ keyword.control
--                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ entity.name.tag