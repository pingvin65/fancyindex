# fancyindex
## one way of installation on Debian, Ubuntu ...
#### clone git
git clone https://github.com/pingvin65/fancyindex.git
#### change directory
cd fancyindex/
#### move the directory to the required location
mv includeheader4/ /var/www/
##### if necessary use sudo
sudo mv includeheader4/ /var/www/
##configure Apache2
#### creating a folder
sudo mkdir /etc/apache2/include
#### move the file to /etc/apache2/include
sudo mv fancyindex.conf /etc/apache2/include
#### add a line to the bottom of the file 000-default.conf

