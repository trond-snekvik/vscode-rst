// SYNTAX TEST "source.rst" "options-list"
// https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#option-lists


-a         Output all.
// <-- variable.parameter
//         ^^^^^^^^^^^ -variable.parameter
-a	Tab before description.
// <-- variable.parameter
//	^^^^^^^^^^^^^^^^^^^^ -variable.parameter

-b         Output both (this description is
// <-- variable.parameter
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter
           quite long).
//         ^^^^^^^^^^^^ -variable.parameter

-c arg     Output just arg.
// <------ variable.parameter
//         ^^^^^^^^^^^^^^^^ -variable.parameter

--long     Output all day long.
// <------ variable.parameter
//         ^^^^^^^^^^^^^^^^^^^^ -variable.parameter

-p         This option has two paragraphs in the description.
// <-- variable.parameter
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter
           This is the first.
//         ^^^^^^^^^^^^^^^^^^ -variable.parameter

           This is the second.  Blank lines may be omitted between
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter
           options (as above) or left in (as here and below).
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

--very-long-option  A VMS-style option.  Note the adjustment for
// <------------------ variable.parameter
//                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter
                    the required two spaces.
//                  ^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

--an-even-longer-option
// <----------------------- variable.parameter
           The description can also start on the next line.
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

-2, --two  This option has two variants.
// <--------- variable.parameter
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

-f FILE, --file=FILE  These two options are synonyms; both have arguments.
// <-------------------- variable.parameter
//                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

/V         A VMS/DOS-style option.
// <-- variable.parameter
//         ^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

+a         An old GNU-style plus option
// <-- variable.parameter
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter


-c <arg>     Angle brackets around argument placeholder.
// <-------- variable.parameter
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -variable.parameter

The decimal module now requires libmpdec-2.5.0. Users of
--with-system-libmpdec should update their system library.
// <---------------------------------------------------------- -variable.parameter
