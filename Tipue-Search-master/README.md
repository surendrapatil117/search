Tipue Search
============

Tipue Search is a site search engine jQuery plugin. Tipue Search only needs a browser that supports jQuery. It doesn't need MySQL, PHP or similar. In Static mode it doesn't even need a web server.

To get started, see <http://www.tipue.com/search/>. There's a demo at <http://www.tipue.com/search/demos/static/>.

Documentation
-------------

There's full documentation at <http://www.tipue.com/search/docs/>.

Copyright and license
---------------------

Tipue Search Copyright (c) 2015-2016 Tipue, under the The MIT License.

What's New in Version 6.0
-------------------------

Tipue Version 6.0
Contributed by: Michael Milette, <http://www.tngconsulting.ca/>
Date: 2016-07-16

New Features

* Whole words searches is now the default. Set *wholewordonly* to false to get original behaviour.
* New Wildcard: You can now use a leading and/or trailing asterisk (*) multi-character wildcard in search terms to find substrings in results.
* New Wildcard: You can now use a question mark (?) as a single wildcard to replace a single character.
* Multiple quoted terms: Search terms can now include any number and combination of quoted or non-quoted strings and appear in any order.
* Match Any/All Terms: Options now appear in the search form to specify whether you want to ensure all terms especified appear in each search result. The default is Any Terms which can be changed by setting *allterms* to true ensures only listing of results which contain all of the specified search terms.
* Search terms per page: You can now specify the number of search results to be displayed per page of search results. The default is 10 which can be changed by setting *size* to a different integer value. Reminder: Be sure to make sure your default value is amongst those included in the select options list.

* Numbered results: Result titles will now be numbered if you set *listtype* to 'numeric'. The default is 'normal'.
* Highlighting: Search terms found in the title are now highlighted in search results.
* Context: Context now shows first search term found within content. May also show others if nearby.
* Search duration: Setting *duration* to true will now display the time it took to complete the search in seconds at the end of the search results listing.

* Page navigation buttons: You can now specify the maximum number of page index buttons that will appear at the bottom of the page. The default is 3 page button in addition to the first, previous, next and last buttons. This default can be changed by setting the *maxindex* value to an integer. If there are more buttons, the current page will be listed within a span of maxindex buttons. If there are less pages than maxindex, less buttons will be displayed. If there is only one page, no page navigation will appear in the footer.
* Page navigation buttons: Made all page buttons are now links that you can tab into using the keyboard for accessibility.
* Page navigation - new first and last buttons: Added a << and >> button to the page navigation to skip to first or last page.

* HTML: Embedded the progress animation image in search.html so that it appears in the page before the JavaScripts (including the string index) are loaded.
* HTML: Moved loading of Javascript to the bottom of the HTML page on Search pages to make loading feel more responsive.
* HTML: Added online help to search pages.

* Now includes example of how to translate Tipue UI into a different language. See Tipue-Search/demo/static-fr for example of a French translation. Note: Indexed content is still in English.

* Integrated <https://github.com/Tipue/Tipue-Search/pull/12>
  You can now set variables queryParamName (default: q) and resultsDivID (default: #tipue_search_content).
  This allows for flexibility in the case of Drupal output names/IDs, which are difficult to change.

Bug Fixes

* Search terms are now escaped so that special regex characters are now treated as normal characters.
* The word "Score", displayed in debug mode, is no longer hard coded so that it can be translated.
* HTML: Now includes a local copy of jQuery (MIT license) to allow Tipue to work offline.
* Applied code optimization for better responsive performance.

Installation Tips
-----------------

You can generate a compatible static mode index file, tipuesearch_content.js, for your static HTML pages using another open source NodeJS script called StaticIndexer written by MaxBittker MaxBittker:
<https://github.com/MaxBittker/StaticIndexer>

If you seem to be getting what appears to be garbage characters instead of accented characters in the resulting tipue_search_content.js file, you may need to first convert the HTML files to UTF-8 before processing them through the StaticIndexer script. If you have a lot of files to be converted to UTF-8, you can use the following Python script in Notepad++:
<https://github.com/michael-milette/BatchUTF8>

There are several projects which integrate Tipue Search with various static site generators including but not limited to: Jekyll, Webgen, Pelican, Middleman, Wintersmith, Pretzel, Lavarel and more. For more information, see:
<https://github.com/search?utf8=%E2%9C%93&q=tipue>
<https://www.google.ca/search?q=tipue+jekyll>

To highlight search terms and automatically scroll down to the first search result in the content page linked from the search results, see the [highlightJS](https://github.com/michael-milette/highlightjs/) project.

Future
------

The following is a list of potential enhancements for Tipue Search which could be implemented in the future:

* Enhancement - Give priority weight to first search terms listed to add more control of results by order of terms.
* Enhancement - Treat accented characters the same as their non-accented equivalent.
* Known issue - Working example pages may not be 100% compliant with WCAG 2.0 accessibility guidelines.
* Known issue - Working examples may appear different when viewed offline since online Google fonts are not available.
* Known issue - Highlighted search terms currently include nearby punctuation.
  Tip: Regex \b word boundaries don't currently correctly handle accented characters.