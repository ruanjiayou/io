const data = new Map();

data.set('FFD8FF', 'jpg');   //JPEG(jpg)
data.set('89504E47', 'png'); //PNG(png)
data.set('6D6F6F76', 'mov'); //Quicktime (mov)  
data.set('FF575043', 'wpd'); //WordPerfect (wpd)       
data.set('2142444E', 'pst'); //Outlook (pst)      
data.set('AC9EBD8F', 'qdf'); //Quicken (qdf)     
data.set('E3828596', 'pwl'); //Windows Password (pwl)         
data.set('2E7261FD', 'ram'); //Real Audio (ram)     
data.set('CFAD12FEC5FD746F', 'dbx'); //Outlook Express (dbx) 
data.set('47494638396126026f01', 'gif'); //GIF (gif)     
data.set('49492a00227105008037', 'tif'); //TIFF (tif)     
data.set('424d228c010000000000', 'bmp'); //16色位图(bmp)     
data.set('424d8240090000000000', 'bmp'); //24位位图(bmp)     
data.set('424d8e1b030000000000', 'bmp'); //256色位图(bmp)     
data.set('41433130313500000000', 'dwg'); //CAD (dwg)     
data.set('3c21444f435459504520', 'html'); //HTML (html)
data.set('3c21646f637479706520', 'htm'); //HTM (htm)
data.set('48544d4c207b0d0a0942', 'css'); //css
data.set('696b2e71623d696b2e71', 'js'); //js
data.set('7b5c727466315c616e73', 'rtf'); //Rich Text Format (rtf)     
data.set('38425053000100000000', 'psd'); //Photoshop (psd)     
data.set('46726f6d3a203d3f6762', 'eml'); //Email [Outlook Express 6] (eml)       
data.set('d0cf11e0a1b11ae10000', 'doc'); //MS Excel 注意：word、msi 和 excel的文件头一样     
data.set('d0cf11e0a1b11ae10000', 'vsd'); //Visio 绘图     
data.set('5374616E64617264204A', 'mdb'); //MS Access (mdb)      
data.set('252150532D41646F6265', 'ps');
data.set('255044462d312e350d0a', 'pdf'); //Adobe Acrobat (pdf)   
data.set('2e524d46000000120001', 'rmvb'); //rmvb/rm相同  
data.set('464c5601050000000900', 'flv'); //flv与f4v相同  
data.set('00000020667479706d70', 'mp4');
data.set('49443303000000002176', 'mp3');
data.set('000001ba210001000180', 'mpg'); //     
data.set('3026b2758e66cf11a6d9', 'wmv'); //wmv与asf相同    
data.set('52494646e27807005741', 'wav'); //Wave (wav)  
data.set('52494646d07d60074156', 'avi');
data.set('4d546864000000060001', 'mid'); //MIDI (mid)   
data.set('504b0304140000000800', 'zip');
data.set('526172211a0700cf9073', 'rar');
data.set('235468697320636f6e66', 'ini');
data.set('504b03040a0000000000', 'jar');
data.set('4d5a9000030000000400', 'exe');//可执行文件
data.set('3c25402070616765206c', 'jsp');//jsp文件
data.set('4d616e69666573742d56', 'mf');//MF文件
data.set('3c3f786d6c2076657273', 'xml');//xml文件
data.set('494e5345525420494e54', 'sql');//xml文件
data.set('7061636b616765207765', 'java');//java文件
data.set('406563686f206f66660d', 'bat');//bat文件
data.set('1f8b0800000000000000', 'gz');//gz文件
data.set('6c6f67346a2e726f6f74', 'properties');//bat文件
data.set('cafebabe0000002e0041', 'class');//bat文件
data.set('49545346030000006000', 'chm');//bat文件
data.set('04000000010000001300', 'mxp');//bat文件
data.set('504b0304140006000800', 'docx');//docx文件
data.set('d0cf11e0a1b11ae10000', 'wps');//WPS文字wps、表格et、演示dps都是一样的
data.set('6431303a637265617465', 'torrent');

module.exports = data;