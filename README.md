# fancyindex
fancyindex
![image](https://github.com/pingvin65/fancyindex/blob/master/fancyindex.png?raw=true)



### One solution

#### debian, ubuntu or similar

Copy fancyindex.conf to directory /etc/apache2/conf-available/

```cmd
sudo cp fancyindex.conf /etc/apache2/conf-available/
```

Copy autoindex.conf to e.g. autoindex.conf.back and then open autoindex.conf and make changes as shown below

```
<IfModule mod_autoindex.c>
	# Directives controlling the display of server-generated directory listings.

	#
	# IndexOptions: Controls the appearance of server-generated directory
	# listings.
	# Remove/replace the "Charset=UTF-8" if you don't use UTF-8 for your filenames.
#	IndexOptions FancyIndexing VersionSort HTMLTable NameWidth=* DescriptionWidth=* Charset=UTF-8

	#
	# AddIcon* directives tell the server which icon to show for different
	# files or filename extensions.  These are only displayed for
	# FancyIndexed directories.
#	AddIconByEncoding (CMP,/icons/compressed.gif) x-compress x-gzip x-bzip2

#	AddIconByType (TXT,/icons/text.gif) text/*
#	AddIconByType (IMG,/icons/image2.gif) image/*
#	AddIconByType (SND,/icons/sound2.gif) audio/*
#	AddIconByType (VID,/icons/movie.gif) video/*

#	AddIcon /icons/binary.gif .bin .exe
#	AddIcon /icons/binhex.gif .hqx
#	AddIcon /icons/tar.gif .tar
#	AddIcon /icons/world2.gif .wrl .wrl.gz .vrml .vrm .iv
#	AddIcon /icons/compressed.gif .Z .z .tgz .gz .zip
#	AddIcon /icons/a.gif .ps .ai .eps
#	AddIcon /icons/layout.gif .html .shtml .htm .pdf
#	AddIcon /icons/text.gif .txt
#	AddIcon /icons/c.gif .c
#	AddIcon /icons/p.gif .pl .py
#	AddIcon /icons/f.gif .for
#	AddIcon /icons/dvi.gif .dvi
#	AddIcon /icons/uuencoded.gif .uu
#	AddIcon /icons/script.gif .conf .sh .shar .csh .ksh .tcl
#	AddIcon /icons/tex.gif .tex
	# It's a suffix rule, so simply matching "core" matches "score" as well !
#	AddIcon /icons/bomb.gif /core
#	AddIcon (SND,/icons/sound2.gif) .ogg
#	AddIcon (VID,/icons/movie.gif) .ogm

#	AddIcon /icons/back.gif ..
#	AddIcon /icons/hand.right.gif README
#	AddIcon /icons/folder.gif ^^DIRECTORY^^
#	AddIcon /icons/blank.gif ^^BLANKICON^^

	# Default icons for OpenDocument format
	AddIcon /icons/odf6odt-20x22.png .odt
	AddIcon /icons/odf6ods-20x22.png .ods
	AddIcon /icons/odf6odp-20x22.png .odp
	AddIcon /icons/odf6odg-20x22.png .odg
	AddIcon /icons/odf6odc-20x22.png .odc
	AddIcon /icons/odf6odf-20x22.png .odf
	AddIcon /icons/odf6odb-20x22.png .odb
	AddIcon /icons/odf6odi-20x22.png .odi
	AddIcon /icons/odf6odm-20x22.png .odm

	AddIcon /icons/odf6ott-20x22.png .ott
	AddIcon /icons/odf6ots-20x22.png .ots
	AddIcon /icons/odf6otp-20x22.png .otp
	AddIcon /icons/odf6otg-20x22.png .otg
	AddIcon /icons/odf6otc-20x22.png .otc
	AddIcon /icons/odf6otf-20x22.png .otf
	AddIcon /icons/odf6oti-20x22.png .oti
	AddIcon /icons/odf6oth-20x22.png .oth

	#
	# DefaultIcon is which icon to show for files which do not have an icon
	# explicitly set.
#	DefaultIcon /icons/unknown.gif

	#
	# AddDescription allows you to place a short description after a file in
	# server-generated indexes.  These are only displayed for FancyIndexed
	# directories.
	# Format: AddDescription "description" filename
	#AddDescription "GZIP compressed document" .gz
	#AddDescription "tar archive" .tar
	#AddDescription "GZIP compressed tar archive" .tgz

	#
	# ReadmeName is the name of the README file the server will look for by
	# default, and append to directory listings.
	#
	# HeaderName is the name of a file which should be prepended to
	# directory indexes
#	ReadmeName README.html
#	HeaderName HEADER.html

	#
	# IndexIgnore is a set of filenames which directory indexing should ignore
	# and not include in the listing.  Shell-style wildcarding is permitted.
	IndexIgnore .??* *~ *# RCS CVS *,v *,t

</IfModule>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

```cmd
sudo a2enmod alias 
sudo a2enmod autoindex 
sudo a2enmod include 
sudo systemctl restart apache2.service 
```

In my case it was enough, in yours probably but not 100% sure.

### You can make your own version if you go to the includeheader4 directory
```cmd
cd includeheader4
```

### run dev server 

```
yarn start
```

If everything is OK, the default web browser should open



### run the command to build your version of fancyindex

```cmd
yarn build
```